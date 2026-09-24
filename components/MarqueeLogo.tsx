"use client";

export default function MarqueeLogo() {
  const items = [
    "THANH WIND OFFICIAL",
    "Tra cứu điện thoại nhanh chóng & chính xác",
    "Minh Thanh — Tra cứu cấu hình & Giá điện thoại",
  ];

  return (
    <div className="relative flex overflow-x-hidden rounded-2xl bg-gray-50/80 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-700/60 py-3.5 shadow-sm backdrop-blur-md">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-sm font-semibold text-gray-700 dark:text-gray-300">
        {[...items, ...items, ...items, ...items].map((text, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="text-gray-400 dark:text-gray-600">•</span>
            {text === "THANH WIND OFFICIAL" ? (
              <div className="flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="Thanh Wind Logo"
                  className="h-5 w-5 rounded-full object-cover border border-gray-200 dark:border-gray-700 shadow-xs"
                  onError={(e) => {
                    // Nếu không thấy file logo.png thì tự động đổi sang dùng chữ icon để không bao giờ vỡ ảnh
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
                <span className="font-extrabold text-gray-900 dark:text-white tracking-wide">
                  THANH WIND OFFICIAL
                </span>
              </div>
            ) : (
              <span>{text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}