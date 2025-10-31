import React from 'react';
import { Globe, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">WebPro</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional website development services for UMKM and villages across Indonesia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500 transition-colors">UMKM Websites</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Village Portals</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">E-Commerce</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Web Design</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-gray-400">WhatsApp:</span>
                <a href="https://wa.me/6283119226089" className="ml-2 hover:text-blue-500 transition-colors">
                  +62 831 1922 6089
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400">Email:</span>
                <a href="mailto:info@webpro.com" className="ml-2 hover:text-blue-500 transition-colors">
                  info@webpro.com
                </a>
              </li>
              <li className="text-gray-400">
                Available: Mon - Sat<br />09:00 - 18:00 WIB
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} WebPro. All rights reserved. Built with ❤️ for Indonesian businesses.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
