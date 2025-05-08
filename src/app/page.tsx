import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Découvrez Notre Produit Exceptionnel
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Une solution innovante qui transformera votre quotidien. Simple, efficace, et élégant.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
            Commander Maintenant
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Caractéristiques Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Design Premium",
                description: "Un design élégant et moderne qui s'intègre parfaitement dans votre espace."
              },
              {
                title: "Haute Performance",
                description: "Des performances exceptionnelles pour répondre à tous vos besoins."
              },
              {
                title: "Facile à Utiliser",
                description: "Une interface intuitive qui rend l'utilisation simple et agréable."
              }
            ].map((feature, index) => (
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
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi Nous Choisir ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    ✓
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Qualité Premium</h3>
                  <p className="mt-2 text-gray-600">Des matériaux de la plus haute qualité pour une durabilité exceptionnelle.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    ✓
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Support 24/7</h3>
                  <p className="mt-2 text-gray-600">Une équipe dédiée à votre service à tout moment.</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/product-placeholder.jfif"
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
            <h2 className="text-3xl font-bold mb-4">Offre Spéciale</h2>
            <p className="text-xl text-gray-600 mb-8">Profitez de notre prix de lancement</p>
            <div className="inline-block bg-gray-50 rounded-2xl p-8">
              <div className="text-5xl font-bold text-blue-600 mb-4">99€</div>
              <p className="text-gray-600 mb-6">Prix normal : 149€</p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
                Commander Maintenant
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
              <h3 className="text-lg font-semibold mb-4">À Propos</h3>
              <p className="text-gray-400">Nous sommes dédiés à fournir les meilleurs produits pour nos clients.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">Email: contact@example.com</p>
              <p className="text-gray-400">Tél: +33 1 23 45 67 89</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Votre Entreprise. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
