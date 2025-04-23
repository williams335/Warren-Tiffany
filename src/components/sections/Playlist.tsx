import React, { useState } from 'react';
import { Music, Check } from 'lucide-react';

const Playlist: React.FC = () => {
  const [songSuggestion, setSongSuggestion] = useState('');
  const [artistSuggestion, setArtistSuggestion] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ song: songSuggestion, artist: artistSuggestion });
    setSongSuggestion('');
    setArtistSuggestion('');
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };
  
  return (
    <div className="section-container fade-in">
      <h2 className="section-title">Playlist & Ambiance</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4">La playlist collaborative</h3>
              <p className="mb-6 text-sage-700">
                Nous avons créé une playlist Spotify pour le jour J. N'hésitez pas à l'écouter, 
                et à nous suggérer des morceaux que vous aimeriez entendre pendant la soirée !
              </p>
              
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://open.spotify.com/embed/playlist/5xu1EWPbvUHE7eldN6e2sO?utm_source=generator&theme=0" 
                  width="100%" 
                  height="352" 
                  frameBorder="0" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  title="Playlist Spotify du mariage"
                ></iframe>
              </div>
            </div>
          </div>
          
          <div>
            <div className="card p-6">
              <h3 className="text-xl font-medium mb-4">Suggérez une chanson</h3>
              <p className="mb-4 text-sage-700">
                Quelle chanson vous ferait plaisir d'entendre lors de notre soirée ? 
                Partagez vos suggestions pour nous aider à créer l'ambiance parfaite !
              </p>
              
              {isSubmitted ? (
                <div className="bg-sage-50 p-4 rounded-lg flex items-center mb-4">
                  <Check className="w-5 h-5 text-sage-600 mr-2" />
                  <span>Merci pour votre suggestion !</span>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="songSuggestion" className="form-label">Titre de la chanson <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="songSuggestion"
                      value={songSuggestion}
                      onChange={(e) => setSongSuggestion(e.target.value)}
                      required
                      placeholder="Ex: Can't Help Falling in Love"
                      className="form-input"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="artistSuggestion" className="form-label">Artiste <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="artistSuggestion"
                      value={artistSuggestion}
                      onChange={(e) => setArtistSuggestion(e.target.value)}
                      required
                      placeholder="Ex: Elvis Presley"
                      className="form-input"
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary w-full"
                    disabled={!songSuggestion || !artistSuggestion}
                  >
                    <Music className="w-4 h-4 mr-2" />
                    Ajouter à la playlist
                  </button>
                </div>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-sage-600">
                  Vous pouvez également ajouter directement vos chansons à notre playlist Spotify collaborative.
                </p>
                <a 
                  href="https://open.spotify.com/playlist/5xu1EWPbvUHE7eldN6e2sO?si=uOHHo_VnRWSpMSOTayOy9Q" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sage-700 hover:text-sage-900 underline"
                >
                  Ouvrir dans Spotify
                </a>
              </div>
            </div>
            
            <div className="mt-8 bg-sage-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Ambiance musicale prévue</h3>
              <p className="text-sm text-sage-700 mb-4">
                Voici un aperçu du programme musical que nous avons prévu pour différents moments de la journée :
              </p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gold-600">Cérémonie</h4>
                  <p className="text-sm">Musique acoustique douce et morceaux classiques</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gold-600">Cocktail</h4>
                  <p className="text-sm">Jazz et bossa nova pour une ambiance élégante et détendue</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gold-600">Dîner</h4>
                  <p className="text-sm">Pop acoustique et chansons françaises</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gold-600">Soirée dansante</h4>
                  <p className="text-sm">Mix de hits des années 80 à aujourd'hui, avec vos suggestions !</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;