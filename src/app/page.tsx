import Image from "next/image";
import productData from "@/data/product.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src={productData.hero.backgroundVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[var(--color-primary-dark)]/40" />
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
            {productData.hero.title}
          </h1>
          <p className="text-xl text-white/90 mb-6">
            {productData.hero.subtitle}
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            {productData.hero.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {productData.hero.features.map((feature, index) => (
              <span key={index} className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                {feature}
              </span>
            ))}
          </div>
          <button className="btn-primary px-8 py-4 rounded-full text-lg font-semibold">
            {productData.hero.cta}
          </button>
        </div>
      </section>

      {/* Benefits Section */}
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

      {/* Product Section */}
      <section className="py-20 bg-[var(--color-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[var(--color-primary-dark)]">{productData.product.title}</h2>
              <p className="text-[var(--color-text-light)] mb-8">{productData.product.description}</p>
              <ul className="space-y-3 mb-8">
                {productData.product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-[var(--color-primary)] mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mb-8">
                <h3 className="font-semibold mb-3 text-[var(--color-primary-dark)]">Tailles disponibles :</h3>
                <div className="flex gap-2">
                  {productData.product.sizes.map((size) => (
                    <button key={size} className="border border-[var(--color-primary-light)] px-4 py-2 rounded hover:bg-[var(--color-primary-light)] hover:text-white transition-colors">
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-8">
                <h3 className="font-semibold mb-3 text-[var(--color-primary-dark)]">Couleurs :</h3>
                <div className="flex gap-4">
                  {productData.product.colors.map((color) => (
                    <button
                      key={color.name}
                      className="w-8 h-8 rounded-full border border-[var(--color-primary-light)]"
                      style={{ backgroundColor: color.code }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="text-4xl font-bold text-[var(--color-primary-dark)]">{productData.product.price.current}</div>
                <div className="text-xl text-[var(--color-text-light)] line-through">{productData.product.price.original}</div>
                <div className="text-[var(--color-primary)] font-semibold">-{productData.product.price.savings}</div>
              </div>
              <button className="w-full btn-primary px-8 py-4 rounded-lg text-lg font-semibold">
                {productData.cta.button}
              </button>
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/product-main.jpg"
                alt="Pyjama en bambou"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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

      {/* Guarantee Section */}
      <section className="py-20 bg-[var(--color-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-[var(--color-primary-dark)]">{productData.guarantee.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productData.guarantee.items.map((item, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-[var(--color-primary-dark)]">{item.title}</h3>
                <p className="text-[var(--color-text-light)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[var(--color-primary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{productData.cta.title}</h2>
          <p className="text-xl text-white/90 mb-8">{productData.cta.subtitle}</p>
          <button className="bg-white text-[var(--color-primary-dark)] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[var(--color-secondary)] transition-colors">
            {productData.cta.button}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-primary-dark)] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">{productData.footer.about.title}</h3>
              <p className="text-white/80">{productData.footer.about.description}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{productData.footer.contact.title}</h3>
              <p className="text-white/80">Email: {productData.footer.contact.email}</p>
              <p className="text-white/80">Tél: {productData.footer.contact.phone}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{productData.footer.social.title}</h3>
              <div className="flex space-x-4">
                {productData.footer.social.links.map((link, index) => (
                  <a key={index} href={link.url} className="text-white/80 hover:text-white">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/80">
            <p>{productData.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
