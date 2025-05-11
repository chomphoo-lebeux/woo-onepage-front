import productData from "@/data/product.json";

export default function HeroSection() {
  return (
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
        <h1 className="text-4xl sm:text-6xl font-bold text-[var(--color-text-white)] mb-4">
          {productData.hero.title}
        </h1>
        <p className="text-xl text-[var(--color-text-white)]/90 mb-6">
          {productData.hero.subtitle}
        </p>
        <p className="text-lg text-[var(--color-text-white)]/80 mb-8 max-w-2xl mx-auto">
          {productData.hero.description}
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {productData.hero.features.map((feature, index) => (
            <span key={index} className="bg-[var(--color-text-white)]/20 backdrop-blur-sm text-[var(--color-text-white)] px-4 py-2 rounded-full text-sm cursor-default">
              {feature}
            </span>
          ))}
        </div>
        <button className="btn-primary px-8 py-4 rounded-full text-lg font-semibold">
          {productData.hero.cta}
        </button>
      </div>
    </section>
  );
} 