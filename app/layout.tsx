import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import { ThemeProvider } from "@/lib/theme-context";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "vietnamese"],
  axes: ["opsz", "SOFT", "WONK"],
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
    default: "Hoàng Nguyễn — Cố vấn & Đối tác Phát triển Hệ sinh thái Nội dung",
    template: "%s — Hoàng Nguyễn",
  },
  description:
    "Từ ý tưởng đến hệ sinh thái nội dung. Tôi đồng hành cùng doanh nghiệp và thương hiệu từ định hướng, chiến lược nội dung, kết nối Creator/KOL/KOC, sản xuất, hậu kỳ, phân phối đa nền tảng đến theo dõi và tối ưu.",
  keywords: [
    "Hoang Nguyen",
    "content ecosystem consultant",
    "creator network",
    "Challenge Me",
    "Highnoy",
    "METUB",
    "chiến lược nội dung số",
    "hệ sinh thái nội dung",
    "Creator KOL KOC",
  ],
  openGraph: {
    title: "Hoàng Nguyễn — Cố vấn & Đối tác Phát triển Hệ sinh thái Nội dung",
    description:
      "Từ ý tưởng đến hệ sinh thái nội dung — định hướng, content, creator, sản xuất, phân phối đa nền tảng, tối ưu.",
    url: siteUrl,
    siteName: "Hoàng Nguyễn",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoàng Nguyễn — Cố vấn & Đối tác Phát triển Hệ sinh thái Nội dung",
    description: "Từ ý tưởng đến hệ sinh thái nội dung.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink grain selection:bg-accent selection:text-bg">
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
