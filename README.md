# Hoàng Nguyễn (Liam) — Portfolio Website

Website portfolio cá nhân cho Hoàng Nguyễn (Liam) — Content Strategy & Creator Network Consultant. Xây bằng Next.js 16 (App Router) + TypeScript + Tailwind CSS v4, song ngữ Việt/Anh, dark mode "luxury purple", animation mượt (Framer Motion + Lenis), và API Node.js riêng xử lý form liên hệ (Nodemailer).

## Cấu trúc dự án

```
app/
  layout.tsx        # Font, metadata, providers
  page.tsx           # Ghép các section thành trang chủ
  globals.css         # Design tokens (màu, gradient, glass, aurora...)
  api/contact/route.ts # API Node.js gửi email khi khách điền form liên hệ
components/            # Navbar, Hero, Timeline, Awards, Portfolio, Contact, Footer...
lib/
  content.ts           # TOÀN BỘ nội dung song ngữ (vi/en) — sửa nội dung ở đây
  language-context.tsx  # Context chuyển đổi ngôn ngữ (lưu localStorage)
public/                 # Ảnh tĩnh — xem mục "Thay ảnh thật" bên dưới
```

## Chạy thử ở máy local

```bash
npm install
npm run dev
```

Mở http://localhost:3000.

## Sửa nội dung

Toàn bộ text (tiếng Việt lẫn tiếng Anh) nằm trong [`lib/content.ts`](lib/content.ts) — mỗi phần (hero, timeline, awards, portfolio, contact...) có object riêng cho `vi` và `en`. Sửa trực tiếp trong file này, không cần đụng vào component.

## Thay ảnh thật

Hiện trang đang dùng placeholder gradient (không cần file ảnh) ở các vị trí:

- **Chân dung Hero**: khối gradient trong [`components/Hero.tsx`](components/Hero.tsx) — có ghi chú `/public/images/portrait.jpg`. Để thay ảnh thật: thêm file vào `public/images/portrait.jpg`, rồi thay khối `<svg>` placeholder bằng thẻ `<Image src="/images/portrait.jpg" ... />` (dùng `next/image`).
- **Logo nhãn hàng** (marquee "Thương hiệu đã đồng hành"): hiện là wordmark chữ trong [`components/Marquee.tsx`](components/Marquee.tsx). Có thể thay bằng logo SVG/PNG thật nếu có quyền sử dụng.
- **Ảnh cover case-study**: hiện là gradient trong [`components/Portfolio.tsx`](components/Portfolio.tsx) (mảng `gradients`). Có thể thay bằng ảnh chiến dịch thật.

## Cấu hình form liên hệ (Node.js + Nodemailer)

Form liên hệ gửi POST tới `app/api/contact/route.ts` — một API route Node.js tự chủ (không phụ thuộc dịch vụ thứ 3), dùng Nodemailer qua SMTP.

1. Copy `.env.example` thành `.env.local`
2. Điền thông tin SMTP (Gmail App Password, Zoho, Amazon SES, hoặc email do Hostinger cấp theo domain riêng):

```bash
cp .env.example .env.local
```

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-address@gmail.com
SMTP_PASS=your-app-password
CONTACT_TO_EMAIL=liamnguyen.hn@gmail.com
```

API có sẵn: honeypot chống bot, giới hạn 5 request/phút/IP, validate email, giới hạn độ dài nội dung.

## Đưa code lên GitHub

```bash
git add -A
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Deploy lên Hostinger

Vì site dùng API route Node.js (không phải static thuần), Hostinger cần gói **hỗ trợ Node.js** (VPS, Cloud, hoặc Business hosting có Node.js App), không dùng được gói Shared hosting chỉ phục vụ static HTML.

### Cách 1 — Hostinger VPS / Node.js App (khuyến nghị)

1. Trong hPanel, tạo **Node.js Application**, chọn Node 20+.
2. Push code lên GitHub (xem mục trên), sau đó kết nối repo hoặc `git pull` trực tiếp trên server.
3. Cài dependencies và build:
   ```bash
   npm install
   npm run build
   ```
4. Điền biến môi trường (SMTP_*, CONTACT_TO_EMAIL, NEXT_PUBLIC_SITE_URL) trong phần Environment Variables của hPanel — **không commit file `.env.local`**.
5. Start command: `npm run start` (Next.js sẽ chạy ở port 3000 mặc định — hPanel/Node.js App tự map domain vào port này, hoặc set biến `PORT` nếu cần).
6. Trỏ domain về ứng dụng Node.js trong hPanel, bật SSL (Hostinger cấp free SSL Let's Encrypt).

### Cách 2 — Nền tảng thay thế tối ưu cho Next.js

Nếu muốn triển khai nhanh, ít cấu hình hơn: **Vercel** (đơn vị tạo ra Next.js, hỗ trợ App Router + API routes native, free tier đủ dùng) hoặc **Railway/Render**. Vẫn giữ domain trỏ từ Hostinger (chỉ đổi DNS record sang nền tảng deploy), không nhất thiết phải host code trên chính Hostinger.

## Kiểm tra trước khi launch

```bash
npm run lint
npm run build
```

## Việc còn cần anh Hoàng Nguyễn bổ sung

- [ ] Ảnh chân dung thật (`public/images/portrait.jpg`)
- [ ] Logo/ảnh case-study thật (nếu có quyền sử dụng từ nhãn hàng)
- [ ] Link mạng xã hội thật (hiện đang là `#` placeholder trong mảng `socials` ở `components/Contact.tsx`)
- [ ] Thông tin SMTP để form liên hệ gửi được email thật
- [ ] Tên miền thật (cập nhật `NEXT_PUBLIC_SITE_URL` trong `.env.local` để Open Graph/SEO đúng domain)
