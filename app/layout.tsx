import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import { ThemeProvider } from "@/lib/theme-context";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hoangnguyen.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hoàng Nguyễn (Liam) — Content Strategy & Creator Network Consultant",
    template: "%s — Hoàng Nguyễn (Liam)",
  },
  description:
    "Chuyên gia tư vấn chiến lược nội dung số và phát triển mạng lưới Creators. 12 năm kiến tạo hệ sinh thái từ 0 — Challenge Me, Highnoy, METUB — cùng các thương hiệu Techcombank, Nike, Redbull, Vingroup, Samsung.",
  keywords: [
    "Hoang Nguyen",
    "Liam Nguyen",
    "content strategy consultant",
    "creator network",
    "Challenge Me",
    "Highnoy",
    "chiến lược nội dung số",
    "Head of Creators",
  ],
  openGraph: {
    title: "Hoàng Nguyễn (Liam) — Content Strategy & Creator Network Consultant",
    description:
      "12 năm kiến tạo hệ sinh thái nội dung số từ 0 — Challenge Me, Highnoy, METUB — cùng Techcombank, Nike, Redbull, Vingroup, Samsung.",
    url: siteUrl,
    siteName: "Hoàng Nguyễn (Liam)",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoàng Nguyễn (Liam) — Content Strategy & Creator Network Consultant",
    description:
      "Chuyên gia tư vấn chiến lược nội dung số & phát triển mạng lưới Creators.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${bricolage.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink grain selection:bg-violet-500">
        <ThemeProvider>
          <LanguageProvider>
            <SmoothScroll />
            <CustomCursor />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
