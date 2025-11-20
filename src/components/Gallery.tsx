import { useState } from 'react';

const Gallery = () => {
  const projects = [
    {
      id: 1,
      image: 'https://cdn.poehali.dev/projects/6166c78e-a5f1-4523-a04a-11138fff88b1/files/3072b803-cd6d-4dff-9352-119457a4bc0a.jpg',
      title: 'Панорамные окна в загородном доме',
      category: 'Окна'
    },
    {
      id: 2,
      image: 'https://cdn.poehali.dev/projects/6166c78e-a5f1-4523-a04a-11138fff88b1/files/bbe8b9aa-2f26-4e15-bb83-c301e20c44fc.jpg',
      title: 'Коллекция декоративных зеркал',
      category: 'Зеркала'
    },
    {
      id: 3,
      image: 'https://cdn.poehali.dev/projects/6166c78e-a5f1-4523-a04a-11138fff88b1/files/fc8c4db0-2ae9-4bca-9ab4-7e66c280e399.jpg',
      title: 'Современные окна в бизнес-центре',
      category: 'Окна'
    }
  ];

  const [filter, setFilter] = useState('Все');
  const categories = ['Все', 'Окна', 'Зеркала'];

  const filteredProjects = filter === 'Все' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Галерея наших работ
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Реализованные проекты для квартир, домов и коммерческих объектов
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  filter === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-sm font-semibold text-sky-300 mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
