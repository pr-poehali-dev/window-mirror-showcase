import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Icon name="Sparkles" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-primary">CrystalVision</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors">
              О компании
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-primary transition-colors">
              Продукция
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-primary transition-colors">
              Галерея
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary transition-colors">
              Контакты
            </button>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col space-y-3">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-primary transition-colors text-left">
              Главная
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors text-left">
              О компании
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-primary transition-colors text-left">
              Продукция
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-primary transition-colors text-left">
              Галерея
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary transition-colors text-left">
              Контакты
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
