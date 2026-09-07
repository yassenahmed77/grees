import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import ProductDetails from '../components/ProductDetails';

export default function ProductPage({ onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id.toLowerCase() === (id || '').toLowerCase());

  if (!product) {
    return (
      <div className="min-h-screen bg-grees-cream pt-28 pb-16 px-4 flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl sm:text-3xl font-display font-medium text-grees-wood mb-3">
          Fragrance Not Found
        </h2>
        <p className="text-sm text-grees-cream-muted mb-6 font-sans">
          The fragrance you are looking for does not exist in our catalog.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-grees-wood text-grees-cream-light font-display text-xs uppercase tracking-widest hover:bg-grees-wood-light transition-colors"
        >
          Return to Collection
        </button>
      </div>
    );
  }

  return (
    <div className="pt-16 sm:pt-20">
      <ProductDetails 
        product={product} 
        onBack={() => navigate('/')}
        onAddToCart={onAddToCart}
      />
    </div>
  );
}
