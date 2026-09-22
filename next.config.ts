import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Cho phép xuất website ra định dạng tĩnh HTML/CSS
  images: {
    unoptimized: true, // Tắt chế độ tối ưu ảnh tự động của Next.js
  },
};

export default nextConfig;