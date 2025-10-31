import React from 'react';
import { Shield, Zap, Headphones, Gauge, Lock, Cloud } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast Performance',
    description: 'Optimized for speed with fast loading times to keep your visitors engaged.'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Built with security best practices and regular backups to protect your data.'
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Get help whenever you need it with our responsive support team.'
  },
  {
    icon: Gauge,
    title: 'SEO Optimized',
    description: 'Improve your search rankings with built-in SEO optimization.'
  },
  {
    icon: Lock,
    title: 'SSL Certificate',
    description: 'Free SSL certificate included for secure HTTPS connections.'
  },
  {
    icon: Cloud,
    title: 'Cloud Hosting',
    description: 'Reliable cloud hosting with 99.9% uptime guarantee.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We provide everything you need for a successful online presence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
