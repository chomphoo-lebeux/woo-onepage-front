import Image from "next/image";
import productData from "@/data/product.json";
import Footer from "@/components/Footer";
import ScrollingBanner from "@/components/ScrollingBanner";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductSection from "@/components/ProductSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FinalCTASection from "@/components/FinalCTASection";
import ProductGallerySection from "@/components/ProductGallerySection";
import CareGuideSection from "@/components/CareGuideSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <ScrollingBanner />
      <HeroSection />
      <BenefitsSection />
      <ProductSection />
      <ProductGallerySection />
      <CareGuideSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
