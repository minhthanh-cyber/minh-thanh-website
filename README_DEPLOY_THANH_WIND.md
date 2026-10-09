# Thanh Wind — Hướng dẫn Deploy

## Environment Variables nên thêm trên Vercel
- `ADMIN_USERNAME` = `ThanhWind` (hoặc tên bạn muốn)
- `ADMIN_PASSWORD` = mật khẩu admin của bạn
- `SESSION_SECRET` = chuỗi bí mật dài ít nhất 48 ký tự
- `OPENROUTER_API_KEY` = API key OpenRouter
- `OPENROUTER_MODEL` = ví dụ `openrouter/free` hoặc model bạn muốn
- `UPSTASH_REDIS_REST_URL` = URL REST của Upstash Redis (khuyên dùng)
- `UPSTASH_REDIS_REST_TOKEN` = token REST của Upstash Redis (khuyên dùng)

## Ghi chú
- Nếu không có Upstash Redis, website vẫn chạy nhưng dữ liệu admin không đảm bảo lưu bền vững sau khi redeploy/cold start.
- Admin Panel nằm tại `/ThanhWindAdmin`.
- Website dùng đúng 1 API route handler trong `app/api/[[...slug]]/route.ts` để phù hợp Vercel Hobby.
