import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
      <h1 className="text-2xl font-bold">Không tìm thấy trang</h1>
      <p className="text-black/60 dark:text-white/60">
        Trang bạn tìm không tồn tại hoặc đã bị di chuyển.
      </p>
      <Link
        href="/"
        className="mt-2 inline-flex items-center rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white dark:bg-white dark:text-black"
      >
        Về trang chủ
      </Link>
    </div>
  );
}
