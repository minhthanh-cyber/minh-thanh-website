import Image from "next/image";

export default function PhoneCard({ title, imageSrc }: { title: string; imageSrc: string }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800">
      
      {/* Khung chứa Thumbnail */}
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
        
        {/* 1. Vệt sáng tráng gương */}
        <div className="absolute inset-0 z-10 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] pointer-events-none group-hover:animate-shine" />

        {/* 2. Ảnh Thumbnail với hiệu ứng nẩy nhẹ khi rê chuột */}
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>

      {/* Tên sản phẩm */}
      <h3 className="mt-3 text-center text-sm font-semibold text-gray-800 dark:text-gray-100">
        {title}
      </h3>
    </div>
  );
}