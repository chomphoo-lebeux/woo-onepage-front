import productData from "@/data/product.json";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-[var(--color-text-white)]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* À Propos */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">{productData.footer.about.title}</h3>
            <p className="text-[var(--color-text-white)]/80 leading-relaxed">{productData.footer.about.description}</p>
            <div className="space-y-4">
              {productData.footer.about.values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-primary">•</span>
                  <div>
                    <h4 className="font-medium">{value.title}</h4>
                    <p className="text-[var(--color-text-white)]/70 text-sm">{value.description}</p>
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
                <span className="text-primary">📍</span>
                <span className="text-[var(--color-text-white)]/80">{productData.footer.contact.address}</span>
              </p>
              <p className="flex items-center space-x-3">
                <span className="text-primary">📞</span>
                <span className="text-[var(--color-text-white)]/80">{productData.footer.contact.phone}</span>
              </p>
              <p className="flex items-center space-x-3">
                <span className="text-primary">✉️</span>
                <span className="text-[var(--color-text-white)]/80">{productData.footer.contact.email}</span>
              </p>
              <p className="flex items-center space-x-3">
                <span className="text-primary">⏰</span>
                <span className="text-[var(--color-text-white)]/80">{productData.footer.contact.hours}</span>
              </p>
            </div>
          </div>

          {/* Liens Utiles */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Liens Utiles</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-medium text-primary">Informations Légales</h4>
                {productData.footer.legal.links.map((link, index) => (
                  <a key={index} href={link.url} className="block text-[var(--color-text-white)]/80 hover:text-[var(--color-text-white)] transition-colors text-sm">
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-primary">Livraison & Retours</h4>
                {productData.footer.shipping.links.map((link, index) => (
                  <a key={index} href={link.url} className="block text-[var(--color-text-white)]/80 hover:text-[var(--color-text-white)] transition-colors text-sm">
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
              <p className="text-[var(--color-text-white)]/80 mb-4">{productData.footer.newsletter.description}</p>
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder={productData.footer.newsletter.placeholder}
                  className="flex-1 px-4 py-2 rounded-lg bg-[var(--color-text-white)]/10 border border-[var(--color-text-white)]/20 text-[var(--color-text-white)] placeholder-[var(--color-text-white)]/50 focus:outline-none focus:border-primary"
                />
                <button className="px-4 py-2 bg-primary rounded-lg hover:bg-primary-dark transition-colors">
                  {productData.footer.newsletter.button}
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{productData.footer.social.title}</h3>
              <p className="text-[var(--color-text-white)]/80 mb-4">{productData.footer.social.description}</p>
              <div className="flex space-x-4">
                {productData.footer.social.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-text-white)]/10 hover:bg-primary transition-colors"
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
      <div className="border-t border-[var(--color-text-white)]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[var(--color-text-white)]/80 text-sm">{productData.footer.copyright}</p>
            <div className="flex items-center space-x-4">
              <span className="text-[var(--color-text-white)]/80 text-sm">Paiement sécurisé :</span>
              <div className="flex space-x-2">
                {productData.footer.payment.methods.map((method, index) => (
                  <span key={index} className="text-[var(--color-text-white)]/60 text-sm">{method}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 