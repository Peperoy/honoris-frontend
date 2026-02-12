import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl tracking-[0.3em] font-light"
            style={{ color: isScrolled ? '#000' : '#fff' }}
          >
            HONORIS COSA
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {['À Propos', 'Nos Marques', 'Contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(['about', 'brands', 'contact'][index])}
                className="text-sm tracking-[0.2em] transition-all duration-300 hover:opacity-60"
                style={{ color: isScrolled ? '#000' : '#fff' }}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
            style={{ color: isScrolled ? '#000' : '#fff' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-black/10">
            <div className="flex flex-col gap-4 mt-6">
              {['À Propos', 'Nos Marques', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(['about', 'brands', 'contact'][index])}
                  className="text-sm tracking-[0.2em] text-black transition-all duration-300 hover:opacity-60"
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
