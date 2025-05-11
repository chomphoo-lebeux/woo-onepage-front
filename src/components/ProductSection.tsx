"use client";

import Image from "next/image";
import productData from "@/data/product.json";
import { useState } from "react";

export default function ProductSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === productData.gallery.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? productData.gallery.images.length - 1 : prevIndex - 1
    );
  };

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
          
          {/* Carrousel d'images */}
          <div className="relative">
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={productData.gallery.images[currentImageIndex].src}
                alt={productData.gallery.images[currentImageIndex].alt}
                fill
                className="object-cover transition-opacity duration-300"
                priority
              />
              
              {/* Contrôles de navigation */}
              <button
                onClick={previousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary-dark p-2 rounded-full shadow-lg transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95"
                aria-label="Image précédente"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary-dark p-2 rounded-full shadow-lg transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95"
                aria-label="Image suivante"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Indicateurs de navigation */}
            <div className="flex justify-center gap-2 mt-4">
              {productData.gallery.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-primary scale-125' : 'bg-primary-light'
                  }`}
                  aria-label={`Aller à l'image ${index + 1}`}
                />
              ))}
            </div>

            {/* Miniatures */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {productData.gallery.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-300 cursor-pointer hover:opacity-80 active:scale-95 ${
                    index === currentImageIndex ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 