import type { Phone } from "@/data/phones";
import PhoneCard from "./PhoneCard";

export default function PhoneGrid({ phones }: { phones: Phone[] }) {
  if (phones.length === 0) {
    return (
      <div className="py-16 text-center text-sm text-black/50 dark:text-white/50">
        Không tìm thấy thiết bị phù hợp.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {phones.map((phone) => (
        <PhoneCard key={phone.id} phone={phone} />
      ))}
    </div>
  );
}
