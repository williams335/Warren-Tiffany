import React, { useState } from 'react';

interface GuestInfo {
  name: string;
  email: string;
  phone: string;
  attending: boolean;
  guestCount: number;
  dietaryRestrictions: string;
  accommodation: string;
  transport: string;
  brunch: boolean;
  message: string;
}

const Confirmation: React.FC = () => {
  const [formData, setFormData] = useState<GuestInfo>({
    name: '',
    email: '',
    phone: '',
    attending: true,
    guestCount: 1,
    dietaryRestrictions: '',
    accommodation: '',
    transport: '',
    brunch: false,
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'attending' || name === 'brunch' ? value === 'true' : 
              name === 'guestCount' ? Number(value) : value
    }));
  };
  
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value === 'true'
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe7O-yweXHXHk1qGFSYJ5t1_YgVTxVXoF3_7X5p5Q5p5Q/formResponse';
    
    try {
      const response = await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'entry.1': formData.name,
          'entry.2': formData.email,
          'entry.3': formData.phone,
          'entry.4': formData.attending ? 'Oui' : 'Non',
          'entry.5': formData.guestCount.toString(),
          'entry.6': formData.dietaryRestrictions,
          'entry.7': formData.accommodation,
          'entry.8': formData.transport,
          'entry.9': formData.brunch ? 'Oui' : 'Non',
          'entry.10': formData.message
        })
      });
      
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err) {
      setError("Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.");
      setIsSubmitting(false);
    }
  };
  
  if (isSubmitted) {
    return (
      <div className="section-container fade-in max-w-2xl mx-auto">
        <h2 className="section-title">Confirmation de présence</h2>
        
        <div className="card p-8 text-center">
          <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-medium mb-4 text-sage-800">Merci pour votre réponse!</h3>
          <p className="mb-6">
            {formData.attending 
              ? `Nous sommes ravis que vous puissiez vous joindre à nous pour cette journée spéciale.` 
              : `Nous sommes désolés que vous ne puissiez pas vous joindre à nous, mais nous apprécions votre réponse.`}
          </p>
          <p className="text-sm text-sage-600 mb-8">
            Un email de confirmation a été envoyé à {formData.email}.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="btn btn-outline"
          >
            Modifier ma réponse
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="section-container fade-in">
      <h2 className="section-title">Confirmation de présence</h2>
      
      <div className="max-w-2xl mx-auto">
        <div className="card p-6 md:p-8">
          <p className="text-center mb-8">
            Merci de nous confirmer votre présence avant le <strong>15 mars 2026</strong>.
          </p>
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="form-label">Nom et prénom <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="form-label">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="form-label">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              
              <div>
                <fieldset>
                  <legend className="form-label mb-2">Serez-vous présent(e) ? <span className="text-red-500">*</span></legend>
                  <div className="flex space-x-6">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="attending-yes"
                        name="attending"
                        value="true"
                        checked={formData.attending}
                        onChange={handleRadioChange}
                        className="h-4 w-4 text-sage-600 focus:ring-sage-500"
                      />
                      <label htmlFor="attending-yes" className="ml-2 text-sm text-sage-700">
                        Oui, je serai présent(e)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="attending-no"
                        name="attending"
                        value="false"
                        checked={!formData.attending}
                        onChange={handleRadioChange}
                        className="h-4 w-4 text-sage-600 focus:ring-sage-500"
                      />
                      <label htmlFor="attending-no" className="ml-2 text-sm text-sage-700">
                        Non, je ne pourrai pas venir
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
              
              {formData.attending && (
                <>
                  <div>
                    <label htmlFor="guestCount" className="form-label">Nombre de personnes (vous inclus) <span className="text-red-500">*</span></label>
                    <select
                      id="guestCount"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="form-input"
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="dietaryRestrictions" className="form-label">Restrictions alimentaires ou allergies</label>
                    <input
                      type="text"
                      id="dietaryRestrictions"
                      name="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={handleChange}
                      placeholder="Végétarien, sans gluten, allergies..."
                      className="form-input"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="accommodation" className="form-label">Hébergement souhaité</label>
                    <select
                      id="accommodation"
                      name="accommodation"
                      value={formData.accommodation}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Sélectionnez une option</option>
                      <option value="hotel">Hôtel</option>
                      <option value="airbnb">Airbnb</option>
                      <option value="camping">Camping</option>
                      <option value="none">Pas besoin d'hébergement</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="transport" className="form-label">Transport</label>
                    <select
                      id="transport"
                      name="transport"
                      value={formData.transport}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Sélectionnez une option</option>
                      <option value="navette">Navette</option>
                      <option value="voiture">Voiture personnelle</option>
                      <option value="covoiturage">Covoiturage</option>
                    </select>
                  </div>
                  
                  <div>
                    <fieldset>
                      <legend className="form-label mb-2">Brunch du lendemain</legend>
                      <div className="flex space-x-6">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="brunch-yes"
                            name="brunch"
                            value="true"
                            checked={formData.brunch}
                            onChange={handleRadioChange}
                            className="h-4 w-4 text-sage-600 focus:ring-sage-500"
                          />
                          <label htmlFor="brunch-yes" className="ml-2 text-sm text-sage-700">
                            Oui, je serai présent(e)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="brunch-no"
                            name="brunch"
                            value="false"
                            checked={!formData.brunch}
                            onChange={handleRadioChange}
                            className="h-4 w-4 text-sage-600 focus:ring-sage-500"
                          />
                          <label htmlFor="brunch-no" className="ml-2 text-sm text-sage-700">
                            Non, je ne pourrai pas venir
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </>
              )}
              
              <div>
                <label htmlFor="message" className="form-label">Message (facultatif)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Partagez une pensée ou une question..."
                  className="form-input"
                ></textarea>
              </div>
              
              <div className="text-center pt-4">
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : 'Confirmer ma présence'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;