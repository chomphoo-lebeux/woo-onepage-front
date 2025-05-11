import productData from "@/data/product.json";

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-[var(--color-primary-dark)]">{productData.benefits.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {productData.benefits.items.map((benefit, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-[var(--color-secondary)]">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-primary-dark)]">{benefit.title}</h3>
              <p className="text-[var(--color-text-light)]">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 