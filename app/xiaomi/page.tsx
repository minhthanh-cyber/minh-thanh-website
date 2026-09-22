import type { Metadata } from "next";
import BrandPage from "@/components/BrandPage";

export const metadata: Metadata = {
  title: "Xiaomi — MINH THANH",
};

export default function XiaomiPage() {
  return <BrandPage brand="Xiaomi" label="Xiaomi" />;
}
