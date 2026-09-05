import React, { useState } from 'react';
import Header from './components/Header';

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="w-full min-h-screen relative bg-[#faf9f6]">
      {/* Header overlayed on top of the Hero image */}
      <Header 
        cartCount={cartCount}
        onCartClick={() => console.log('Cart clicked')}
        onSearchClick={() => console.log('Search clicked')}
      />

      {/* Hero Section with Responsive Images & Luxury Overlay */}
      <main className="relative w-full h-screen min-h-[600px] overflow-hidden">
        {/* Responsive Background Images */}
        <picture className="w-full h-full block">
          <source media="(min-width: 768px)" srcSet="/hero-desktop.webp" type="image/webp" />
          <source media="(min-width: 768px)" srcSet="/hero-desktop.jpg" type="image/jpeg" />
          <source media="(max-width: 767px)" srcSet="/hero-mobile.webp" type="image/webp" />
          <img 
            src="/hero-mobile.jpg" 
            alt="GREES Luxury Fragrances Collection - Odysseus, Theia, Hyperion" 
            className="w-full h-full object-cover object-center select-none"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        {/* Cinematic Scrim Overlay: Deeper at the top for ultra-clean header legibility, transparent in the middle */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/15 to-transparent pointer-events-none z-[1]" />
      </main>
    </div>
  );
}

export default App;
