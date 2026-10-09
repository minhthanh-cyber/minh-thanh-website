# THANH WIND — BẢN ĐÃ GỘP, DÙNG CHO VS CODE CŨ

Bản ZIP này được tạo từ 2 nguồn:

1. `ThanhWind-HienTai.zip` bạn xuất từ `D:\websites\minh-thanh`.
2. Bản nâng cấp `Thanh-Wind-PhoneHub-Liquid-Glass-238-Admin-FINAL.zip`.

## ĐÃ GIỮ NGUYÊN TỪ BẢN HIỆN TẠI

- `data/phones.ts`: **giữ nguyên từng byte**, không cắt bớt sản phẩm hoặc tự sửa giá.
- `public/images/`: **giữ toàn bộ 75 file ảnh** và các thư mục ảnh có trong ZIP của bạn.
- Toàn bộ file chỉ có ở bản cũ cũng được giữ lại.
- Không đụng vào `.git`, `.env.local`, GitHub hay Vercel hiện tại.

## ĐÃ NÂNG CẤP

- Giao diện Liquid Glass đục hơn, thanh tìm kiếm và card sản phẩm, mobile/desktop.
- Admin tại `/ThanhWindAdmin` (không đặt link trong menu công khai).
- 238 **tùy chỉnh giao diện** theo 17 nhóm, không phải 238 module nghiệp vụ riêng biệt.
- Thêm/sửa/xóa điện thoại; nhiều phiên bản RAM/ROM, màu, giá, SKU, tồn kho; upload ảnh.
- Thanh Wind AI sử dụng OpenRouter, khóa API key ở server.
- API admin kiểm tra session + CSRF, không dùng mật khẩu dự phòng.
- Dùng một file route API trong source. Các route SSR của Next.js vẫn có thể tạo thêm Vercel Functions.

## CÁCH CHÈN VÀO DỰ ÁN VS CODE HIỆN TẠI — NGẮN NHẤT

**A.** Giải nén ZIP này vào `D:\websites\ThanhWind-Merged` (đảm bảo `package.json` nằm ngay trong `ThanhWind-Merged`).

**B.** Trong Terminal VS Code ở `D:\websites\minh-thanh`, chắc chắn đang ở nhánh `upgrade-liquid-glass-admin` và code đã commit sạch. Chạy đúng **1 lệnh**:

```powershell
& "D:\websites\ThanhWind-Merged\APPLY_TO_EXISTING_PROJECT.ps1" -Target "D:\websites\minh-thanh"
```

Nếu PowerShell chặn script vì ExecutionPolicy, chạy phiên chỉ cho lần này:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File "D:\websites\ThanhWind-Merged\APPLY_TO_EXISTING_PROJECT.ps1" -Target "D:\websites\minh-thanh"
```

Script **không xóa file**, không commit/push. Nó tự từ chối nếu bạn đang ở branch `main` hoặc working tree chưa sạch. Nó giữ nguyên `data/phones.ts`, `public/images`, `.git`, các file `.env`, `node_modules`, `.next`, `out`.

**C.** Kiểm tra trước khi gửi lên GitHub:

```powershell
npm install
npm run build
npm run dev
```

Mở `http://localhost:3000`. Đăng nhập Admin, xem thử catalog và giao diện. Nhấn Ctrl+C dừng dev server. Không push nếu build báo lỗi.

**D.** Chỉ khi build và kiểm thử đạt:

```powershell
git add -A
git commit -m "Integrate ThanhWind Liquid Glass and Admin"
git push -u origin upgrade-liquid-glass-admin
```

Tạo **Pull Request** trên GitHub từ `upgrade-liquid-glass-admin` vào `main`. Merge khi đã kiểm tra Preview deployment. Sau đó Vercel cập nhật Production từ `main` nếu dự án đã kết nối đúng repo.

### Khôi phục nếu không thích bản nâng cấp

Chưa commit: `git restore .` và `git clean -nd` để xem file mới nào sẽ bị dọn, rồi mới dùng `git clean -fd` nếu chắc chắn; **không xóa `.env.local` hoặc dữ liệu ngoài Git**. Cách an toàn khác là chuyển về `main` sau khi đã lưu các thay đổi cần thiết.

## Environment Variables — Chỉ nhập trên Vercel

- `ADMIN_USERNAME` (không bắt buộc; mặc định `ThanhWind`)
- `ADMIN_PASSWORD` — bắt buộc, từ 12 ký tự.
- `SESSION_SECRET` — bắt buộc, ngẫu nhiên từ 48 ký tự.
- `OPENROUTER_API_KEY` — dùng cho AI.
- `OPENROUTER_MODEL` — tùy chọn, cần chọn model hợp lệ.
- `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN` — bắt buộc để thao tác Admin lưu bền vững.

Không nhập key vào GitHub hay gửi mật khẩu cho ChatGPT. Khi chưa có Redis, website đọc dữ liệu từ `data/phones.ts` nhưng Admin sẽ từ chối ghi thay vì giả vờ lưu.

## Giới hạn của lần kiểm tra này

Đã kiểm tra cú pháp mã nguồn TypeScript/TSX và bảo toàn nguồn dữ liệu/ảnh. Môi trường kiểm thử không có đủ cache npm (`yocto-queue`), vì vậy **chưa xác thực được `next build` hoàn chỉnh** hoặc deployment thật trên Vercel. Chạy bước C trên VS Code của bạn trước khi merge Production.
