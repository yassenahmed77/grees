import React from 'react';
import ProductCollection from '../components/ProductCollection';

export default function HomePage({ onAddToCart }) {
  return (
    <>
      {/* Hero Section with Responsive Images & Luxury Overlay */}
      <main className="relative w-full h-screen min-h-[600px] overflow-hidden">
        <picture className="w-full h-full block">
          <source media="(min-width: 768px)" srcSet="/hero-desktop.webp?v=2" type="image/webp" />
          <source media="(min-width: 768px)" srcSet="/hero-desktop.jpg?v=2" type="image/jpeg" />
          <source media="(max-width: 767px)" srcSet="/hero-mobile.webp?v=2" type="image/webp" />
          <img 
            src="/hero-mobile.jpg?v=2" 
            alt="GREES Luxury Fragrances Collection" 
            className="w-full h-full object-cover object-center select-none"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        {/* Cinematic Scrim Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/15 to-transparent pointer-events-none z-[1]" />
      </main>

      {/* Product Collection Section */}
      <ProductCollection onAddToCart={onAddToCart} />
    </>
  );
}
