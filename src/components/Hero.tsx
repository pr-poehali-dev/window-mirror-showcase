import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Окна и зеркала премиум-класса
            </h1>
            <p className="text-xl text-gray-600">
              Создаём пространства, наполненные светом и стилем. 
              Индивидуальный подход к каждому проекту и безупречное качество исполнения.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={scrollToContact} className="text-lg px-8">
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" onClick={() => {
                const element = document.getElementById('products');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }} className="text-lg px-8">
                Наша продукция
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://cdn.poehali.dev/projects/6166c78e-a5f1-4523-a04a-11138fff88b1/files/fc8c4db0-2ae9-4bca-9ab4-7e66c280e399.jpg"
              alt="Современные окна в интерьере"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
