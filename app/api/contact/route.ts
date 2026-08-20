import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  company?: string;
  projectType?: string;
  problem?: string;
  timeline?: string;
  contactInfo?: string;
  website?: string; // honeypot field, must stay empty
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const requestLog = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > MAX_REQUESTS_PER_WINDOW;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, company, projectType, problem, timeline, contactInfo, website } = body;

  // Honeypot: bots fill every field, humans never see/fill this one.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name?.trim() || !problem?.trim() || !contactInfo?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (
    name.length > 200 ||
    (company?.length ?? 0) > 200 ||
    contactInfo.length > 200 ||
    problem.length > 5000
  ) {
    return NextResponse.json({ error: "Field too long" }, { status: 400 });
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO_EMAIL,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
    console.error("[contact] Missing SMTP env configuration");
    return NextResponse.json(
      { error: "Server email is not configured yet" },
      { status: 500 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const replyTo = EMAIL_RE.test(contactInfo.trim()) ? contactInfo.trim() : undefined;
    const escapedProblem = escapeHtml(problem).replace(/\n/g, "<br/>");

    await transporter.sendMail({
      from: `"Portfolio Website" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo,
      subject: `[Website] ${projectType?.trim() || "Trao đổi hợp tác"} — ${company?.trim() || name}`,
      text: `Họ và tên: ${name}\nDoanh nghiệp/Thương hiệu: ${company ?? "-"}\nMuốn xây dựng: ${projectType ?? "-"}\nThời gian dự kiến: ${timeline ?? "-"}\nEmail/SĐT: ${contactInfo}\n\nBài toán hiện tại:\n${problem}`,
      html: `
        <div style="font-family:sans-serif;line-height:1.6">
          <p><strong>Họ và tên:</strong> ${escapeHtml(name)}</p>
          <p><strong>Doanh nghiệp/Thương hiệu:</strong> ${escapeHtml(company ?? "-")}</p>
          <p><strong>Muốn xây dựng:</strong> ${escapeHtml(projectType ?? "-")}</p>
          <p><strong>Thời gian dự kiến:</strong> ${escapeHtml(timeline ?? "-")}</p>
          <p><strong>Email/SĐT:</strong> ${escapeHtml(contactInfo)}</p>
          <hr/>
          <p><strong>Bài toán hiện tại:</strong></p>
          <p>${escapedProblem}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Failed to send email", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
  }
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
