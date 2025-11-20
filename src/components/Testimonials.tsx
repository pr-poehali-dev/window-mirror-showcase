import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Анна Петрова',
      role: 'Владелец частного дома',
      text: 'Установили панорамные окна в гостиной. Качество исполнения превзошло все ожидания! Дом стал светлее и теплее. Отдельное спасибо за профессиональный монтаж.',
      rating: 5
    },
    {
      name: 'Михаил Соколов',
      role: 'Директор ресторана',
      text: 'Заказывали декоративные зеркала для интерьера ресторана. Получили уникальные изделия, которые стали изюминкой заведения. Гости постоянно делают комплименты!',
      rating: 5
    },
    {
      name: 'Елена Волкова',
      role: 'Владелец квартиры',
      text: 'Заменили все окна в трехкомнатной квартире. Работу выполнили быстро, аккуратно, без задержек. Шума с улицы теперь практически не слышно. Очень довольны!',
      rating: 5
    },
    {
      name: 'Дмитрий Кузнецов',
      role: 'Управляющий бизнес-центром',
      text: 'Сотрудничаем уже третий год. Устанавливали алюминиевые окна в офисном здании. Профессиональный подход, соблюдение сроков, отличное качество материалов.',
      rating: 5
    },
    {
      name: 'Ольга Морозова',
      role: 'Дизайнер интерьеров',
      text: 'Рекомендую CrystalVision всем своим клиентам. Большой выбор зеркал, возможность индивидуального заказа. Всегда идут навстречу в реализации нестандартных идей.',
      rating: 5
    },
    {
      name: 'Сергей Новиков',
      role: 'Владелец загородного дома',
      text: 'Установили деревянные окна из лиственницы. Прошло 3 года - выглядят как новые! Качество материалов и работы на высшем уровне. Гарантия действительно работает.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-xl text-gray-600">
            Более 500 довольных клиентов за 15 лет работы
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
            <Icon name="TrendingUp" size={24} className="text-primary" />
            <span className="text-lg font-semibold text-gray-900">
              Рейтинг 4.9 из 5.0 на основе 287 отзывов
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
