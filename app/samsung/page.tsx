import type { Metadata } from "next";
import BrandPage from "@/components/BrandPage";

export const metadata: Metadata = {
  title: "Samsung — MINH THANH",
};

export default function SamsungPage() {
  return <BrandPage brand="Samsung" label="Samsung" />;
}
