import productData from "@/data/product.json";

export default function ScrollingBanner() {
  return (
    <div className="bg-primary text-[var(--color-text-white)] py-2 relative">
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
  );
} 