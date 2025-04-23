import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Set wedding date (year, month [0-11], day, hour, minute)
  const weddingDate = new Date(2026, 5, 6, 14, 0); // June 6, 2026, 14:00
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = weddingDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    
    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div 
      className={`${
        isExpanded ? 'w-auto p-4' : 'w-14 h-14 p-2'
      } bg-white rounded-lg shadow-lg transition-all duration-300 cursor-pointer`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {isExpanded ? (
        <div className="text-center">
          <h4 className="font-heading text-sm text-sage-800 mb-2">Jour J</h4>
          <div className="flex space-x-3 text-sm">
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold text-gold-600">{timeLeft.days}</span>
              <span className="text-xs">jours</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold text-gold-600">{timeLeft.hours}</span>
              <span className="text-xs">heures</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold text-gold-600">{timeLeft.minutes}</span>
              <span className="text-xs">min</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold text-gold-600">{timeLeft.seconds}</span>
              <span className="text-xs">sec</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center text-sm text-sage-800 font-heading">
          J-{timeLeft.days}
        </div>
      )}
    </div>
  );
};

export default Countdown;