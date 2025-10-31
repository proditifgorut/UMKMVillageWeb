import React from 'react';
import { Check, Star } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  color: string;
}

const plans: PricingPlan[] = [
  {
    name: 'Basic',
    price: '500,000',
    period: 'one-time',
    description: 'Perfect for getting started online',
    color: 'blue',
    features: [
      'Up to 5 pages',
      'Mobile responsive design',
      'Contact form',
      'Google Maps integration',
      'Basic SEO setup',
      '1 month free support',
      'Free domain (.my.id)',
      'Free hosting (1 year)'
    ]
  },
  {
    name: 'Professional',
    price: '1,500,000',
    period: 'one-time',
    description: 'For growing businesses',
    color: 'purple',
    popular: true,
    features: [
      'Up to 15 pages',
      'Premium responsive design',
      'Advanced contact forms',
      'Google Maps & Analytics',
      'Advanced SEO optimization',
      '3 months free support',
      'Free domain (.com/.co.id)',
      'Free hosting (1 year)',
      'Content management system',
      'Photo gallery',
      'Social media integration',
      'WhatsApp integration'
    ]
  },
  {
    name: 'E-Commerce',
    price: '3,500,000',
    period: 'one-time',
    description: 'Full online store solution',
    color: 'green',
    features: [
      'Unlimited pages',
      'Premium e-commerce design',
      'Product catalog',
      'Shopping cart & checkout',
      'Payment gateway integration',
      'Order management system',
      '6 months free support',
      'Free domain (.com/.co.id)',
      'Free hosting (1 year)',
      'Advanced SEO & Analytics',
      'Email notifications',
      'Customer accounts',
      'Inventory management',
      'Discount & coupon system'
    ]
  }
];

const PricingPlans: React.FC = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? 'border-2 border-purple-500 transform lg:scale-105' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-sm text-gray-500 mr-1">IDR</span>
                    <span className="text-4xl md:text-5xl font-bold text-gray-900">{plan.price}</span>
                  </div>
                  <span className="text-gray-500 text-sm">{plan.period}</span>
                </div>
                
                <a
                  href={`https://wa.me/6283119226089?text=Hi, I'm interested in the ${plan.name} package`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all mb-6 ${
                    plan.popular
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Get Started
                </a>
                
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need a custom solution?</p>
          <a
            href="https://wa.me/6283119226089"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            Contact us for a custom quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
