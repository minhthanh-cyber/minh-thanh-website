export type BrandKey =
  | "iPhone"
  | "Samsung"
  | "Xiaomi"
  | "Vivo"
  | "OPPO"
  | "Honor"
  | "Huawei";

export interface PhoneVariant {
  storage: string;
  price: string;
}

export interface PhoneSpecs {
  manHinh: string;
  chip: string;
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
  variants?: PhoneVariant[];
  specs: PhoneSpecs;
}

export const SPEC_LABELS: Record<keyof PhoneSpecs, string> = {
  manHinh: "Màn hình",
  chip: "Chip",
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
    variants: [
      { storage: "12/256GB", price: "34.590.000₫" },
      { storage: "12/512GB", price: "40.990.000₫" },
      { storage: "12/1TB", price: "47.990.000₫" },
      { storage: "12/2TB", price: "54.990.000₫" },
    ],
    specs: {
      manHinh: 'Super Retina XDR OLED 6.9" / ProMotion 120Hz',
      chip: "Apple A19 Pro",
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
    variants: [
      { storage: "12/256GB", price: "31.990.000₫" },
      { storage: "12/512GB", price: "37.990.000₫" },
      { storage: "12/1TB", price: "44.990.000₫" },
    ],
    specs: {
      manHinh: 'Super Retina XDR OLED 6.3" / ProMotion 120Hz',
      chip: "Apple A19 Pro",
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
    variants: [
      { storage: "8/256GB", price: "24.990.000₫" },
      { storage: "8/512GB", price: "30.990.000₫" },
    ],
    specs: {
      manHinh: 'Super Retina XDR OLED 6.3" / ProMotion 120Hz',
      chip: "Apple A19",
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
    variants: [
      { storage: "8/256GB", price: "17.990.000₫" },
      { storage: "8/512GB", price: "22.990.000₫" },
    ],
    specs: {
      manHinh: 'Super Retina XDR OLED 6.1"',
      chip: "Apple A19",
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
    variants: [
      { storage: "12/256GB", price: "41.990.000₫" },
      { storage: "12/512GB", price: "47.990.000₫" },
      { storage: "12/1TB", price: "55.990.000₫" },
      { storage: "12/2TB", price: "63.990.000₫" },
    ],
    specs: {
      manHinh: 'Super Retina XDR OLED 6.9" / ProMotion 120Hz',
      chip: "Apple A20 Pro",
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
    variants: [
      { storage: "12/256GB", price: "38.990.000₫" },
      { storage: "12/512GB", price: "44.990.000₫" },
      { storage: "12/1TB", price: "51.990.000₫" },
    ],
    specs: {
      manHinh: 'Super Retina XDR OLED 6.3" / ProMotion 120Hz',
      chip: "Apple A20 Pro",
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
    variants: [
      { storage: "8/256GB", price: "22.990.000₫" },
      { storage: "8/512GB", price: "28.990.000₫" },
      { storage: "8/1TB", price: "35.990.000₫" },
    ],
    specs: {
      manHinh: 'Super Retina XDR OLED 6.5" / ProMotion 120Hz',
      chip: "Apple A19 Pro",
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
    variants: [
      { storage: "16/512GB", price: "64.990.000₫" },
      { storage: "16/1TB", price: "72.990.000₫" },
    ],
    specs: {
      manHinh: "Đang cập nhật",
      chip: "Đang cập nhật",
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
    variants: [
      { storage: "12/256GB", price: "21.990.000₫" },
      { storage: "12/512GB", price: "25.990.000₫" },
    ],
    specs: {
      manHinh: 'Dynamic AMOLED 2X 6.3" / 120Hz',
      chip: "Exynos 2600",
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
    variants: [
      { storage: "12/256GB", price: "23.990.000₫" },
      { storage: "12/512GB", price: "27.990.000₫" },
    ],
    specs: {
      manHinh: 'Dynamic AMOLED 2X 6.3" / 120Hz',
      chip: "Exynos 2600",
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
    variants: [
      { storage: "8/128GB", price: "16.510.000₫" },
      { storage: "8/256GB", price: "18.510.000₫" },
    ],
    specs: {
      manHinh: 'Dynamic AMOLED 2X 6.7" / 120Hz',
      chip: "Exynos 2500",
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
    variants: [
      { storage: "12/256GB", price: "31.990.000₫" },
      { storage: "12/512GB", price: "36.990.000₫" },
      { storage: "16/1TB", price: "43.990.000₫" },
    ],
    specs: {
      manHinh: 'QHD+ Dynamic AMOLED 2X 6.9"',
      chip: "Snapdragon 8 Elite Gen 5 for Galaxy",
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
    price: "21.990.000₫",
    image: "/images/xiaomi/xiaomi-18.png",
    variants: [
      { storage: "12/256GB", price: "21.990.000₫" },
      { storage: "16/512GB", price: "24.990.000₫" },
      { storage: "16/1TB", price: "28.990.000₫" },
    ],
    specs: {
      manHinh: 'LTPO AMOLED 2K 6.4 icnh" / 1-120Hz',
      chip: "Snapdragon 8 Elite Gen 6",
      boNho: "256GB / 512GB / 1TB",
      camera: "200MP + 50MP / trước 50MP",
      pin: "7000mAh & sạc Supercharge 100w",
      heDieuHanh: "HyperOS 4 & Android 17",
    },
  },
  {
    id: "xiaomi-18-pro",
    name: "Xiaomi 18 Pro",
    brand: "Xiaomi",
    price: "24.990.000₫",
    image: "/images/xiaomi/xiaomi-18-pro.png",
    variants: [
      { storage: "12/256GB", price: "24.990.000₫" },
      { storage: "16/512GB", price: "27.990.000₫" },
      { storage: "16/1TB", price: "31.990.000₫" },
    ],
    specs: {
      manHinh: 'LTPO AMOLED 2K 6.4 icnh" / 1-120Hz',
      chip: "Snapdragon 8 Elite Gen 6",
      boNho: "256GB / 512GB / 1TB",
      camera: "200MP + 50MP / trước 50MP",
      pin: "7000mAh & sạc Supercharge 100w",
      heDieuHanh: "HyperOS 4 & Android 17",
    },
  },
  {
    id: "xiaomi-18-pro-max",
    name: "Xiaomi 18 Pro Max",
    brand: "Xiaomi",
    price: "26.990.000₫",
    image: "/images/xiaomi/xiaomi-18-pro-max.jpg",
    variants: [
      { storage: "12/512GB", price: "27.150.000₫" },
      { storage: "16/512GB", price: "31.050.000₫" },
      { storage: "16/1TB", price: "34.950.000₫" },
    ],
    specs: {
      manHinh: 'LTPO AMOLED 2K 6.9" / 1-120Hz',
      chip: "Snapdragon 8 Elite Gen 6 Pro",
      boNho: "256GB / 512GB / 1TB",
      camera: "200MP + 200MP + 50MP / trước 50MP",
      pin: "8500mAh & sạc Supercharge 100w",
      heDieuHanh: "HyperOS 4 & Android 17",
    },
  },
  {
    id: "xiaomi-18-pro-max-edition",
    name: "Xiaomi 18 Pro Max Edition",
    brand: "Xiaomi",
    price: "42.990.000₫",
    image: "/images/xiaomi/xiaomi-18-pro-max-edition.png",
    variants: [
      { storage: "12/256GB", price: "42.990.000₫" },
      { storage: "16/512GB", price: "46.990.000₫" },
      { storage: "16/1TB", price: "50.990.000₫" },
    ],
    specs: {
      manHinh: 'LTPO AMOLED 2K 6.9" / 120Hz',
      chip: "Snapdragon 8 Elite Gen 6 2nm",
      boNho: "256GB / 512GB / 1TB",
      camera: "200MP + 200MP + 50MP / trước 50MP",
      pin: "8500mAh & sạc Supercharge 100w",
      heDieuHanh: "HyperOS 4 & Android 17",
    },
  },
  {
    id: "xiaomi-18-fold",
    name: "Xiaomi 18 Fold",
    brand: "Xiaomi",
    price: "42.990.000₫",
    image: "/images/xiaomi/xiaomi-18-fold.png",
    variants: [
      { storage: "12/256GB", price: "42.990.000₫" },
      { storage: "16/512GB", price: "46.990.000₫" },
      { storage: "16/1TB", price: "51.990.000₫" },
    ],
    specs: {
      manHinh: 'LTPO AMOLED 7.6 inch & 5.38 inch" / 120Hz',
      chip: "Xring O3",
      boNho: "256GB / 512GB / 1TB",
      camera: "200MP + 50MP / trước 50MP",
      pin: "6000mAh & sạc Supercharge 67w",
      heDieuHanh: "HyperOS 4 & Android 17",
    },
  },
  {
    id: "xiaomi-17-ultra",
    name: "Xiaomi 17 Ultra",
    brand: "Xiaomi",
    price: "31.010.000₫",
    image: "/images/xiaomi/xiaomi-17-ultra.jpg",
    variants: [
      { storage: "16/512GB", price: "31.010.000₫" },
      { storage: "16/1TB", price: "35.010.000₫" },
    ],
    specs: {
      manHinh: 'AMOLED 6.9" / 120Hz',
      chip: "Snapdragon 8 Elite Gen 5",
      boNho: "512GB / 1TB",
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
    variants: [
      { storage: "12/256GB", price: "20.190.000₫" },
      { storage: "12/512GB", price: "22.590.000₫" },
    ],
    specs: {
      manHinh: 'AMOLED 1.5K 6.3" / 120Hz',
      chip: "Snapdragon 8 Elite Gen 5",
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
    variants: [
      { storage: "12/256GB", price: "18.810.000₫" },
      { storage: "12/512GB", price: "20.810.000₫" },
      { storage: "16/1TB", price: "23.810.000₫" },
    ],
    specs: {
      manHinh: 'AMOLED 6.83"',
      chip: "Dimensity 9500",
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
    variants: [
      { storage: "12/256GB", price: "16.710.000₫" },
      { storage: "12/512GB", price: "18.710.000₫" },
    ],
    specs: {
      manHinh: 'AMOLED 6.59"',
      chip: "Dimensity 8500-Ultra",
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
    variants: [
      { storage: "12/256GB", price: "25.810.000₫" },
      { storage: "16/512GB", price: "28.810.000₫" },
      { storage: "16/1TB", price: "32.810.000₫" },
    ],
    specs: {
      manHinh: 'AMOLED 6.9" / 1.5K / 185Hz',
      chip: "Snapdragon 8 Elite Gen 5",
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
    variants: [
      { storage: "8/256GB", price: "14.810.000₫" },
      { storage: "12/512GB", price: "16.810.000₫" },
    ],
    specs: {
      manHinh: 'AMOLED 1.5K 6.83"',
      chip: "Snapdragon 6 Gen 5 5G",
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
    variants: [
      { storage: "6/256GB", price: "9.810.000₫" },
      { storage: "8/256GB", price: "10.810.000₫" },
      { storage: "12/256GB", price: "12.010.000₫" },
    ],
    specs: {
      manHinh: 'AMOLED 1.5K 6.83"',
      chip: "Snapdragon 6s Gen 4",
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
    variants: [
      { storage: "4/128GB", price: "8.310.000₫" },
      { storage: "6/128GB", price: "9.110.000₫" },
      { storage: "8/256GB", price: "10.110.000₫" },
    ],
    specs: {
      manHinh: 'AMOLED 6.99" / Full HD+ / 120Hz',
      chip: "Snapdragon 6s Gen 2",
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
    variants: [
      { storage: "12/256GB", price: "21.590.000₫" },
      { storage: "12/512GB", price: "23.990.000₫" },
      { storage: "16/1TB", price: "27.590.000₫" },
    ],
    specs: {
      manHinh: 'AMOLED 1.5K 6.59" / 120Hz',
      chip: "Dimensity 9600 2nm",
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
    variants: [
      { storage: "12/256GB", price: "25.590.000₫" },
      { storage: "12/512GB", price: "28.590.000₫" },
      { storage: "16/1TB", price: "32.590.000₫" },
    ],
    specs: {
      manHinh: 'LTPOAMOLED 1.5K 6.36" / 144Hz',
      chip: "Dimensity 9600 Pro 2nm",
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
    variants: [
      { storage: "12/256GB", price: "27.590.000₫" },
      { storage: "16/512GB", price: "30.990.000₫" },
      { storage: "16/1TB", price: "34.990.000₫" },
    ],
    specs: {
      manHinh: 'LTPO AMOLED 2K 6.85" / 144Hz',
      chip: "Dimensity 9600 Pro 2nm",
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
    variants: [
      { storage: "12/256GB", price: "31.990.000₫" },
      { storage: "16/512GB", price: "35.990.000₫" },
      { storage: "16/1TB", price: "39.990.000₫" },
    ],
    specs: {
      manHinh: 'AMOLED 1.5K 6.78" / 120Hz',
      chip: "Dimensity 9500",
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
    variants: [
      { storage: "12/256GB", price: "41.810.000₫" },
      { storage: "16/512GB", price: "45.810.000₫" },
      { storage: "16/1TB", price: "49.810.000₫" },
    ],
    specs: {
      manHinh: 'AMOLED 2K 6.82" / 144Hz',
      chip: "Snapdragon 8 Elite Gen 5",
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
    variants: [
      { storage: "12/256GB", price: "17.990.000₫" },
      { storage: "16/512GB", price: "20.590.000₫" },
      { storage: "16/1TB", price: "23.590.000₫" },
    ],
    specs: {
      manHinh: 'AMOLED 1.5K 6.31" / 120Hz',
      chip: "Dimensity 9500",
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
    variants: [
      { storage: "12/256GB", price: "19.990.000₫" },
      { storage: "16/512GB", price: "22.990.000₫" },
      { storage: "16/1TB", price: "26.590.000₫" },
    ],
    specs: {
      manHinh: 'AMOLED 1.5K 6.78" / 144Hz',
      chip: "Dimensity 9500",
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
    variants: [
      { storage: "12/256GB", price: "18.990.000₫" },
      { storage: "16/512GB", price: "21.990.000₫" },
    ],
    specs: {
      manHinh: 'AMOLED 1.5K 6.59" / 144Hz',
      chip: "Snapdragon 8 Elite Gen 5",
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
    price: "21.599.000₫",
    image: "/images/other/oppo/oppo-find-x10.webp",
    variants: [
      { storage: "12/256GB", price: "21.599.000₫" },
      { storage: "12/512GB", price: "23.999.000₫" },
      { storage: "16/1TB", price: "27.599.000₫" },
    ],
    specs: {
      manHinh: 'AMOLED 1.5K 6.59" / 120Hz',
      chip: "Dimensity 9600M 2nm",
      boNho: "256GB / 512GB / 1TB",
      camera: "50MP + 50MP + 50MP / trước 32MP",
      pin: "8000mAh / sạc 80W",
      heDieuHanh: "ColorOS 17 & Android 17",
    },
  },
  {
    id: "oppo-find-x10-pro-max",
    name: "OPPO Find X10 Pro Max",
    brand: "OPPO",
    price: "26.599.000₫",
    image: "/images/other/oppo/oppo-find-x10-pro-max.webp",
    variants: [
      { storage: "12/256GB", price: "26.599.000₫" },
      { storage: "16/512GB", price: "29.999.000₫" },
      { storage: "16/1TB", price: "33.999.000₫" },
    ],
    specs: {
      manHinh: 'AMOLED 2K 6.9" / 144Hz',
      chip: "Dimensity 9600 Pro 2nm",
      boNho: "256GB / 512GB / 1TB",
      camera: "200MP + 200MP + 50MP / trước 50MP",
      pin: "8000mAh / sạc 100W",
      heDieuHanh: "ColorOS 17 & Android 17",
    },
  },
  {
    id: "oppo-find-x10e",
    name: "OPPO Find X10E",
    brand: "OPPO",
    price: "19.599.000₫",
    image: "/images/other/oppo/oppo-find-x10e.png",
    variants: [
      { storage: "12/256GB", price: "19.599.000₫" },
      { storage: "16/512GB", price: "22.599.000₫" },
    ],
    specs: {
      manHinh: 'AMOLED 1.5K 6.59" / 144Hz',
      chip: "Dimensity 9600M 2nm",
      boNho: "256GB / 512GB",
      camera: "50MP + 50MP + 50MP / trước 32MP",
      pin: "7050mAh / sạc 80W",
      heDieuHanh: "ColorOS 17 & Android 17",
    },
  },
  {
    id: "oppo-find-x9-ultra",
    name: "OPPO Find X9 Ultra",
    brand: "OPPO",
    price: "45.990.000₫",
    image: "/images/other/oppo/oppo-find-x9-ultra.jpg",
    variants: [
      { storage: "12/512GB", price: "45.990.000₫" },
      { storage: "16/1TB", price: "50.990.000₫" },
    ],
    specs: {
      manHinh: 'AMOLED 2K 6.82" / 1-144Hz',
      chip: "Snapdragon 8 Elite Gen 5",
      boNho: "512GB / 1TB",
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
    variants: [
      { storage: "16/512GB", price: "36.990.000₫" },
      { storage: "16/1TB", price: "40.990.000₫" },
    ],
    specs: {
      manHinh: 'AMOLED 1.5K 6.78" / 120Hz',
      chip: "Snapdragon 8 Elite Gen 5",
      boNho: "512GB / 1TB",
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
    variants: [
      { storage: "12/256GB", price: "28.990.000₫" },
      { storage: "16/512GB", price: "31.990.000₫" },
    ],
    specs: {
      manHinh: 'AMOLED 1.5K 6.59" / 120Hz',
      chip: "Snapdragon 8 Elite Gen 5",
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
    variants: [
      { storage: "12/256GB", price: "23.310.000₫" },
      { storage: "12/512GB", price: "25.810.000₫" },
    ],
    specs: {
      manHinh: 'AMOLED 1.5K+ 6.59" / 120Hz',
      chip: "Dimensity 9500s",
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
    variants: [
      { storage: "12/512GB", price: "25.490.000₫" },
      { storage: "16/1TB", price: "29.490.000₫" },
    ],
    specs: {
      manHinh: 'HDR Oled 6.31"',
      chip: "Snapdragon 8 Elite",
      boNho: "512GB / 1TB",
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
    variants: [
      { storage: "12/512GB", price: "25.490.000₫" },
      { storage: "16/1TB", price: "28.990.000₫" },
    ],
    specs: {
      manHinh: 'FHD+ AMOLED 6.57"',
      chip: "Snapdragon 8 Elite",
      boNho: "512GB / 1TB",
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
    variants: [
      { storage: "12/256GB", price: "23.490.000₫" },
      { storage: "12/512GB", price: "26.490.000₫" },
    ],
    specs: {
      manHinh: 'FHD+ AMOLED 6.57"',
      chip: "Snapdragon 8 Elite",
      boNho: "256GB / 512GB",
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
    variants: [
      { storage: "8/256GB", price: "16.190.000₫" },
      { storage: "12/512GB", price: "18.690.000₫" },
    ],
    specs: {
      manHinh: 'FHD+ AMOLED 6.57"',
      chip: "Snapdragon 7 Gen 4",
      boNho: "256GB / 512GB",
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
    variants: [
      { storage: "16/512GB", price: "22.990.000₫" },
      { storage: "16/1TB", price: "26.990.000₫" },
    ],
    specs: {
      manHinh: 'LTPO OLED 6.75" / 1-120Hz',
      chip: "Kirin — Huawei không công bố chi tiết trên trang thông số",
      boNho: "512GB / 1TB",
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
    variants: [
      { storage: "12/512GB", price: "24.990.000₫" },
      { storage: "16/1TB", price: "28.990.000₫" },
    ],
    specs: {
      manHinh: 'LTPO OLED 6.9" / 1-120Hz',
      chip: "Kirin 9030S",
      boNho: "512GB / 1TB",
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
    variants: [
      { storage: "12/256GB", price: "20.990.000₫" },
      { storage: "12/512GB", price: "23.490.000₫" },
    ],
    specs: {
      manHinh: 'LTPO OLED 6.6" / 1-120Hz',
      chip: "Kirin 9030S",
      boNho: "256GB / 512GB",
      camera: "50MP + 12.5MP + 50MP / trước 13MP",
      pin: "6000mAh / sạc 66W",
      heDieuHanh: "EMUI 16.0",
    },
  },
];