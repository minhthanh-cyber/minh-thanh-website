export type BrandKey = 'iPhone' | 'Samsung' | 'Xiaomi' | 'Vivo' | 'OPPO' | 'Honor' | 'Huawei';

export interface PhoneVariant { storage: string; price: string; ram?: string; color?: string; stock?: number; sku?: string; }
export interface PhoneSpecs {
  manHinh: string;
  chip: string;
  boNho: string;
  camera: string;
  pin: string;
  heDieuHanh: string;
}

export interface CatalogPhone {
  id: string;
  name: string;
  brand: BrandKey;
  price: string;
  image: string;
  note?: string;
  summary?: string;
  highlights?: string[];
  gallery?: string[];
  variants?: PhoneVariant[];
  specs: PhoneSpecs;
  featured?: boolean;
  updatedAt?: number;
}

export interface SiteSettings {
  brandName: string;
  brandTagline: string;
  heroTitle: string;
  heroDescription: string;
  primaryColor: string;
  secondaryColor: string;
  heroImages: string[];
  siteStatus: 'online' | 'offline' | 'maintenance';
  maintenanceMessage: string;
  aiName: string;
  aiWelcome: string;
  aiAvatar?: string;
  adminPath: string;
  shieldEnabled: boolean;
  blockF12: boolean;
  blockContextMenu: boolean;
  blockViewSource: boolean;
  allowCopy: boolean;
  design?: Record<string,string | number>;
}

export interface AiMemoryItem {
  id: string;
  title: string;
  content: string;
  updatedAt: number;
}
