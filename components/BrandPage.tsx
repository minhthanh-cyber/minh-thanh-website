import type { BrandKey } from "@/data/phones";
import { phones } from "@/data/phones";
import PhoneGrid from "./PhoneGrid";

/**
 * Nội dung dùng chung cho các trang theo hãng chính: /iphone, /samsung, /xiaomi.
 * Mỗi route chỉ cần gọi component này với brand + label tương ứng,
 * tránh lặp lại JSX ở từng page.
 */
export default function BrandPage({
  brand,
  label,
}: {
  brand: BrandKey;
  label: string;
}) {
  const list = phones.filter((p) => p.brand === brand);

  return (
    <section className="pb-16 pt-10">
      <div className="mb-6 flex items-baseline justify-between">
        <h1 className="text-2xl font-bold tracking-tight">{label}</h1>
        <span className="text-[13.5px] font-semibold text-black/50 dark:text-white/50">
          {list.length} thiết bị
        </span>
      </div>
      <PhoneGrid phones={list} />
    </section>
  );
}
