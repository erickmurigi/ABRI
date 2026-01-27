import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ConsultationForm from './ConsultationForm';
import AbriLogo from "@/assets/Abri refined logo.png";
import { text } from 'stream/consumers';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Why ABRI', href: '#why-abri' },
  { name: 'Technology', href: '#technology' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}


<a href="#home" className="flex items-center gap-3">
  {/* Big, visible logo image */}
  <img
    src={AbriLogo}
    alt="ABRI Realtors Logo"
    className="h-20 w-40 md:h-14 lg:h-64 object-contain"
  />

  {/* Brand name */}
  <span
    className={`font-bold text-xl md:text-2xl transition-colors ${
      isScrolled ? "text-secondary" : "text-white"
    }`}
  >
    ABRI REALTORS

    <br /> Your Property, Our Priority.
  </span>
</a>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-secondary/80' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
                        <ConsultationForm
              trigger={
                <Button className="btn-primary gap-2">
                  <Phone className="w-4 h-4" />
                  Free Consultation
                </Button>
              }
            />  
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-secondary' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-secondary' : 'text-white'}`} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4 bg-card rounded-xl p-4 shadow-lg">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-secondary font-medium py-2 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <ConsultationForm
                trigger={
                  <Button className="btn-primary w-full gap-2 mt-2">
                    <Phone className="w-4 h-4" />
                    Free Consultation
                  </Button>
                }
              />    
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
