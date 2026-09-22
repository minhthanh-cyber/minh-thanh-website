"use client";

import { useState } from "react";
import { DeviceIcon } from "./icons";

interface PhoneImageProps {
  src: string;
  alt: string;
}

/**
 * Hiển thị ảnh thiết bị từ /public/images/...
 * Nếu ảnh chưa được thêm vào (giai đoạn dữ liệu mẫu), tự động hiện icon
 * placeholder thay vì để trình duyệt hiện ảnh vỡ.
 */
export default function PhoneImage({ src, alt }: PhoneImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full w-full items-center justify-center text-black/25 dark:text-white/25">
        <DeviceIcon className="h-1/2 w-1/2" />
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover"
      onError={() => setFailed(true)}
    />
  );
}
