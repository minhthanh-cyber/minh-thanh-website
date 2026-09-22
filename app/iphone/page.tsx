import type { Metadata } from "next";
import BrandPage from "@/components/BrandPage";

export const metadata: Metadata = {
  title: "iPhone — MINH THANH",
};

export default function IPhonePage() {
  return <BrandPage brand="iPhone" label="iPhone" />;
}
