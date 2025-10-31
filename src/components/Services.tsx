import React from 'react';
import { Store, Building2, Smartphone, ShoppingCart, Users, FileText } from 'lucide-react';

const services = [
  {
    icon: Store,
    title: 'UMKM Websites',
    description: 'Professional websites for small and medium enterprises to expand their digital presence.',
    color: 'blue'
  },
  {
    icon: Building2,
    title: 'Village Portals',
    description: 'Information portals for villages to share news, services, and community updates.',
    color: 'green'
  },
  {
    icon: ShoppingCart,
    title: 'Online Store',
    description: 'E-commerce solutions to sell products online with payment integration.',
    color: 'purple'
  },
  {
    icon: Smartphone,
    title: 'Mobile Responsive',
    description: 'All websites are optimized for mobile, tablet, and desktop devices.',
    color: 'orange'
  },
  {
    icon: Users,
    title: 'Community Platform',
    description: 'Build community engagement with forums, galleries, and member areas.',
    color: 'pink'
  },
  {
    icon: FileText,
    title: 'Content Management',
    description: 'Easy-to-use admin panel to manage your website content without technical skills.',
    color: 'indigo'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive web solutions tailored for your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white border-2 border-gray-100 rounded-xl p-6 md:p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-${service.color}-100 text-${service.color}-600 mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
