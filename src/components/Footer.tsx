import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Sparkles" size={28} className="text-primary" />
              <span className="text-2xl font-bold">CrystalVision</span>
            </div>
            <p className="text-gray-400">
              Окна и зеркала премиум-класса для вашего пространства
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Продукция</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#products" className="hover:text-primary transition-colors">Пластиковые окна</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Деревянные окна</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Алюминиевые окна</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Зеркала</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Портфолио</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Гарантии</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-400">
              <li>+7 (495) 123-45-67</li>
              <li>info@crystalvision.ru</li>
              <li>г. Москва, ул. Примерная, 123</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 CrystalVision. Все права защищены.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Icon name="Youtube" size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
