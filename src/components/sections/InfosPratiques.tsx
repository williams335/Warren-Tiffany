import React from 'react';
import { Clock, MapPin, Car, Shirt } from 'lucide-react';

const InfoCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => {
  return (
    <div className="card p-6 flex flex-col h-full">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-sage-100 rounded-md text-sage-700 mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
};

const InfosPratiques: React.FC = () => {
  return (
    <div className="section-container fade-in">
      <h2 className="section-title">Infos Pratiques</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <InfoCard 
          icon={<Clock className="h-5 w-5" />} 
          title="Date & Horaires"
        >
          <div className="space-y-3">
            <div>
              <h4 className="font-medium text-gold-600">Cérémonie Civile</h4>
              <p className="text-sage-700">6 Juin 2026 à 14h00</p>
              <p className="text-sm">Mairie de Miribel</p>
              <p className="text-sm">Rue de l'Hôtel de ville, 01700 Miribel</p>
              <a 
                href="https://maps.google.com/?q=Mairie+de+Miribel+Rue+de+l'Hôtel+de+ville+01700+Miribel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-sage-600 hover:text-sage-800 underline mt-1 inline-block"
              >
                Voir sur Google Maps
              </a>
            </div>
            
            <div>
              <h4 className="font-medium text-gold-600">Cérémonie Laïque & Réception</h4>
              <p className="text-sage-700">6 Juin 2026 à 16h00</p>
              <p className="text-sm">Le Domaine du Cuiset</p>
              <p className="text-sm">763 route de Condeissiat</p>
              <p className="text-sm">01960 Saint-André-sur-Vieux-Jonc</p>
              <a 
                href="https://maps.google.com/?q=Le+domaine+du+cuiset+763+route+de+condeissiat+01960+Saint-André-sur-Vieux-Jonc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-sage-600 hover:text-sage-800 underline mt-1 inline-block"
              >
                Voir sur Google Maps
              </a>
            </div>
          </div>
        </InfoCard>
        
        <InfoCard 
          icon={<Car className="h-5 w-5" />} 
          title="Transport & Parking"
        >
          <div className="space-y-3">
            <div>
              <h4 className="font-medium text-gold-600">Parking</h4>
              <p className="text-sm">
                Des places de stationnement gratuites sont disponibles sur les deux lieux.
              </p>
            </div>
          </div>
        </InfoCard>
        
        <InfoCard 
          icon={<Shirt className="h-5 w-5" />} 
          title="Dress Code"
        >
          <div>
            <p className="mb-4 text-lg font-medium text-sage-800">
              Venez beaux, venez chics, venez colorés… mais laissez le blanc aux stars du jour ! le couple AKANDA 👰🤵🏾‍♂️
            </p>
            
            <div className="flex space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full" style={{ backgroundColor: '#83ba8c' }}></div>
              <div className="w-10 h-10 rounded-full bg-gold-500"></div>
              <div className="w-10 h-10 rounded-full bg-sage-200"></div>
            </div>
            
            <p className="text-sm text-sage-700">
              Les tenues formelles sont recommandées. 
              Messieurs, une veste sera appréciée.
              Mesdames, attention aux talons hauts pour la partie extérieure (pelouse).
            </p>
          </div>
        </InfoCard>
      </div>
      
      <div className="mt-10">
        <h3 className="text-xl font-medium mb-4 text-center">Plan des lieux</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.9046115562824!2d4.9619444!3d45.8275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c1b1b1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sMairie%20de%20Miribel!5e0!3m2!1sfr!2sfr!4v1619788888888!5m2!1sfr!2sfr"
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mairie de Miribel"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.9046115562824!2d4.9619444!3d45.8275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c1b1b1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sLe%20Domaine%20du%20Cuiset!5e0!3m2!1sfr!2sfr!4v1619788888888!5m2!1sfr!2sfr"
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Le Domaine du Cuiset"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfosPratiques;