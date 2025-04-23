import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-sage-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-heading">Tiffany & Warren</h3>
            <p className="text-sm text-sage-100">Mariage {currentYear}</p>
          </div>
          
          <div className="flex items-center space-x-1 text-sm">
            <span>Créé avec</span>
            <Heart className="h-4 w-4 text-gold-400 fill-gold-400" />
            <span>pour Tiffany & Warren</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;