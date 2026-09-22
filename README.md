# Minh Thanh — Website tham khảo thiết bị công nghệ

Website Next.js (App Router) + TypeScript + Tailwind CSS, hiển thị giá bán,
thông số kỹ thuật và hình ảnh điện thoại để người dùng tham khảo.

## Công nghệ

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS

## Cài đặt & chạy thử

```bash
npm install
npm run dev
```

Sau đó mở [http://localhost:3000](http://localhost:3000).

Build production để kiểm tra lỗi:

```bash
npm run build
```

## Cấu trúc thư mục

```
app/            Các route (App Router)
components/     Component dùng chung (Header, Search, PhoneCard, ...)
data/           Dữ liệu điện thoại + danh sách hãng (phones.ts, brands.ts)
public/images/  Nơi đặt ảnh thiết bị thật
```

## Route hiện có

| Đường dẫn        | Nội dung                         |
| ----------------- | --------------------------------- |
| `/`                | Trang chủ                         |
| `/iphone`          | Danh sách iPhone                  |
| `/samsung`         | Danh sách Samsung                 |
| `/xiaomi`          | Danh sách Xiaomi                  |
| `/khac`            | Danh mục Vivo / OPPO / Honor / Huawei |
| `/khac/[brand]`    | Danh sách theo từng hãng trong "Khác" |
| `/search`          | Trang tìm kiếm                    |
| `/phone/[id]`      | Trang chi tiết một thiết bị        |

## Thêm điện thoại mới

Mở `data/phones.ts` và thêm một object vào mảng `phones`. Không cần sửa bất kỳ
component hay trang nào — card, trang danh sách, trang chi tiết, và tìm kiếm
đều tự động cập nhật.

## Thêm ảnh thật

Ảnh hiện đang dùng đường dẫn dạng `/images/<hãng>/<ten-file>.jpg` nhưng file
ảnh thật **chưa được đính kèm** (đây là dữ liệu mẫu). Đặt ảnh vào đúng thư mục
tương ứng trong `public/images/`, đúng tên file được khai báo trong
`data/phones.ts` — ảnh sẽ tự hiển thị. Nếu ảnh chưa tồn tại, giao diện sẽ tự
hiện icon thiết bị thay thế (xem `components/PhoneImage.tsx`), không bị vỡ ảnh.

```
public/images/iphone/
public/images/samsung/
public/images/xiaomi/
public/images/other/vivo/
public/images/other/oppo/
public/images/other/honor/
public/images/other/huawei/
```

## Theme sáng / tối

Nút bật/tắt trên Header lưu lựa chọn vào `localStorage` (khoá `mt-theme`) và
áp class `dark` lên thẻ `<html>` — Tailwind `darkMode: "class"` xử lý phần còn
lại (`tailwind.config.ts`).

## Phạm vi giai đoạn 1

Chưa bao gồm: đăng nhập/đăng ký, Admin, database, API phức tạp, bình luận,
tin tức, sự kiện, giỏ hàng, thanh toán — theo đúng phạm vi đã thống nhất.
