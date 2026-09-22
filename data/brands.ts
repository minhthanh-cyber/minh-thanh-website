import type { BrandKey } from "./phones";

export interface BrandInfo {
  key: BrandKey;
  slug: string;
  label: string;
}

/** 3 hãng chính, mỗi hãng có route riêng: /iphone, /samsung, /xiaomi */
export const MAIN_BRANDS: BrandInfo[] = [
  { key: "iPhone", slug: "iphone", label: "iPhone" },
  { key: "Samsung", slug: "samsung", label: "Samsung" },
  { key: "Xiaomi", slug: "xiaomi", label: "Xiaomi" },
];

/** Các hãng nằm trong nhóm "Khác": /khac/[brand] */
export const KHAC_BRANDS: BrandInfo[] = [
  { key: "Vivo", slug: "vivo", label: "Vivo" },
  { key: "OPPO", slug: "oppo", label: "OPPO" },
  { key: "Honor", slug: "honor", label: "Honor" },
  { key: "Huawei", slug: "huawei", label: "Huawei" },
];

export const ALL_BRANDS: BrandInfo[] = [...MAIN_BRANDS, ...KHAC_BRANDS];

/** Trả về đường dẫn trang danh mục tương ứng với một hãng. */
export function getBrandHref(brand: BrandKey): string {
  const main = MAIN_BRANDS.find((b) => b.key === brand);
  if (main) return `/${main.slug}`;
  const khac = KHAC_BRANDS.find((b) => b.key === brand);
  if (khac) return `/khac/${khac.slug}`;
  return "/";
}
