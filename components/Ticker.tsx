"use client";

import React from "react";

interface TickerProps {
  items?: string[];
}

export default function Ticker({
  items = [
    "THANH WIND OFFICIAL",
    "Tra cứu điện thoại nhanh chóng & chính xác",
    "Minh Thanh — Tra cứu cấu hình & Giá điện thoại",
  ],
}: TickerProps) {
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full py-4 flex justify-center items-center overflow-hidden">
      {/* Thẻ nền tối Bo tròn - Phong cách Glassmorphism */}
      <div className="relative max-w-5xl w-full mx-4 px-4 py-2.5 rounded-2xl bg-[#1e1f25]/90 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden flex items-center">
        
        {/* Hiệu ứng mờ 2 đầu */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#1e1f25] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#1e1f25] to-transparent z-10 pointer-events-none" />

        {/* Dòng chữ chạy */}
        <div className="flex w-full overflow-hidden">
          <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused] items-center text-sm font-semibold tracking-wide text-slate-100">
            {duplicatedItems.map((text, idx) => {
              const isBrand = idx % items.length === 0;
              return (
                <div key={idx} className="flex items-center space-x-4 shrink-0 mr-6">
                  {isBrand && (
                    <span className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-[10px] text-white font-bold shadow-sm">
                      ✿
                    </span>
                  )}
                  
                  <span
                    className={
                      isBrand
                        ? "font-bold text-white uppercase tracking-wider"
                        : "text-slate-300 font-normal"
                    }
                  >
                    {text}
                  </span>

                  <span className="text-slate-500 font-bold">•</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}