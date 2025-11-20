import Icon from '@/components/ui/icon';

const About = () => {
  const features = [
    {
      icon: 'Award',
      title: 'Премиум качество',
      description: 'Используем только сертифицированные материалы европейского производства'
    },
    {
      icon: 'Users',
      title: 'Опытная команда',
      description: 'Более 15 лет на рынке, сотни довольных клиентов'
    },
    {
      icon: 'Clock',
      title: 'Точные сроки',
      description: 'Гарантируем выполнение работ в оговоренные сроки'
    },
    {
      icon: 'Shield',
      title: 'Гарантия 5 лет',
      description: 'Официальная гарантия на все виды работ и материалы'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            О компании CrystalVision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы специализируемся на производстве и установке качественных окон и изготовлении 
            эксклюзивных зеркал для жилых и коммерческих помещений
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:bg-sky-50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Icon name={feature.icon} size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
