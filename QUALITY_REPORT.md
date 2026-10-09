# Thanh Wind v2 — kiểm tra chất lượng

Các kiểm tra đã thực hiện bằng cách đọc và kiểm tra source trong môi trường làm việc:

- 38 tệp TypeScript/TSX: kiểm tra cú pháp với TypeScript transpileModule (0 lỗi cú pháp).
- 238 tùy chỉnh giao diện, 17 nhóm; tất cả ID khác nhau; 238 CSS rules được tạo.
- Không có selector `tw-` không tham chiếu đến thành phần giao diện hiện tại.
- Các giá trị CSS được whitelist và clamp; thử giá trị injection trong design settings không lọt ra CSS.
- Giao diện trang chủ, header, footer không chứa liên kết đến Admin Panel.
- Mật khẩu Admin không có hardcoded fallback.
- Endpoint quản lý AI memory đòi hỏi đăng nhập.
- Hệ thống có 1 API route handler trong `app/api`.
- CSS parse bằng tinycss2: 0 lỗi cú pháp.
- Có giao diện upload ảnh chính và nhiều ảnh gallery, form RAM/ROM/giá/màu/SKU/tồn kho.

**Giới hạn kiểm tra:** Môi trường hiện tại không thể hoàn tất `npm ci` (cache npm thiếu dependency và truy cập tải package bị giới hạn), nên không thể chạy `next build` hay test trực tiếp deployment Vercel trong lượt này. Không tuyên bố 100% deploy được; hãy kiểm tra build trên Vercel, gửi log đầy đủ nếu phát sinh lỗi.

## Đối chiếu với `ThanhWind-HienTai.zip`

- ZIP hiện tại: 113 file thực tế; ZIP nâng cấp: 134 file; bản gộp có thêm script tích hợp và hướng dẫn sử dụng.
- `data/phones.ts` được giữ nguyên SHA-256 so với ZIP của bạn; giữ đủ 53 sản phẩm.
- `public/images`: toàn bộ 75 file ảnh được giữ nguyên nội dung; tất cả 53 đường dẫn `image` trong catalog có file tương ứng.
- 59 `import` nội bộ được kiểm tra đường dẫn; 0 import thiếu.
- Giao diện công khai không chứa link `/ThanhWindAdmin`.
- Bước `npm ci --offline` bị chặn vì cache thiếu gói `yocto-queue` nên **không được coi là kiểm thử build**.
