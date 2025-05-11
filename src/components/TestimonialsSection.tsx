import productData from "@/data/product.json";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-[var(--color-primary-dark)]">{productData.testimonials.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productData.testimonials.items.map((testimonial, index) => (
            <div key={index} className="bg-[var(--color-secondary)] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[var(--color-primary)]">★</span>
                ))}
              </div>
              <p className="text-[var(--color-text-light)] mb-4">{testimonial.comment}</p>
              <p className="font-semibold text-[var(--color-primary-dark)]">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 