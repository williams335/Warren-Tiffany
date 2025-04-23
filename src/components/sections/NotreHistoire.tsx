import React from 'react';

const TimelineItem: React.FC<{
  date: string;
  title: string;
  description: string;
  image?: string;
}> = ({ date, title, description, image }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="mb-4">
        <div className="timeline-date">{date}</div>
        <h4 className="text-xl font-medium mb-2">{title}</h4>
        <p className="text-sage-700">{description}</p>
      </div>
      {image && (
        <div className="mt-4 rounded-lg overflow-hidden shadow-md">
          <img src={image} alt={title} className="w-full h-auto" />
        </div>
      )}
    </div>
  );
};

const NotreHistoire: React.FC = () => {
  return (
    <div className="section-container fade-in">
      <h2 className="section-title">Notre Histoire</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div className="card p-6">
          <h3 className="text-xl font-medium mb-4 text-sage-800">Tiffany</h3>
          <p className="mb-3">
            Tiffany, parisienne de 29 ans, est une passionnée de photographie et de voyages. 
            Avec son sourire contagieux et son énergie débordante, elle illumine chaque pièce où elle entre.
          </p>
          <p>
            Professionnellement, elle est architecte d'intérieur et transforme les espaces avec une 
            créativité remarquable et un œil pour les détails.
          </p>
        </div>
        
        <div className="card p-6">
          <h3 className="text-xl font-medium mb-4 text-sage-800">Warren</h3>
          <p className="mb-3">
            Warren, bordelais de 31 ans, est un amoureux de la nature et des sports d'extérieur. 
            Calme et réfléchi, il apporte l'équilibre parfait à leur relation.
          </p>
          <p>
            Dans sa vie professionnelle, il est ingénieur informatique, combinant logique et créativité 
            pour résoudre des problèmes complexes.
          </p>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <h3 className="text-2xl font-medium mb-4 text-center">Notre Parcours</h3>
          <div className="mt-8">
            <TimelineItem 
              date="Septembre 2018"
              title="Notre première rencontre"
              description="Nous nous sommes rencontrés lors d'un workshop de photographie à Lyon. Warren était là pour la technique, Tiffany pour l'esthétique - nos mondes se sont percutés et ne se sont plus quittés."
              image="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
            
            <TimelineItem 
              date="Juin 2019"
              title="Premier voyage ensemble"
              description="Après plusieurs mois de relation à distance entre Paris et Bordeaux, nous avons décidé de partir explorer l'Italie ensemble - un voyage qui a confirmé que nous étions faits l'un pour l'autre."
              image="https://images.pexels.com/photos/3283186/pexels-photo-3283186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
            
            <TimelineItem 
              date="Décembre 2020"
              title="Emménagement ensemble"
              description="Tiffany a pris la décision de quitter Paris pour s'installer avec Warren à Bordeaux. Un nouveau chapitre commençait pour nous deux."
            />
            
            <TimelineItem 
              date="Juillet 2023"
              title="La demande en mariage"
              description="Lors d'une randonnée au coucher du soleil dans les Pyrénées, Warren a demandé Tiffany en mariage au sommet d'une montagne. Elle a dit oui sans hésiter!"
              image="https://images.pexels.com/photos/1459113/pexels-photo-1459113.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
            
            <TimelineItem 
              date="15 Juin 2025"
              title="Notre mariage"
              description="Et maintenant, nous sommes heureux de célébrer notre amour avec vous, nos proches, dans une journée qui promet d'être inoubliable."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotreHistoire;