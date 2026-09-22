import { notFound } from "next/navigation";
import Link from "next/link";
import { phones } from "@/data/phones";
import { KHAC_BRANDS } from "@/data/brands";
import PhoneGrid from "@/components/PhoneGrid";

export function generateStaticParams() {
  return KHAC_BRANDS.map((b) => ({ brand: b.slug }));
}

export default async function KhacBrandPage({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand } = await params;
  const brandInfo = KHAC_BRANDS.find((b) => b.slug === brand);
  if (!brandInfo) notFound();

  const list = phones.filter((p) => p.brand === brandInfo.key);

  return (
    <section className="pb-16 pt-10">
      <Link
        href="/khac"
        className="mb-5 inline-block text-[13.5px] font-semibold text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white"
      >
        ← Khác
      </Link>
      <div className="mb-6 flex items-baseline justify-between">
        <h1 className="text-2xl font-bold tracking-tight">{brandInfo.label}</h1>
        <span className="text-[13.5px] font-semibold text-black/50 dark:text-white/50">
          {list.length} thiết bị
        </span>
      </div>
      <PhoneGrid phones={list} />
    </section>
  );
}
