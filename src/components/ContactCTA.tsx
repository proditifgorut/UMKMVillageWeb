import React from 'react';
import { MessageCircle, Mail, Phone } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl text-blue-100 mb-8 md:mb-12">
            Let's discuss your project and create something amazing together
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="https://wa.me/6283119226089"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-xl p-6 hover:bg-opacity-20 transition-all group"
            >
              <MessageCircle className="h-12 w-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-blue-100 text-sm">+62 831 1922 6089</p>
            </a>
            
            <a
              href="mailto:info@example.com"
              className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-xl p-6 hover:bg-opacity-20 transition-all group"
            >
              <Mail className="h-12 w-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-2">Email</h3>
              <p className="text-blue-100 text-sm">info@webpro.com</p>
            </a>
            
            <a
              href="tel:+6283119226089"
              className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-xl p-6 hover:bg-opacity-20 transition-all group"
            >
              <Phone className="h-12 w-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
              <p className="text-blue-100 text-sm">+62 831 1922 6089</p>
            </a>
          </div>
          
          <a
            href="https://wa.me/6283119226089?text=Hi, I would like to discuss a website project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl font-semibold text-lg"
          >
            <MessageCircle className="mr-2 h-6 w-6" />
            Start Your Project Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
