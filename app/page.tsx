import Link from "next/link";
import { phones } from "@/data/phones";
import { MAIN_BRANDS } from "@/data/brands";
import PhoneGrid from "@/components/PhoneGrid";

const FEATURED_IDS = [
  "iphone-18-pro",
  "galaxy-s26-ultra",
  "xiaomi-17-pro",
  "honor-magic-8-pro",
];

export default function HomePage() {
  const featured = phones.filter((p) => FEATURED_IDS.includes(p.id));

  return (
    <>
      <section className="pb-14 pt-[76px]">
        <span className="mb-5 inline-block rounded-full border border-black/10 px-3 py-1.5 text-[12.5px] text-black/60 dark:border-white/15 dark:text-white/60">
          Tham khảo thiết bị công nghệ
        </span>
        <h1 className="mb-4 max-w-[640px] text-[34px] font-extrabold leading-[1.08] tracking-tight sm:text-[44px] lg:text-[54px]">
          Tra cứu điện thoại nhanh, rõ ràng, không rối mắt.
        </h1>
        <p className="mb-7 max-w-[480px] text-[17px] leading-relaxed text-black/60 dark:text-white/60">
          Minh Thanh tổng hợp giá bán, cấu hình và thông số của các dòng điện
          thoại phổ biến tại Việt Nam — giúp bạn so sánh và chọn máy dễ dàng
          hơn.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/iphone"
            className="inline-flex items-center rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-black"
          >
            Khám phá iPhone
          </Link>
          <Link
            href="/search"
            className="inline-flex items-center rounded-full border border-black/10 px-5 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5 dark:border-white/15"
          >
            Tìm kiếm thiết bị
          </Link>
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          {MAIN_BRANDS.map((b) => (
            <Link
              key={b.slug}
              href={`/${b.slug}`}
              className="min-w-[130px] flex-1 rounded-[18px] border border-black/[0.08] bg-white p-5 transition-transform hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-[#333333]"
            >
              <p className="mb-0.5 text-base font-bold">{b.label}</p>
              <p className="text-[12.5px] text-black/50 dark:text-white/50">
                {phones.filter((p) => p.brand === b.key).length} thiết bị
              </p>
            </Link>
          ))}
          <Link
            href="/khac"
            className="min-w-[130px] flex-1 rounded-[18px] border border-black/[0.08] bg-white p-5 transition-transform hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-[#333333]"
          >
            <p className="mb-0.5 text-base font-bold">Khác</p>
            <p className="text-[12.5px] text-black/50 dark:text-white/50">
              Vivo · OPPO · Honor · Huawei
            </p>
          </Link>
        </div>
      </section>

      <section className="pb-16">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="text-2xl font-bold tracking-tight">
            Thiết bị nổi bật
          </h2>
        </div>
        <PhoneGrid phones={featured} />
      </section>
    </>
  );
}
