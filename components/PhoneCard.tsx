import Link from "next/link";
import type { Phone } from "@/data/phones";
import PhoneImage from "./PhoneImage";

export default function PhoneCard({ phone }: { phone: Phone }) {
  return (
    <Link
      href={`/phone/${phone.id}`}
      className="group flex flex-col overflow-hidden rounded-[20px] border border-black/[0.08] bg-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-[#333333]"
    >
      <div className="aspect-square overflow-hidden bg-black/[0.04] dark:bg-white/[0.06]">
        <PhoneImage src={phone.image} alt={phone.name} />
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-black/50 dark:text-white/50">
          {phone.brand}
        </span>
        <h3 className="text-[15.5px] font-bold leading-snug">{phone.name}</h3>
        <p className="text-[14.5px] font-semibold text-black/60 dark:text-white/60">
          {phone.price}
        </p>
        {phone.note && (
          <p className="min-h-[34px] text-[12.5px] leading-relaxed text-black/50 dark:text-white/50">
            {phone.note}
          </p>
        )}
        <span className="mt-2 inline-flex w-fit items-center rounded-full border border-black/10 px-4 py-2 text-[13px] font-semibold transition-colors group-hover:bg-black group-hover:text-white dark:border-white/15 dark:group-hover:bg-white dark:group-hover:text-black">
          Xem chi tiết
        </span>
      </div>
    </Link>
  );
}
