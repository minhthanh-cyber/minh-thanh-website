import { notFound } from "next/navigation";
import Link from "next/link";
import { phones, SPEC_LABELS } from "@/data/phones";
import { getBrandHref } from "@/data/brands";
import PhoneImage from "@/components/PhoneImage";

export function generateStaticParams() {
  return phones.map((p) => ({ id: p.id }));
}

export default async function PhoneDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const phone = phones.find((p) => p.id === id);
  if (!phone) notFound();

  const specEntries = Object.keys(phone.specs) as (keyof typeof phone.specs)[];

  return (
    <div className="grid grid-cols-1 items-start gap-10 pb-16 pt-11 md:grid-cols-2 md:gap-14">
      <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[26px] border border-black/[0.08] bg-black/[0.04] dark:border-white/10 dark:bg-white/[0.06]">
        <PhoneImage src={phone.image} alt={phone.name} />
      </div>

      <div>
        <Link
          href={getBrandHref(phone.brand)}
          className="mb-5 inline-block text-[13.5px] font-semibold text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white"
        >
          ← Quay lại
        </Link>
        <p className="mb-2.5 text-xs font-bold uppercase tracking-wider text-black/50 dark:text-white/50">
          {phone.brand}
        </p>
        <h1 className="mb-3 text-[32px] font-extrabold tracking-tight">
          {phone.name}
        </h1>
        <p className="mb-6 text-[22px] font-bold">{phone.price}</p>

        <div className="border-t border-black/[0.08] dark:border-white/10">
          {specEntries.map((key) => (
            <div
              key={key}
              className="flex justify-between gap-4 border-b border-black/[0.08] py-3.5 text-[14.5px] dark:border-white/10"
            >
              <span className="text-black/50 dark:text-white/50">
                {SPEC_LABELS[key]}
              </span>
              <span className="text-right font-semibold">{phone.specs[key]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
