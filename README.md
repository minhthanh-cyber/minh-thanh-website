# Thanh Wind — Phone Hub (Liquid Glass + Admin)

**Đây là bộ source đã gộp từ ZIP ThanhWind-HienTai.zip với bản Liquid Glass 238 tùy chỉnh.**

- Giữ nguyên **53 sản phẩm và 75 ảnh gốc** từ source người dùng cung cấp.
- Giao diện Liquid Glass và tối ưu mobile/desktop.
- Admin riêng tại `/ThanhWindAdmin`, không có link công khai trên trang chủ.
- Quản lý điện thoại và giá theo từng phiên bản RAM/ROM/màu/SKU/tồn kho, tải ảnh.
- Thanh Wind AI dùng OpenRouter; dữ liệu Admin lưu bằng Upstash Redis.
- 238 tùy chỉnh giao diện trong 17 nhóm (không phải 238 chức năng backend).

**Đọc file [`README_GOP_SOURCE_VSCODE.md`](README_GOP_SOURCE_VSCODE.md) trước khi đưa vào dự án VS Code cũ.** Bên trong có script `APPLY_TO_EXISTING_PROJECT.ps1` để chèn source an toàn lên nhánh `upgrade-liquid-glass-admin` mà không ghi đè `data/phones.ts` và `public/images`.

## Chạy local

```bash
npm install
npm run build
npm run dev
```

Mở http://localhost:3000 và `/ThanhWindAdmin`. Nhập key tại Vercel Environment Variables; không ghi key vào repository. Nếu chưa có Redis, thao tác thêm/sửa/xóa trên Admin sẽ bị từ chối để tránh thông báo lưu giả.

## Triển khai

Vercel framework `Next.js`, Node.js 22.x, Output Directory mặc định. Không dùng `output: 'export'`. Sau khi push và tạo Pull Request, kiểm tra Preview trước rồi mới merge vào nhánh Production `main`.

**Kiểm thử tại đây**: cú pháp 38 TS/TSX không lỗi, 59 đường import nội bộ hợp lệ, CSS parse được, 238 cấu hình hợp lệ, 53 đường ảnh sản phẩm đều tồn tại. Chưa chạy được build Next.js trọn vẹn do npm cache trong môi trường kiểm thử thiếu dependency. Cần chạy `npm run build` trên máy trước khi merge production.
