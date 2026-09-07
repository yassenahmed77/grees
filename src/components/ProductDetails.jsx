import React, { useState, useEffect } from 'react';
import { ArrowLeft, Check, Sparkles } from 'lucide-react';

export default function ProductDetails({ product, onBack, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState('50ml');
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product]);

  if (!product) return null;

  const currentPrice = selectedSize === '50ml' ? product.price50ml : product.price100ml;
  const currentOriginalPrice = selectedSize === '50ml' ? product.originalPrice50ml : product.originalPrice100ml;

  const handleAdd = () => {
    setIsAdded(true);
    if (onAddToCart) {
      onAddToCart({
        ...product,
        selectedSize,
        price: currentPrice
      });
    }
    setTimeout(() => setIsAdded(false), 1600);
  };

  return (
    <section className="w-full min-h-screen bg-grees-cream py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest text-grees-wood-light/80 hover:text-grees-wood mb-6 sm:mb-10 font-display transition-all duration-200 cursor-pointer group"
          aria-label="Back to collection"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          <span>Back to Collection</span>
        </button>

        {/* Product Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Product Visual (Sticky on Desktop Scroll) */}
          <div className="lg:col-span-6 w-full lg:sticky lg:top-24 self-start">
            <div className="relative w-full aspect-square bg-grees-cream-surface rounded-none border border-grees-cream-border overflow-hidden shadow-sm">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover object-center select-none"
              />
            </div>
          </div>

          {/* Right Column: Information & Controls */}
          <div className="lg:col-span-6 flex flex-col">
            
            {/* Inspired by */}
            <p className="text-[10.5px] sm:text-xs uppercase tracking-[0.08em] text-grees-cream-muted font-normal mb-1.5 font-sans">
              Inspired by {product.inspiredBy}
            </p>

            {/* Perfume Name */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-grees-wood tracking-tight mb-4">
              {product.name}
            </h1>

            {/* Price Display */}
            <div className="flex items-baseline gap-3 pb-5 border-b border-grees-cream-border">
              <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-grees-wood font-display">
                {currentPrice} EGP
              </span>
              {currentOriginalPrice && (
                <span className="text-sm sm:text-base text-grees-cream-muted line-through font-display">
                  {currentOriginalPrice} EGP
                </span>
              )}
            </div>

            {/* Sleek Compact Size Switcher (50ml vs 100ml) */}
            <div className="py-4 border-b border-grees-cream-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-grees-wood font-display">
                  Size:
                </span>
                <div className="inline-flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedSize('50ml')}
                    className={`py-1.5 px-3.5 text-xs font-semibold tracking-wider font-display transition-all duration-200 cursor-pointer border ${
                      selectedSize === '50ml'
                        ? 'border-grees-wood bg-grees-wood text-grees-cream-light shadow-xs'
                        : 'border-grees-cream-border bg-grees-cream-light text-grees-wood hover:border-grees-gold/60'
                    }`}
                  >
                    50 ML
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedSize('100ml')}
                    className={`py-1.5 px-3.5 text-xs font-semibold tracking-wider font-display transition-all duration-200 cursor-pointer border ${
                      selectedSize === '100ml'
                        ? 'border-grees-wood bg-grees-wood text-grees-cream-light shadow-xs'
                        : 'border-grees-cream-border bg-grees-cream-light text-grees-wood hover:border-grees-gold/60'
                    }`}
                  >
                    100 ML
                  </button>
                </div>
              </div>

              <span className="text-[11px] text-grees-cream-muted font-sans uppercase">
                {selectedSize === '50ml' ? '1.7 FL. OZ.' : '3.4 FL. OZ.'}
              </span>
            </div>

            {/* Add to Cart Button */}
            <div className="py-6 border-b border-grees-cream-border">
              <button
                onClick={handleAdd}
                disabled={isAdded}
                className={`w-full py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.24em] font-display transition-all duration-300 text-center border cursor-pointer ${
                  isAdded 
                    ? 'bg-grees-sage border-grees-sage text-white' 
                    : 'bg-grees-wood text-grees-gold-glow border-grees-gold/40 hover:bg-grees-gold hover:text-grees-wood hover:border-grees-gold active:scale-[0.99] shadow-xs'
                }`}
              >
                {isAdded ? 'ADDED TO BAG' : `ADD TO CART — ${currentPrice} EGP`}
              </button>
            </div>

            {/* Description */}
            {product.description && (
              <div className="py-6 border-b border-grees-cream-border">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-grees-wood font-display mb-2.5">
                  About the Scent
                </h3>
                <p className="text-sm text-grees-wood-light/90 leading-relaxed font-sans font-light">
                  {product.description}
                </p>
              </div>
            )}

            {/* Fragrance Notes Breakdown */}
            {product.notes && (
              <div className="py-6">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-grees-wood font-display mb-4">
                  Fragrance Notes
                </h3>
                <div className="flex flex-col gap-3.5">
                  {/* Top Notes */}
                  {product.notes.top && (
                    <div className="bg-grees-cream-light p-3.5 border border-grees-cream-border">
                      <span className="text-[10.5px] uppercase tracking-widest text-grees-gold-dark font-semibold font-display block mb-1.5">
                        Top Notes (الإفتتاحية)
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.notes.top.map((note, i) => (
                          <span key={i} className="text-xs text-grees-wood bg-grees-cream-surface px-2.5 py-0.5 rounded-xs font-sans">
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Heart / Middle Notes */}
                  {product.notes.middle && (
                    <div className="bg-grees-cream-light p-3.5 border border-grees-cream-border">
                      <span className="text-[10.5px] uppercase tracking-widest text-grees-gold-dark font-semibold font-display block mb-1.5">
                        Heart Notes (قلب العطر)
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.notes.middle.map((note, i) => (
                          <span key={i} className="text-xs text-grees-wood bg-grees-cream-surface px-2.5 py-0.5 rounded-xs font-sans">
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Base Notes */}
                  {product.notes.base && (
                    <div className="bg-grees-cream-light p-3.5 border border-grees-cream-border">
                      <span className="text-[10.5px] uppercase tracking-widest text-grees-gold-dark font-semibold font-display block mb-1.5">
                        Base Notes (القاعدة)
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.notes.base.map((note, i) => (
                          <span key={i} className="text-xs text-grees-wood bg-grees-cream-surface px-2.5 py-0.5 rounded-xs font-sans">
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
