import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  activeSection, 
  onNavClick, 
  isMenuOpen, 
  toggleMenu 
}) => {
  const navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'notre-histoire', label: 'Notre Histoire' },
    { id: 'infos-pratiques', label: 'Infos Pratiques' },
    { id: 'programme', label: 'Programme' },
    { id: 'hebergements', label: 'Hébergements' },
    { id: 'confirmation', label: 'Confirmation' },
    { id: 'casting', label: 'Casting' },
    { id: 'playlist', label: 'Playlist' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
    { id: 'remerciements', label: 'Remerciements' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <button 
              onClick={() => onNavClick('accueil')}
              className="flex items-center space-x-2"
            >
              <span className="font-heading text-xl font-bold text-sage-800">T&W</span>
            </button>
          </div>
          
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-sage-700 hover:text-sage-900 hover:bg-sage-100 focus:outline-none"
            >
              <span className="sr-only">Ouvrir le menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className={`${
                  activeSection === item.id
                    ? 'nav-link nav-link-active'
                    : 'nav-link nav-link-inactive'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden absolute top-full left-0 w-full bg-white shadow-lg`}
      >
        <div className="pt-2 pb-4 px-2 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id)}
              className={`${
                activeSection === item.id
                  ? 'block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-sage-100 text-sage-800'
                  : 'block w-full text-left px-3 py-2 rounded-md text-base font-medium text-sage-700 hover:bg-sage-50 hover:text-sage-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navigation;