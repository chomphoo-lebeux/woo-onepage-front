import productData from "@/data/product.json";

export default function FinalCTASection() {
  return (
    <section className="py-20 bg-[var(--color-primary-dark)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">{productData.cta.title}</h2>
        <p className="text-xl text-white/90 mb-8">{productData.cta.subtitle}</p>
        <button className="bg-white text-[var(--color-primary-dark)] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[var(--color-secondary)] transition-colors cursor-pointer">
          {productData.cta.button}
        </button>
      </div>
    </section>
  );
} 