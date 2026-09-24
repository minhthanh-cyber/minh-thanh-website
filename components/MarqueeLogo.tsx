import Image from "next/image";

export default function MarqueeLogo() {
  const content = (
    <div className="flex items-center space-x-8 whitespace-nowrap px-4">
      <span className="flex items-center space-x-3 text-sm font-bold uppercase tracking-wider text-gray-700 dark:text-gray-200">
        <div className="relative h-7 w-7 overflow-hidden rounded-full border border-gray-200 dark:border-gray-700 bg-white p-0.5">
          <Image
            src="/logo.png"
            alt="Thanh Wind Logo"
            width={28}
            height={28}
            className="h-full w-full object-contain"
          />
        </div>
        <span>THANH WIND OFFICIAL</span>
      </span>
      <span className="text-gray-400">•</span>
      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
        Tra cứu điện thoại nhanh chóng & chính xác
      </span>
      <span className="text-gray-400">•</span>
    </div>
  );

  return (
    <div className="relative my-6 overflow-hidden rounded-2xl bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 py-3 dark:from-gray-800/80 dark:via-gray-800 dark:to-gray-800/80 border border-gray-200/80 dark:border-gray-700/80 shadow-sm">
      <div className="flex w-[200%] animate-marquee hover:[animation-play-state:paused]">
        {content}
        {content}
        {content}
        {content}
      </div>
    </div>
  );
}