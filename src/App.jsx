import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (product) => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="w-full min-h-screen relative bg-grees-cream flex flex-col">
        {/* Persistent Header */}
        <Header 
          cartCount={cartCount}
          onCartClick={() => console.log('Cart clicked')}
          onSearchClick={() => console.log('Search clicked')}
        />

        {/* Application Routes */}
        <div className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
            <Route path="/product/:id" element={<ProductPage onAddToCart={handleAddToCart} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
