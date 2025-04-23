import React from 'react';

const Accueil: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 flex items-center">
      <div className="w-full relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center opacity-20" 
            style={{ 
              backgroundImage: "url('https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')" 
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-sage-200/50 to-sage-100/80"></div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4 text-sage-900">
              <span className="block">Tiffany</span>
              <span className="inline-block mx-4 text-gold-500">&</span>
              <span className="block">Warren</span>
            </h1>
            
            <div className="w-32 h-1 bg-gold-500 mx-auto my-8"></div>
            
            <h2 className="text-2xl md:text-3xl font-light mb-8">
              Nous nous marions !
            </h2>
            
            <div className="text-xl md:text-2xl font-heading mb-10">
              <time dateTime="2026-06-06">6 Juin 2026</time>
              <span className="mx-3">•</span>
              <span>Saint-André-sur-Vieux-Jonc, France</span>
            </div>
            
            <p className="text-lg md:text-xl mb-12 text-sage-800">
              Nous sommes ravis de partager ce jour spécial avec vous au Domaine du Cuiset. 
              Notre site vous guidera à travers tous les détails de notre célébration.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <button 
                onClick={() => {
                  document.getElementById('confirmation')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-primary"
              >
                Confirmer ma présence
              </button>
              
              <button 
                onClick={() => {
                  document.getElementById('infos-pratiques')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-outline"
              >
                Infos pratiques
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;