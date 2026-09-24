export default function MarqueeLogo() {
  const content = (
    <div className="flex items-center space-x-8 whitespace-nowrap px-4">
      <span className="flex items-center space-x-3 text-sm font-bold uppercase tracking-wider text-gray-700 dark:text-gray-200">
        {/* Khung chứa logo */}
        <div className="relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-white p-0.5 shadow-sm dark:border-gray-700">
          <img
            src="/images/other/logo.png"
            alt="logo"
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
    <div className="relative my-6 overflow-hidden rounded-2xl border border-gray-200/80 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 py-3 shadow-sm dark:border-gray-700/80 dark:from-gray-800/80 dark:via-gray-800 dark:to-gray-800/80">
      <div className="flex w-[200%] animate-marquee hover:[animation-play-state:paused]">
        {content}
        {content}
        {content}
        {content}
      </div>
    </div>
  );
}