export type BrandKey =
  | "iPhone"
  | "Samsung"
  | "Xiaomi"
  | "Vivo"
  | "OPPO"
  | "Honor"
  | "Huawei";

export interface PhoneSpecs {
  manHinh: string;
  chip: string;
  ram: string;
  boNho: string;
  camera: string;
  pin: string;
  heDieuHanh: string;
}

export interface Phone {
  id: string;
  name: string;
  brand: BrandKey;
  price: string;
  note?: string;
  image: string;
  specs: PhoneSpecs;
}

export const SPEC_LABELS: Record<keyof PhoneSpecs, string> = {
  manHinh: "Màn hình",
  chip: "Chip",
  ram: "RAM",
  boNho: "Bộ nhớ",
  camera: "Camera",
  pin: "Pin",
  heDieuHanh: "Hệ điều hành",
};

export const phones: Phone[] = [
  // ========================================
  // iPHONE
  // ========================================

  {
    id: "iphone-17-pro-max",
    name: "iPhone 17 Pro Max",
    brand: "iPhone",
    price: "34.590.000₫",
    image: "/images/iphone/iphone-17-pro-max.jpg",
    specs: {
      manHinh: 'Super Retina XDR OLED 6.9" / ProMotion 120Hz',
      chip: "Apple A19 Pro",
      ram: "Hãng không công bố",
      boNho: "256GB / 512GB / 1TB / 2TB",
      camera: "48MP + 48MP + 48MP / trước 18MP",
      pin: "Thời gian xem video lên đến 37 giờ",
      heDieuHanh: "iOS 26",
    },
  },

  {
    id: "iphone-17-pro",
    name: "iPhone 17 Pro",
    brand: "iPhone",
    price: "31.990.000₫",
    image: "/images/iphone/iphone-17-pro.jpg",
    specs: {
      manHinh: 'Super Retina XDR OLED 6.3" / ProMotion 120Hz',
      chip: "Apple A19 Pro",
      ram: "Hãng không công bố",
      boNho: "256GB / 512GB / 1TB",
      camera: "48MP + 48MP + 48MP / trước 18MP",
      pin: "Thời gian xem video lên đến 31 giờ",
      heDieuHanh: "iOS 26",
    },
  },

  {
    id: "iphone-17",
    name: "iPhone 17",
    brand: "iPhone",
    price: "24.990.000₫",
    image: "/images/iphone/iphone-17.jpg",
    specs: {
      manHinh: 'Super Retina XDR OLED 6.3" / ProMotion 120Hz',
      chip: "Apple A19",
      ram: "Hãng không công bố",
      boNho: "256GB / 512GB",
      camera: "48MP + 48MP / trước 18MP",
      pin: "Thời gian xem video lên đến 30 giờ",
      heDieuHanh: "iOS 26",
    },
  },

  {
    id: "iphone-17e",
    name: "iPhone 17e",
    brand: "iPhone",
    price: "17.990.000₫",
    image: "/images/iphone/iphone-17e.jpg",
    specs: {
      manHinh: 'Super Retina XDR OLED 6.1"',
      chip: "Apple A19",
      ram: "Hãng không công bố",
      boNho: "256GB / 512GB",
      camera: "48MP / trước 12MP",
      pin: "Thời gian xem video lên đến 26 giờ",
      heDieuHanh: "iOS 26",
    },
  },

  {
    id: "iphone-18-pro-max",
    name: "iPhone 18 Pro Max",
    brand: "iPhone",
    price: "41.990.000₫",
    image: "/images/iphone/iphone-18-pro-max.jpg",
    specs: {
      manHinh: 'Super Retina XDR OLED 6.9" / ProMotion 120Hz',
      chip: "Apple A20 Pro",
      ram: "Hãng không công bố",
      boNho: "256GB / 512GB / 1TB / 2TB",
      camera: "48MP + 48MP + 48MP / trước 18MP",
      pin: "Đang cập nhật",
      heDieuHanh: "iOS 27",
    },
  },

  {
    id: "iphone-18-pro",
    name: "iPhone 18 Pro",
    brand: "iPhone",
    price: "38.990.000₫",
    image: "/images/iphone/iphone-18-pro.jpg",
    specs: {
      manHinh: 'Super Retina XDR OLED 6.3" / ProMotion 120Hz',
      chip: "Apple A20 Pro",
      ram: "Hãng không công bố",
      boNho: "256GB / 512GB / 1TB",
      camera: "48MP + 48MP + 48MP / trước 18MP",
      pin: "Đang cập nhật",
      heDieuHanh: "iOS 27",
    },
  },

  {
    id: "iphone-air",
    name: "iPhone Air",
    brand: "iPhone",
    price: "22.990.000₫",
    image: "/images/iphone/iphone-air.jpg",
    specs: {
      manHinh: 'Super Retina XDR OLED 6.5" / ProMotion 120Hz',
      chip: "Apple A19 Pro",
      ram: "Hãng không công bố",
      boNho: "256GB / 512GB / 1TB",
      camera: "48MP / trước 18MP",
      pin: "Đang cập nhật",
      heDieuHanh: "iOS 26",
    },
  },

  {
    id: "iphone-duo",
    name: "iPhone Duo",
    brand: "iPhone",
    price: "64.990.000₫",
    image: "/images/iphone/iphone-duo.jpg",
    specs: {
      manHinh: "Đang cập nhật",
      chip: "Đang cập nhật",
      ram: "Hãng không công bố",
      boNho: "Đang cập nhật",
      camera: "Đang cập nhật",
      pin: "Đang cập nhật",
      heDieuHanh: "iOS",
    },
  },

  // ========================================
  // SAMSUNG
  // ========================================

  {
    id: "samsung-galaxy-s26",
    name: "Samsung Galaxy S26",
    brand: "Samsung",
    price: "21.990.000₫",
    image: "/images/samsung/samsung-galaxy-s26.jpg",
    specs: {
      manHinh: 'Dynamic AMOLED 2X 6.3" / 120Hz',
      chip: "Exynos 2600",
      ram: "12GB",
      boNho: "256GB / 512GB",
      camera: "50MP + 12MP + 10MP / trước 12MP",
      pin: "4300mAh",
      heDieuHanh: "One UI 9.0 / Android 17",
    },
  },

    {
    id: "samsung-galaxy-s26-plus",
    name: "Samsung Galaxy S26 Plus",
    brand: "Samsung",
    price: "23.990.000₫",
    image: "/images/samsung/samsung-galaxy-s26-plus.jpg",
    specs: {
      manHinh: 'Dynamic AMOLED 2X 6.3" / 120Hz',
      chip: "Exynos 2600",
      ram: "12GB",
      boNho: "256GB / 512GB",
      camera: "50MP + 12MP + 10MP / trước 12MP",
      pin: "4900mAh",
      heDieuHanh: "One UI 9.0 / Android 17",
    },
  },

  {
    id: "samsung-s26-fe-5g",
    name: "Samsung Galaxy S26 FE 5G",
    brand: "Samsung",
    price: "16.510.000₫",
    image: "/images/samsung/samsung-s26-fe-5g.jpg",
    specs: {
      manHinh: 'Dynamic AMOLED 2X 6.7" / 120Hz',
      chip: "Exynos 2500",
      ram: "8GB",
      boNho: "128GB / 256GB",
      camera: "50MP + 8MP + 12MP / trước 12MP",
      pin: "4900mAh / sạc 45W",
      heDieuHanh: "One UI / Android",
    },
  },

  {
    id: "samsung-s26-ultra",
    name: "Samsung Galaxy S26 Ultra",
    brand: "Samsung",
    price: "31.990.000₫",
    image: "/images/samsung/samsung-s26-ultra.jpg",
    specs: {
      manHinh: 'QHD+ Dynamic AMOLED 2X 6.9"',
      chip: "Snapdragon 8 Elite Gen 5 for Galaxy",
      ram: "12GB / 16GB",
      boNho: "256GB / 512GB / 1TB",
      camera: "200MP + 50MP + 50MP + 10MP / trước 12MP",
      pin: "5000mAh / sạc 60W",
      heDieuHanh: "One UI / Android",
    },
  },

  // ========================================
  // XIAOMI
  // ========================================

  {
    id: "xiaomi-18",
    name: "Xiaomi 18",
    brand: "Xiaomi",
    price: "cập nhật",
    image: "/images/other/xiaomi/xiaomi-18.jpg",
    specs: {
      manHinh: 'AMOLED 1.5K 6.36" / 120Hz',
      chip: "Snapdragon 8 Elite Gen 6 2nm",
      ram: "12GB",
      boNho: "256GB / 512GB / 1TB",
      camera: "cập nhật",
      pin: "cập nhật",
      heDieuHanh: "HyperOS 4 & Android 17",
    },
  },

   {
    id: "xiaomi-18-pro",
    name: "Xiaomi 18 Pro",
    brand: "Xiaomi",
    price: "cập nhật",
    image: "/images/other/xiaomi/xiaomi-18-pro.jpg",
    specs: {
      manHinh: 'LTPOAMOLED 1.5K 6.36" / 120Hz',
      chip: "Snapdragon 8 Elite Gen 6 2nm",
      ram: "12GB / 16GB",
      boNho: "256GB / 512GB / 1TB",
      camera: "cập nhật",
      pin: "cập nhật",
      heDieuHanh: "HyperOS 4 & Android 17",
    },
  },

   {
    id: "xiaomi-18-pro-max",
    name: "Xiaomi 18 Pro Max",
    brand: "Xiaomi",
    price: "cập nhật",
    image: "/images/other/xiaomi/xiaomi-18-pro-max.jpg",
    specs: {
      manHinh: 'LTPO AMOLED 2K 6.9" / 120Hz',
      chip: "Snapdragon 8 Elite Gen 6 2nm",
      ram: "12GB / 16GB",
      boNho: "256GB / 512GB / 1TB",
      camera: "cập nhật",
      pin: "cập nhật",
      heDieuHanh: "HyperOS 4 & Android 17",
    },
  },

  {
    id: "xiaomi-17-ultra",
    name: "Xiaomi 17 Ultra",
    brand: "Xiaomi",
    price: "31.010.000₫",
    image: "/images/xiaomi/xiaomi-17-ultra.jpg",
    specs: {
      manHinh: 'AMOLED 6.9" / 120Hz',
      chip: "Snapdragon 8 Elite Gen 5",
      ram: "16GB",
      boNho: "512GB",
      camera: "200MP + 50MP + 50MP / trước 50MP",
      pin: "Đang cập nhật",
      heDieuHanh: "HyperOS / Android 16",
    },
  },

  {
    id: "xiaomi-17",
    name: "Xiaomi 17",
    brand: "Xiaomi",
    price: "20.190.000₫",
    image: "/images/xiaomi/xiaomi-17.jpg",
    specs: {
      manHinh: 'AMOLED 1.5K 6.3" / 120Hz',
      chip: "Snapdragon 8 Elite Gen 5",
      ram: "12GB",
      boNho: "256GB / 512GB",
      camera: "50MP + 50MP + 50MP / trước 50MP",
      pin: "6330mAh / sạc 100W",
      heDieuHanh: "HyperOS 3 / Android 16",
    },
  },

  {
    id: "xiaomi-17t-pro",
    name: "Xiaomi 17T Pro",
    brand: "Xiaomi",
    price: "18.810.000₫",
    image: "/images/xiaomi/xiaomi-17t-pro.jpg",
    specs: {
      manHinh: 'AMOLED 6.83"',
      chip: "Dimensity 9500",
      ram: "12GB",
      boNho: "256GB / 512GB / 1TB",
      camera: "50MP / trước 32MP",
      pin: "7000mAh / sạc 100W",
      heDieuHanh: "HyperOS 3",
    },
  },

  {
    id: "xiaomi-17t",
    name: "Xiaomi 17T",
    brand: "Xiaomi",
    price: "16.710.000₫",
    image: "/images/xiaomi/xiaomi-17t.jpg",
    specs: {
      manHinh: 'AMOLED 6.59"',
      chip: "Dimensity 8500-Ultra",
      ram: "12GB",
      boNho: "256GB / 512GB",
      camera: "50MP / trước 32MP",
      pin: "6500mAh / sạc 67W",
      heDieuHanh: "HyperOS 3 / Android 16",
    },
  },

  {
    id: "xiaomi-poco-f9-ultra",
    name: "POCO F9 Ultra",
    brand: "Xiaomi",
    price: "25.810.000₫",
    image: "/images/xiaomi/xiaomi-poco-f9-ultra.jpg",
    specs: {
      manHinh: 'AMOLED 6.9" / 1.5K / 185Hz',
      chip: "Snapdragon 8 Elite Gen 5",
      ram: "12GB / 16GB",
      boNho: "256GB / 512GB / 1TB",
      camera: "200MP + 50MP + 50MP / trước 32MP",
      pin: "8050mAh / sạc 100W",
      heDieuHanh: "HyperOS 3.1",
    },
  },

  {
    id: "xiaomi-redmi-note-17-pro-max",
    name: "Redmi Note 17 Pro Max",
    brand: "Xiaomi",
    price: "14.810.000₫",
    image: "/images/xiaomi/xiaomi-redmi-note-17-pro-max.jpg",
    specs: {
      manHinh: 'AMOLED 1.5K 6.83"',
      chip: "Snapdragon 6 Gen 5 5G",
      ram: "8GB / 12GB",
      boNho: "256GB / 512GB",
      camera: "50MP + 8MP / trước 32MP",
      pin: "10000mAh / sạc 100W",
      heDieuHanh: "HyperOS",
    },
  },

  {
    id: "xiaomi-redmi-note-17-pro",
    name: "Redmi Note 17 Pro",
    brand: "Xiaomi",
    price: "9.810.000₫",
    image: "/images/xiaomi/xiaomi-redmi-note-17-pro.jpg",
    specs: {
      manHinh: 'AMOLED 1.5K 6.83"',
      chip: "Snapdragon 6s Gen 4",
      ram: "6GB / 8GB / 12GB",
      boNho: "256GB",
      camera: "50MP + 8MP / trước 16MP",
      pin: "8340mAh / sạc 67W",
      heDieuHanh: "HyperOS",
    },
  },

  {
    id: "xiaomi-redmi-note-17",
    name: "Redmi Note 17",
    brand: "Xiaomi",
    price: "8.310.000₫",
    image: "/images/xiaomi/xiaomi-redmi-note-17.jpg",
    specs: {
      manHinh: 'AMOLED 6.99" / Full HD+ / 120Hz',
      chip: "Snapdragon 6s Gen 2",
      ram: "4GB / 6GB / 8GB",
      boNho: "128GB / 256GB",
      camera: "50MP + camera phụ / trước 16MP",
      pin: "7700mAh / sạc 45W",
      heDieuHanh: "HyperOS",
    },
  },

  // ========================================
  // VIVO
  // ========================================

   {
    id: "vivo-x500",
    name: "Vivo X500",
    brand: "Vivo",
    price: "21.590.000₫",
    image: "/images/other/vivo/vivo-x500.jpg",
    specs: {
      manHinh: 'AMOLED 1.5K 6.59" / 120Hz',
      chip: "Dimensity 9600 2nm",
      ram: "12GB",
      boNho: "256GB / 512GB / 1TB",
      camera: "200MP + 50MP + 200MP + 5MP / trước 50MP",
      pin: "7500mAh / sạc 90W",
      heDieuHanh: "OriginOS 7 & Android 17",
    },
  },

   {
    id: "vivo-x500-pro",
    name: "Vivo X500 Pro",
    brand: "Vivo",
    price: "25.590.000₫",
    image: "/images/other/vivo/vivo-x500-pro.jpg",
    specs: {
      manHinh: 'LTPOAMOLED 1.5K 6.36" / 144Hz',
      chip: "Dimensity 9600 Pro 2nm",
      ram: "12GB",
      boNho: "256GB / 512GB / 1TB",
      camera: "200MP + 50MP + 200MP + 5MP / trước 50MP",
      pin: "8000mAh / sạc 100W",
      heDieuHanh: "OriginOS 7 & Android 17",
    },
  },

   {
    id: "vivo-x500-pro-max",
    name: "Vivo X500 Pro Max",
    brand: "Vivo",
    price: "27.590.000₫",
    image: "/images/other/vivo/vivo-x500-pro-max.jpg",
    specs: {
      manHinh: 'LTPO AMOLED 2K 6.85" / 144Hz',
      chip: "Dimensity 9600 Pro 2nm",
      ram: "12GB / 16GB",
      boNho: "256GB / 512GB / 1TB",
      camera: "200MP + 50MP + 200MP + 5MP / trước 50MP",
      pin: "8000mAh / sạc 100W",
      heDieuHanh: "OriginOS 7 & Android 17",
    },
  },

  {
    id: "vivo-x300-pro",
    name: "Vivo X300 Pro",
    brand: "Vivo",
    price: "31.990.000₫",
    image: "/images/other/vivo/vivo-x300-pro.jpg",
    specs: {
      manHinh: 'AMOLED 1.5K 6.78" / 120Hz',
      chip: "Dimensity 9500",
      ram: "12GB / 16GB",
      boNho: "256GB / 512GB / 1TB",
      camera: "50MP + 200MP + 50MP / trước 50MP",
      pin: "6510mAh / sạc 90W",
      heDieuHanh: "Android 16",
    },
  },

  {
    id: "vivo-x300-ultra",
    name: "Vivo X300 Ultra",
    brand: "Vivo",
    price: "41.810.000₫",
    image: "/images/other/vivo/vivo-x300-ultra.jpg",
    specs: {
      manHinh: 'AMOLED 2K 6.82" / 144Hz',
      chip: "Snapdragon 8 Elite Gen 5",
      ram: "12GB / 16GB",
      boNho: "256GB / 512GB / 1TB",
      camera: "200MP + 50MP + 200MP + 5MP / trước 50MP",
      pin: "6600mAh / sạc 100W",
      heDieuHanh: "OriginOS 6",
    },
  },

  {
    id: "vivo-x300",
    name: "Vivo X300",
    brand: "Vivo",
    price: "17.990.000₫",
    image: "/images/other/vivo/vivo-x300.png",
    specs: {
      manHinh: 'AMOLED 1.5K 6.31" / 120Hz',
      chip: "Dimensity 9500",
      ram: "12GB / 16GB",
      boNho: "256GB / 512GB / 1TB",
      camera: "200MP + 50MP + 50MP + 5MP / trước 50MP",
      pin: "6040mAh / sạc 90W",
      heDieuHanh: "OriginOS 6 & Android 16",
    },
  },

  {
    id: "vivo-x300s",
    name: "Vivo X300s",
    brand: "Vivo",
    price: "19.990.000₫",
    image: "/images/other/vivo/vivo-x300s.png",
    specs: {
      manHinh: 'AMOLED 1.5K 6.78" / 144Hz',
      chip: "Dimensity 9500",
      ram: "12GB / 16GB",
      boNho: "256GB / 512GB / 1TB",
      camera: "200MP + 50MP + 50MP + 5MP / trước 50MP",
      pin: "7100mAh / sạc 90W",
      heDieuHanh: "OriginOS 6 & Android 16",
    },
  },

  {
    id: "vivo-x300e",
    name: "Vivo X300E",
    brand: "Vivo",
    price: "18.990.000₫",
    image: "/images/other/vivo/vivo-x300e.png",
    specs: {
      manHinh: 'AMOLED 1.5K 6.59" / 144Hz',
      chip: "Snapdragon 8 Elite Gen 5",
      ram: "12GB / 16GB",
      boNho: "256GB / 512GB",
      camera: "50MP + 50MP + 8MP / trước 50MP",
      pin: "7200mAh / sạc 90W",
      heDieuHanh: "OriginOS 6",
    },
  },

  // ========================================
  // OPPO
  // ========================================

{
    id: "oppo-find-x10",
    name: "OPPO Find X10",
    brand: "OPPO",
    price: "cập nhật",
    image: "/images/other/oppo/oppo-find-x10.webp",
    specs: {
      manHinh: 'AMOLED 1.5K 6.59" / 120Hz',
      chip: "Dimensity 9600 2nm",
      ram: "12GB",
      boNho: "256GB / 512GB / 1TB",
      camera: "cập nhật",
      pin: "8000mAh / sạc 100W",
      heDieuHanh: "ColorOS 17 & Android 17",
    },
  },

  {
    id: "oppo-find-x10-pro-max",
    name: "OPPO Find X10 Pro Max",
    brand: "OPPO",
    price: "cập nhật",
    image: "/images/other/oppo/oppo-find-x10-pro-max.webp",
    specs: {
      manHinh: 'AMOLED 2K 6.9" / 144Hz',
      chip: "Dimensity 9600 Pro 2nm",
      ram: "12GB",
      boNho: "256GB / 512GB / 1TB",
      camera: "cập nhật",
      pin: "cập nhật",
      heDieuHanh: "ColorOS 17 & Android 17",
    },
  },

  {
    id: "oppo-find-x10-pro",
    name: "OPPO Find X10 Pro",
    brand: "OPPO",
    price: "cập nhật",
    image: "/images/other/oppo/oppo-find-x10-pro.jpg",
    specs: {
      manHinh: 'AMOLED 2K 6.82" / 144Hz',
      chip: "Dimensity 9600 Pro 2nm",
      ram: "12GB",
      boNho: "256GB / 512GB / 1TB",
      camera: "cập nhật",
      pin: "cập nhật",
      heDieuHanh: "ColorOS 17 & Android 17",
    },
  },

  {
    id: "oppo-find-x9-ultra",
    name: "OPPO Find X9 Ultra",
    brand: "OPPO",
    price: "45.990.000₫",
    image: "/images/other/oppo/oppo-find-x9-ultra.jpg",
    specs: {
      manHinh: 'AMOLED 2K 6.82" / 1-144Hz',
      chip: "Snapdragon 8 Elite Gen 5",
      ram: "12GB",
      boNho: "512GB",
      camera: "200MP + 200MP + 50MP + 50MP / trước 50MP",
      pin: "7050mAh / sạc 100W",
      heDieuHanh: "ColorOS 16 / Android 16",
    },
  },

  {
    id: "oppo-find-x9-pro",
    name: "OPPO Find X9 Pro",
    brand: "OPPO",
    price: "36.990.000₫",
    image: "/images/other/oppo/oppo-find-x9-pro.png",
    specs: {
      manHinh: 'AMOLED 1.5K 6.78" / 120Hz',
      chip: "Snapdragon 8 Elite Gen 5",
      ram: "16GB",
      boNho: "512GB",
      camera: "50MP + 50MP + 200MP + 2MP / trước 50MP",
      pin: "7500mAh / sạc 80W",
      heDieuHanh: "ColorOS 16 / Android 16",
    },
  },

  {
    id: "oppo-find-x9",
    name: "OPPO Find X9",
    brand: "OPPO",
    price: "28.990.000₫",
    image: "/images/other/oppo/oppo-find-x9.png",
    specs: {
      manHinh: 'AMOLED 1.5K 6.59" / 120Hz',
      chip: "Snapdragon 8 Elite Gen 5",
      ram: "12GB / 16GB",
      boNho: "256GB / 512GB",
      camera: "50MP + 50MP + 50MP + 2MP / trước 32MP",
      pin: "7050mAh / sạc 100W",
      heDieuHanh: "ColorOS 16 / Android 16",
    },
  },

  {
    id: "oppo-find-x9s",
    name: "OPPO Find X9s",
    brand: "OPPO",
    price: "23.310.000₫",
    image: "/images/other/oppo/oppo-find-x9s.jpg",
    specs: {
      manHinh: 'AMOLED 1.5K+ 6.59" / 120Hz',
      chip: "Dimensity 9500s",
      ram: "12GB",
      boNho: "256GB / 512GB",
      camera: "50MP + 50MP + 50MP / trước 32MP",
      pin: "7025mAh / sạc 80W",
      heDieuHanh: "ColorOS 16",
    },
  },

  // ========================================
  // HONOR
  // ========================================

  {
    id: "honor-robot-phone",
    name: "Honor Robot Phone",
    brand: "Honor",
    price: "25.490.000₫",
    image: "/images/other/honor/honor-robot-phone.jpg",
    specs: {
      manHinh: 'HDR Oled 6.31"',
      chip: "Snapdragon 8 Elite",
      ram: "12GB / 16GB",
      boNho: "512G / 1TB",
      camera: "200MP + 200MP + 50MP / trước 50MP",
      pin: "7006mAh / sạc 120W",
      heDieuHanh: "MagicOS 10 & Android 16",
    },
  },

  {
    id: "honor-600-pro-molly",
    name: "Honor 600 Pro Molly",
    brand: "Honor",
    price: "25.490.000₫",
    image: "/images/other/honor/honor-600-pro-molly.jpg",
    specs: {
      manHinh: 'FHD+ AMOLED 6.57"',
      chip: "Snapdragon 8 Elite",
      ram: "12GB",
      boNho: "512GB",
      camera: "200MP + 50MP + 12MP / trước 50MP",
      pin: "7000mAh / sạc 80W",
      heDieuHanh: "MagicOS 10 & Android 16",
    },
  },

  {
    id: "honor-600-pro",
    name: "Honor 600 Pro",
    brand: "Honor",
    price: "23.490.000₫",
    image: "/images/other/honor/honor-600-pro.jpg",
    specs: {
      manHinh: 'FHD+ AMOLED 6.57"',
      chip: "Snapdragon 8 Elite",
      ram: "12GB",
      boNho: "256GB",
      camera: "200MP + 50MP + 12MP / trước 50MP",
      pin: "7000mAh / sạc 80W",
      heDieuHanh: "MagicOS 10 & Android 16",
    },
  },

  {
    id: "honor-600",
    name: "Honor 600",
    brand: "Honor",
    price: "16.190.000₫",
    image: "/images/other/honor/honor-600.jpg",
    specs: {
      manHinh: 'FHD+ AMOLED 6.57"',
      chip: "Snapdragon 7 Gen 4",
      ram: "8GB",
      boNho: "256GB",
      camera: "200MP + 12MP / trước 50MP",
      pin: "7000mAh / sạc 80W",
      heDieuHanh: "MagicOS 10 & Android 16",
    },
  },

  // ========================================
  // HUAWEI
  // ========================================

   {
    id: "huawei-mate-80-pro",
    name: "Huawei Mate 80 Pro",
    brand: "Huawei",
    price: "22.990.000₫",
    image: "/images/other/huawei/huawei-phones-mate80-pro.png",
    specs: {
      manHinh: 'LTPO OLED 6.75" / 1-120Hz',
      chip: "Kirin — Huawei không công bố chi tiết trên trang thông số",
      ram: "16GB",
      boNho: "512GB",
      camera: "50MP + 40MP + 48MP / trước 13MP",
      pin: "5750mAh / sạc 100W",
      heDieuHanh: "EMUI 15.0",
    },
  },

  {
    id: "huawei-pura-90s-pro-max",
    name: "Huawei Pura 90S Pro Max",
    brand: "Huawei",
    price: "24.990.000₫",
    image: "/images/other/huawei/pura90s-pro-max.png",
    specs: {
      manHinh: 'LTPO OLED 6.9" / 1-120Hz',
      chip: "Kirin 9030S",
      ram: "12GB",
      boNho: "512GB",
      camera: "50MP + 40MP + 200MP / trước 13MP",
      pin: "6000mAh / sạc 100W",
      heDieuHanh: "EMUI 16.0",
    },
  },

  {
    id: "huawei-pura-90s-pro",
    name: "Huawei Pura 90S Pro",
    brand: "Huawei",
    price: "20.990.000₫",
    image: "/images/other/huawei/pura90s-pro.png",
    specs: {
      manHinh: 'LTPO OLED 6.6" / 1-120Hz',
      chip: "Kirin 9030S",
      ram: "12GB",
      boNho: "256GB / 512GB",
      camera: "50MP + 12.5MP + 50MP / trước 13MP",
      pin: "6000mAh / sạc 66W",
      heDieuHanh: "EMUI 16.0",
    },
  },
];