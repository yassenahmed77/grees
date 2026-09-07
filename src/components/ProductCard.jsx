import React, { useState } from 'react';

export default function ProductCard({ 
  name, 
  inspiredBy, 
  price, 
  originalPrice, 
  image, 
  concentration = "Extrait de Parfum",
  volume = "50ml",
  onAddToCart,
  onSelect
}) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    setIsAdded(true);
    if (onAddToCart) onAddToCart();
    setTimeout(() => setIsAdded(false), 1600);
  };

  return (
    <div 
      onClick={onSelect}
      className="group relative flex flex-col bg-grees-cream-light border border-grees-cream-border transition-all duration-300 hover:shadow-lg hover:border-grees-gold/50 cursor-pointer"
    >
      {/* 1. Product Image Container (1:1 Ratio) */}
      <div className="relative w-full aspect-square overflow-hidden bg-grees-cream-surface">
        <img 
          src={image} 
          alt={`${name} — ${concentration}`}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 select-none"
          loading="lazy"
        />
      </div>

      {/* 2. Product Details */}
      <div className="flex flex-col flex-grow p-4 sm:p-5 md:p-6 text-left">
        {/* Inspired By Brand & Fragrance (Refined, smaller scale) */}
        <p className="text-[10px] sm:text-[10.5px] uppercase tracking-[0.06em] text-grees-cream-muted font-normal mb-1 font-sans">
          Inspired by {inspiredBy}
        </p>

        {/* Perfume Name */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-display tracking-wide text-grees-wood font-medium mb-2.5 sm:mb-3 group-hover:text-grees-gold-dark transition-colors">
          {name}
        </h3>

        {/* Volume & Price on the same line */}
        <div className="flex items-baseline justify-between gap-2 mb-5 pt-1 border-t border-grees-cream-border/60">
          <span className="text-xs uppercase tracking-wider text-grees-cream-muted font-medium font-sans">
            {volume}
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-base sm:text-lg font-semibold tracking-tight text-grees-wood font-display">
              {price} EGP
            </span>
            {originalPrice && (
              <span className="text-xs text-grees-cream-muted line-through font-display">
                {originalPrice} EGP
              </span>
            )}
          </div>
        </div>

        {/* Brand Tailored Button: Distinct from generic Shopify, with Greek gold accent & wood tones */}
        <button
          onClick={handleAdd}
          disabled={isAdded}
          className={`w-full cursor-pointer py-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] font-display transition-all duration-300 text-center border ${
            isAdded 
              ? 'bg-grees-sage border-grees-sage text-white' 
              : 'bg-grees-wood text-grees-gold-glow border-grees-gold/30 hover:bg-grees-gold hover:text-grees-wood hover:border-grees-gold active:scale-[0.99] shadow-xs'
          }`}
          aria-label={`Add ${name} to cart`}
        >
          {isAdded ? 'ADDED' : 'ADD TO CART'}
        </button>
      </div>
    </div>
  );
}
