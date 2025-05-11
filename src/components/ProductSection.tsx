import Image from "next/image";
import productData from "@/data/product.json";

export default function ProductSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary-dark">{productData.product.title}</h2>
            <p className="text-light mb-8">{productData.product.description}</p>
            <ul className="space-y-3 mb-8">
              {productData.product.features.map((feature, index) => (
                <li key={index} className="flex items-center text-light">
                  <span className="text-primary mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mb-8">
              <h3 className="font-semibold mb-3 text-primary-dark">Tailles disponibles :</h3>
              <div className="flex gap-2">
                {productData.product.sizes.map((size) => (
                  <button key={size} className="size-button">
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h3 className="font-semibold mb-3 text-primary-dark">Couleurs :</h3>
              <div className="flex gap-4">
                {productData.product.colors.map((color) => (
                  <button
                    key={color.name}
                    className="w-8 h-8 rounded-full border border-primary-light cursor-pointer"
                    style={{ backgroundColor: color.code }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 mb-8">
              <div className="text-4xl font-bold text-primary-dark">{productData.product.price.current}</div>
              <div className="text-xl text-light line-through">{productData.product.price.original}</div>
              <div className="text-primary font-semibold">-{productData.product.price.savings}</div>
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
  );
} 