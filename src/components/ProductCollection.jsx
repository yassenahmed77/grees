import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function ProductCollection({ onAddToCart }) {
  const navigate = useNavigate();

  return (
    <section id="collection" className="w-full py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-12 bg-grees-cream">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-grees-wood tracking-normal font-medium">
            Most Loved Scents
          </h2>
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.18em] text-grees-gold-dark font-medium mt-2 leading-relaxed font-sans max-w-xs sm:max-w-none mx-auto">
            Luxury perfumes inspired by ancient Greece
          </p>
          <div className="w-8 sm:w-12 h-[1px] bg-grees-gold/60 mx-auto mt-3 sm:mt-4"></div>
        </div>

        {/* Product Grid (All 10 Fragrances) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              inspiredBy={product.inspiredBy}
              price={product.price50ml}
              originalPrice={product.originalPrice50ml}
              image={product.image}
              concentration={product.concentration}
              volume="50ml"
              onSelect={() => navigate(`/product/${product.id}`)}
              onAddToCart={() => onAddToCart && onAddToCart(product)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
