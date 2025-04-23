import React from 'react';

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
}

const ProgrammeEvent: React.FC<TimelineEvent> = ({ time, title, description }) => {
  return (
    <div className="flex mb-8">
      <div className="w-24 flex-shrink-0 text-right mr-6">
        <span className="inline-block px-3 py-1 bg-sage-100 text-sage-800 rounded-md font-medium">
          {time}
        </span>
      </div>
      <div className="flex-grow">
        <h4 className="text-lg font-medium mb-1">{title}</h4>
        <p className="text-sage-700">{description}</p>
      </div>
    </div>
  );
};

const Programme: React.FC = () => {
  const events: TimelineEvent[] = [
    {
      time: "13h30",
      title: "Accueil des invités à la Mairie",
      description: "Retrouvons-nous devant la Mairie de Bordeaux, Place Pey Berland."
    },
    {
      time: "14h00",
      title: "Cérémonie Civile",
      description: "Célébration de notre union civile dans la salle des mariages de la Mairie de Bordeaux."
    },
    {
      time: "15h30",
      title: "Départ pour le Château",
      description: "Navette disponible ou trajet libre (25 minutes en voiture) jusqu'au Château Pape Clément."
    },
    {
      time: "16h00",
      title: "Cérémonie Laïque",
      description: "Dans les jardins du Château, nous célébrerons notre union entourés de nos proches avec une cérémonie personnalisée."
    },
    {
      time: "17h00",
      title: "Photos de groupe",
      description: "Immortalisons ce moment tous ensemble dans le cadre magnifique du domaine viticole."
    },
    {
      time: "18h00",
      title: "Cocktail & Animations",
      description: "Dégustation de champagne et de vins du domaine, accompagnés de mets raffinés, sur la terrasse du Château."
    },
    {
      time: "20h00",
      title: "Dîner",
      description: "Dîner gastronomique servi dans la grande salle de réception du Château."
    },
    {
      time: "22h30",
      title: "Ouverture du bal",
      description: "Premier dance des mariés, suivie d'une soirée festive avec DJ."
    },
    {
      time: "00h00",
      title: "Lâcher de lanternes",
      description: "Un moment magique où nous illuminerons ensemble le ciel nocturne."
    },
    {
      time: "02h00",
      title: "Fin des festivités",
      description: "Service de navette disponible pour raccompagner les invités vers les hôtels à proximité."
    }
  ];

  return (
    <div className="section-container fade-in">
      <h2 className="section-title">Programme</h2>
      
      <div className="max-w-3xl mx-auto">
        <div className="relative border-l-2 border-sage-300 pl-10 ml-6 md:ml-16">
          {events.map((event, index) => (
            <div key={index} className="relative mb-10">
              <div className="absolute -left-16 top-1 w-4 h-4 rounded-full bg-gold-500"></div>
              <ProgrammeEvent 
                time={event.time} 
                title={event.title} 
                description={event.description} 
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-16 p-6 card max-w-2xl mx-auto">
        <h3 className="text-xl font-medium mb-4 text-center">Moments spéciaux</h3>
        <p className="mb-4">
          Tout au long de la journée, nous avons prévu quelques surprises et rituels qui rendront cette célébration unique :
        </p>
        <ul className="space-y-3 text-sage-700">
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gold-500 rounded-full mt-2 mr-2"></span>
            <span>Lors de la cérémonie laïque, un rituel de l'arbre où nous planterons ensemble un olivier, symbole de notre union.</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gold-500 rounded-full mt-2 mr-2"></span>
            <span>Le lâcher de lanternes à minuit, un moment magique où vos vœux pour notre avenir s'envoleront vers les étoiles.</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gold-500 rounded-full mt-2 mr-2"></span>
            <span>Un espace photo avec accessoires sera installé pendant le cocktail pour immortaliser des moments amusants.</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gold-500 rounded-full mt-2 mr-2"></span>
            <span>Une dégustation des grands crus du Château Pape Clément animée par un œnologue pendant le cocktail.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Programme;