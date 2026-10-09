# THANH WIND — LIQUID GLASS ADMIN PRO (V2)

## Tổng quan

- Website thông tin điện thoại sử dụng Next.js App Router, TypeScript.
- 238 tùy chỉnh giao diện có tác dụng, chia 17 nhóm có thể thu gọn.
- Liquid Glass **đục và rõ chữ**: tăng nền card, modal, chat, menu.
- Thanh Wind AI dùng OpenRouter, giữ API key hoàn toàn trên server.
- Admin đăng nhập server-side tại `/ThanhWindAdmin`. Đường vào Admin **không xuất hiện trên menu/trang chủ**. Biết URL không cho quyền quản trị; cần đăng nhập và CSRF.
- CRUD điện thoại, RAM/ROM/màu/SKU/tồn kho/giá cho mỗi phiên bản, upload ảnh chính và tối đa 8 ảnh gallery.
- PWA: manifest thường và manifest Admin riêng; không lưu cache HTML Admin hoặc API.
- Chỉ có **một file route API** `app/api/[[...slug]]/route.ts` (các trang SSR của Next.js có thể được Vercel triển khai riêng; cần kiểm tra số Functions thực tế sau deploy).

## Bắt buộc trên Vercel

Vercel → Project → Settings → Environment Variables:

| Tên | Mô tả |
|---|---|
| `ADMIN_USERNAME` | Tùy chọn, mặc định ThanhWind |
| `ADMIN_PASSWORD` | Bắt buộc, tối thiểu 12 ký tự |
| `SESSION_SECRET` | Bắt buộc, chuỗi ngẫu nhiên tối thiểu 48 ký tự |
| `OPENROUTER_API_KEY` | Key OpenRouter, chỉ cấu hình trên Vercel |
| `OPENROUTER_MODEL` | Tùy chọn, ví dụ `openrouter/free` (khả dụng tùy OpenRouter) |
| `UPSTASH_REDIS_REST_URL` | Bắt buộc để lưu dữ liệu Admin lâu dài |
| `UPSTASH_REDIS_REST_TOKEN` | Bắt buộc để lưu dữ liệu Admin lâu dài |

**Không gửi hoặc chèn bất kỳ mật khẩu/key nào vào mã nguồn.**

## Deploy

1. Giải nén ZIP. Đưa các file `package.json`, `app/`, `components/`, `lib/`, `data/`, `public/`, `next.config.ts` vào **gốc repo** (không upload node_modules).
2. Vercel Framework Preset **Next.js**; Build Command `npm run build`; Output Directory để mặc định (không chọn `public`). Node.js 22.x.
3. Cài Environment Variables, chọn Deploy/Redeploy.
4. Mở `/api/health`: `status: ok`. Xác nhận `adminConfigured: true`, `persistentStore: true`.
5. Vào `/ThanhWindAdmin` đăng nhập và tạo sản phẩm thử. Mở trang chủ để xem cập nhật, sau đó tải lại và thử ở một thiết bị khác.
6. Nếu cài PWA, mở đường `/ThanhWindAdmin` rồi dùng menu cài đặt trình duyệt hoặc nút **Cài App Admin**.

## Cảnh báo cần biết

- Giá và thông số ban đầu đến từ source ZIP gốc, có thể có sản phẩm dự kiến hoặc giá tham khảo. Không coi là giá bán đã xác minh.
- Thao tác thêm ảnh được chuyển thành JPEG nén trên thiết bị; có giới hạn kích thước để phù hợp Redis và body limit Vercel.
- Không có Redis: website xem được dữ liệu gốc, nhưng **Admin từ chối lưu/xóa**, không báo thành công giả.
- Việc ẩn link Admin không thay thế cho xác thực server-side. Chặn F12 không bảo vệ được source frontend đã phân phối.
- Để thay icon PWA hiện tại, thay `public/pwa-192.png` và `public/pwa-512.png`, sau đó triển khai lại.
- Khi đổi `ADMIN_PASSWORD` hoặc `SESSION_SECRET`, mọi phiên đăng nhập cũ sẽ hết hiệu lực.
