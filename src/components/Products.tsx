import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Products = () => {
  const windows = [
    {
      title: 'Пластиковые окна',
      description: 'Энергоэффективные окна с многокамерным профилем и тройным стеклопакетом',
      features: ['Шумоизоляция до 42 дБ', 'Теплосбережение класса А', 'Срок службы 40+ лет']
    },
    {
      title: 'Деревянные окна',
      description: 'Элитные окна из клееного бруса премиальных пород древесины',
      features: ['Натуральные материалы', 'Уникальный дизайн', 'Экологичность']
    },
    {
      title: 'Алюминиевые окна',
      description: 'Современные конструкции для панорамного остекления и больших проёмов',
      features: ['Максимум света', 'Долговечность', 'Минималистичный дизайн']
    }
  ];

  const mirrors = [
    {
      title: 'Декоративные зеркала',
      description: 'Уникальные зеркала с авторским дизайном для интерьеров любого стиля',
      features: ['Индивидуальный дизайн', 'Различные формы', 'Декоративные рамы']
    },
    {
      title: 'Зеркала с подсветкой',
      description: 'Функциональные зеркала со встроенной LED-подсветкой',
      features: ['Равномерное освещение', 'Энергосбережение', 'Сенсорное управление']
    },
    {
      title: 'Зеркальные панели',
      description: 'Крупноформатные зеркальные конструкции для визуального расширения пространства',
      features: ['Увеличение пространства', 'Безопасное стекло', 'Скрытый монтаж']
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-blue-50 to-sky-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Наша продукция
          </h2>
          <p className="text-xl text-gray-600">
            Широкий ассортимент решений для вашего пространства
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Icon name="Home" size={32} className="text-primary" />
            Окна
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {windows.map((product, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{product.title}</CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Icon name="Sparkles" size={32} className="text-primary" />
            Зеркала
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {mirrors.map((product, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{product.title}</CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
