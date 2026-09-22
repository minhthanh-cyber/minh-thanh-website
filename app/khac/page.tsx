import type { Metadata } from "next";
import Link from "next/link";
import { KHAC_BRANDS } from "@/data/brands";
import { DeviceIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Khác — MINH THANH",
};

export default function KhacPage() {
  return (
    <section className="pb-16 pt-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Khác</h1>
      </div>
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {KHAC_BRANDS.map((b) => (
          <Link
            key={b.slug}
            href={`/khac/${b.slug}`}
            className="overflow-hidden rounded-[20px] border border-black/[0.08] bg-white transition-transform hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-[#333333]"
          >
            <div className="flex aspect-square items-center justify-center bg-black/[0.04] text-black/25 dark:bg-white/[0.06] dark:text-white/25">
              <DeviceIcon className="h-1/3 w-1/3" />
            </div>
            <div className="p-4">
              <p className="text-[15.5px] font-bold">{b.label}</p>
              <p className="mt-1 text-[12.5px] text-black/50 dark:text-white/50">
                Xem các thiết bị {b.label}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
