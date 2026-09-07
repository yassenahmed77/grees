import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X, ArrowRight } from 'lucide-react';

export default function Header({ cartCount = 0, onCartClick, onSearchClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const isHome = location.pathname === '/';
  const showSolidHeader = !isHome || isScrolled;

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'For Him', href: '/#for-him' },
    { name: 'For Her', href: '/#for-her' },
    { name: 'Contact', href: '/#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileSearch = (e) => {
    e.preventDefault();
    if (onSearchClick) onSearchClick(searchQuery);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`w-full z-40 transition-all duration-300 ${
          showSolidHeader 
            ? 'fixed top-0 left-0 bg-grees-cream/95 backdrop-blur-md shadow-xs border-b border-grees-cream-border py-3 px-5 sm:px-8 md:px-12' 
            : 'absolute top-0 left-0 bg-transparent py-4 md:py-6 px-5 sm:px-8 md:px-12'
        }`}
      >
        <div className="max-w-[1600px] mx-auto relative flex items-center justify-between h-12 w-full">
          
          {/* 1. LEFT: DESKTOP NAV LINKS & MOBILE BURGER */}
          <div className="flex items-center z-10">
            {/* Mobile Hamburger Button */}
            <button 
              className={`md:hidden p-2 -ml-2 rounded-lg transition-colors flex items-center justify-center cursor-pointer ${
                showSolidHeader 
                  ? 'text-grees-wood hover:bg-grees-cream-surface' 
                  : 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] hover:bg-white/10'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation with Clean Modern Typography */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-10" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-display text-[13.5px] tracking-[0.15em] uppercase transition-all duration-200 relative py-1 ${
                    showSolidHeader
                      ? activeLink === link.name 
                        ? 'font-semibold text-grees-wood' 
                        : 'font-normal text-grees-wood-light/80 hover:text-grees-wood'
                      : activeLink === link.name
                        ? 'font-semibold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]'
                        : 'font-normal text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] hover:text-white'
                  }`}
                  onClick={() => setActiveLink(link.name)}
                >
                  {link.name}
                  <span 
                    className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                      showSolidHeader ? 'bg-grees-gold' : 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]'
                    } ${activeLink === link.name ? 'w-full' : 'w-0 hover:w-full'}`} 
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* 2. CENTER: LOGO */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 pointer-events-auto">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center transition-transform duration-200 hover:opacity-90 hover:-translate-y-0.5" 
              aria-label="GREES Home"
            >
              {showSolidHeader ? (
                <img 
                  src="/logo.png?v=3" 
                  alt="GREES" 
                  className="h-[22px] md:h-[28px] w-auto block object-contain select-none"
                />
              ) : (
                <img 
                  src="/logo-white.png?v=3" 
                  alt="GREES" 
                  className="h-[22px] md:h-[28px] w-auto block object-contain select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                />
              )}
            </Link>
          </div>

          {/* 3. RIGHT: ICONS */}
          <div className="flex items-center justify-end gap-2 sm:gap-3 md:gap-4 z-10">
            {/* Search (Desktop only) */}
            <button 
              className={`hidden md:inline-flex p-2 rounded-full transition-all duration-200 hover:-translate-y-0.5 cursor-pointer ${
                showSolidHeader 
                  ? 'text-grees-wood hover:bg-grees-cream-surface' 
                  : 'text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] hover:bg-white/10'
              }`}
              onClick={onSearchClick}
              aria-label="Search store"
              title="Search"
            >
              <Search size={20} strokeWidth={2} />
            </button>

            {/* Profile */}
            <button 
              className={`p-2 rounded-full transition-all duration-200 hover:-translate-y-0.5 cursor-pointer ${
                showSolidHeader 
                  ? 'text-grees-wood hover:bg-grees-cream-surface' 
                  : 'text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] hover:bg-white/10'
              }`}
              aria-label="User account"
              title="Account"
            >
              <User size={20} strokeWidth={2} />
            </button>

            {/* Cart */}
            <button 
              className={`p-2 rounded-full transition-all duration-200 hover:-translate-y-0.5 relative cursor-pointer ${
                showSolidHeader 
                  ? 'text-grees-wood hover:bg-grees-cream-surface' 
                  : 'text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] hover:bg-white/10'
              }`}
              onClick={onCartClick}
              aria-label="View Shopping Cart"
              title="Cart"
            >
              <ShoppingBag size={20} strokeWidth={2} />
              {cartCount > 0 && (
                <span className={`absolute top-0.5 right-0.5 text-[10px] font-bold min-w-[17px] h-[17px] rounded-full flex items-center justify-center px-1 ${
                  showSolidHeader ? 'bg-grees-gold text-grees-wood' : 'bg-white text-grees-wood shadow-sm'
                }`}>
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE MENU DRAWER OVERLAY */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-xs z-50 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      
      {/* MOBILE MENU DRAWER */}
      <div 
        className={`fixed top-0 left-0 bottom-0 w-[84%] max-w-[340px] bg-[#faf8f5] z-50 shadow-2xl transition-transform duration-300 ease-out flex flex-col p-6 md:hidden border-r border-[#2a211b]/10 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between pb-5 border-b border-[#2a211b]/10">
          <img src="/logo.png?v=3" alt="GREES" className="h-6 w-auto object-contain" />
          <button 
            className="p-1.5 text-[#2a211b] hover:bg-[#2a211b]/10 rounded-full transition-colors cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search inside Mobile Drawer */}
        <form className="my-5 flex items-center gap-2.5 bg-white border border-grees-cream-border rounded-full px-4 py-2.5 shadow-xs" onSubmit={handleMobileSearch}>
          <Search size={17} className="text-grees-wood-muted shrink-0" />
          <input 
            type="text" 
            placeholder="Search fragrances..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border-none outline-none text-sm text-grees-wood placeholder:text-grees-cream-muted font-sans"
          />
        </form>

        {/* Nav Links */}
        <nav className="flex flex-col gap-1.5 flex-1 overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`flex items-center justify-between px-3.5 py-3 rounded-lg font-display text-[13px] tracking-[0.14em] uppercase transition-colors ${
                activeLink === link.name 
                  ? 'bg-grees-cream-surface text-grees-wood font-semibold' 
                  : 'text-grees-wood-light/80 hover:bg-grees-cream-surface/60 hover:text-grees-wood font-normal'
              }`}
              onClick={() => {
                setActiveLink(link.name);
                setIsMobileMenuOpen(false);
              }}
            >
              <span>{link.name}</span>
              <ArrowRight size={15} className="text-grees-cream-muted" />
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="pt-4 border-t border-grees-cream-border">
          <div className="flex items-center gap-2.5 text-xs font-display tracking-wider uppercase text-grees-wood py-2 cursor-pointer hover:text-grees-gold transition-colors">
            <User size={16} />
            <span>My Account / Sign In</span>
          </div>
          <p className="mt-3 text-[11px] font-display tracking-widest text-grees-cream-muted">© {new Date().getFullYear()} GREES PARFUMS</p>
        </div>
      </div>
    </>
  );
}
