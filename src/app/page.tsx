import Image from "next/image";
import productData from "@/data/product.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Bannière défilante */}
      <div className="bg-[var(--color-primary)] text-white py-2 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4">
            <span className="animate-pulse">🔥</span>
            <div className="relative overflow-hidden">
              <div className="animate-marquee whitespace-nowrap">
                Pré-lancement du produit • Stock limité • Livraison gratuite • Retours gratuits sous 30 jours
              </div>
            </div>
            <span className="animate-pulse">🔥</span>
          </div>
        </div>
      </div>

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
              <span key={index} className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm cursor-default">
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
                  <li key={index} className="flex items-center text-[var(--color-text-light)]">
                    <span className="text-[var(--color-primary)] mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mb-8">
                <h3 className="font-semibold mb-3 text-[var(--color-primary-dark)]">Tailles disponibles :</h3>
                <div className="flex gap-2">
                  {productData.product.sizes.map((size) => (
                    <button key={size} className="size-button">
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
                      className="w-8 h-8 rounded-full border border-[var(--color-primary-light)] cursor-pointer"
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
              <button className="order-button">
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
              <div key={index} className="text-center bg-white p-8 rounded-lg shadow-sm min-h-[200px] flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-4 text-[var(--color-primary-dark)]">{item.title}</h3>
                <p className="text-[var(--color-text-light)] text-lg">{item.description}</p>
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
          <button className="bg-white text-[var(--color-primary-dark)] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[var(--color-secondary)] transition-colors cursor-pointer">
            {productData.cta.button}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-primary-dark)] text-white">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* À Propos */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">{productData.footer.about.title}</h3>
              <p className="text-white/80 leading-relaxed">{productData.footer.about.description}</p>
              <div className="space-y-4">
                {productData.footer.about.values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-[var(--color-primary)]">•</span>
                    <div>
                      <h4 className="font-medium">{value.title}</h4>
                      <p className="text-white/70 text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">{productData.footer.contact.title}</h3>
              <div className="space-y-4">
                <p className="flex items-center space-x-3">
                  <span className="text-[var(--color-primary)]">📍</span>
                  <span className="text-white/80">{productData.footer.contact.address}</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="text-[var(--color-primary)]">📞</span>
                  <span className="text-white/80">{productData.footer.contact.phone}</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="text-[var(--color-primary)]">✉️</span>
                  <span className="text-white/80">{productData.footer.contact.email}</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="text-[var(--color-primary)]">⏰</span>
                  <span className="text-white/80">{productData.footer.contact.hours}</span>
                </p>
              </div>
            </div>

            {/* Liens Utiles */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Liens Utiles</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-medium text-[var(--color-primary)]">Informations Légales</h4>
                  {productData.footer.legal.links.map((link, index) => (
                    <a key={index} href={link.url} className="block text-white/80 hover:text-white transition-colors text-sm">
                      {link.name}
                    </a>
                  ))}
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-[var(--color-primary)]">Livraison & Retours</h4>
                  {productData.footer.shipping.links.map((link, index) => (
                    <a key={index} href={link.url} className="block text-white/80 hover:text-white transition-colors text-sm">
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter & Social */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">{productData.footer.newsletter.title}</h3>
                <p className="text-white/80 mb-4">{productData.footer.newsletter.description}</p>
                <form className="flex space-x-2">
                  <input
                    type="email"
                    placeholder={productData.footer.newsletter.placeholder}
                    className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[var(--color-primary)]"
                  />
                  <button className="px-4 py-2 bg-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">
                    {productData.footer.newsletter.button}
                  </button>
                </form>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{productData.footer.social.title}</h3>
                <p className="text-white/80 mb-4">{productData.footer.social.description}</p>
                <div className="flex space-x-4">
                  {productData.footer.social.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[var(--color-primary)] transition-colors"
                      title={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/80 text-sm">{productData.footer.copyright}</p>
              <div className="flex items-center space-x-4">
                <span className="text-white/80 text-sm">Paiement sécurisé :</span>
                <div className="flex space-x-2">
                  {productData.footer.payment.methods.map((method, index) => (
                    <span key={index} className="text-white/60 text-sm">{method}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
