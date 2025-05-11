import productData from "@/data/product.json";

export default function GuaranteeSection() {
  return (
    <section className="py-20 bg-[var(--color-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-[var(--color-primary-dark)]">{productData.guarantee.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productData.guarantee.items.map((item, index) => (
            <div key={index} className="text-center bg-white p-8 rounded-lg shadow-sm min-h-[200px] flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-4 text-[var(--color-primary-dark)]">{item.title}</h3>
              <p className="text-[var(--color-text-light)] text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 