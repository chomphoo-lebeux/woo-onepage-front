import Image from "next/image";
import productData from "@/data/product.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
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
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            {productData.hero.title}
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {productData.hero.description}
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
            {productData.hero.cta}
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{productData.features.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productData.features.items.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{productData.benefits.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {productData.benefits.items.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      ✓
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">{benefit.title}</h3>
                    <p className="mt-2 text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={productData.benefits.image}
                alt="Notre produit"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">{productData.pricing.title}</h2>
            <p className="text-xl text-gray-600 mb-8">{productData.pricing.subtitle}</p>
            <div className="inline-block bg-gray-50 rounded-2xl p-8">
              <div className="text-5xl font-bold text-blue-600 mb-4">{productData.pricing.currentPrice}</div>
              <p className="text-gray-600 mb-6">Prix normal : {productData.pricing.originalPrice}</p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
                {productData.pricing.cta}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">{productData.footer.about.title}</h3>
              <p className="text-gray-400">{productData.footer.about.description}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{productData.footer.contact.title}</h3>
              <p className="text-gray-400">Email: {productData.footer.contact.email}</p>
              <p className="text-gray-400">Tél: {productData.footer.contact.phone}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{productData.footer.social.title}</h3>
              <div className="flex space-x-4">
                {productData.footer.social.links.map((link, index) => (
                  <a key={index} href={link.url} className="text-gray-400 hover:text-white">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>{productData.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
