import React from 'react';
import { ExternalLink } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Toko Bunga Mawar',
    category: 'UMKM - Online Store',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=400&fit=crop',
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Desa Sejahtera',
    category: 'Village Portal',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Warung Kopi Nusantara',
    category: 'UMKM - Restaurant',
    image: 'https://images.unsplash.com/photo-1559305616-3a1d4af42210?w=600&h=400&fit=crop',
    color: 'from-amber-500 to-orange-500'
  },
  {
    title: 'Batik Heritage',
    category: 'UMKM - Fashion',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=400&fit=crop',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Desa Wisata Hijau',
    category: 'Village Tourism',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    title: 'Kerajinan Tangan',
    category: 'UMKM - Handicraft',
    image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600&h=400&fit=crop',
    color: 'from-blue-500 to-indigo-500'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            See some of the amazing websites we've created for our clients
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white text-sm mb-4">{item.category}</p>
                <div className="flex items-center text-white text-sm font-semibold">
                  <span>View Project</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </div>
              </div>
              
              <div className="bg-white p-4">
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
