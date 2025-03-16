import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import QRScanner from './Options/QRScanner';

export const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [showScanner, setShowScanner] = useState<boolean>(false);
  
  const handleScanClick = (): void => {
    setShowScanner(true);
  };

  const handleScanSuccess = (scannedUrl: string): void => {
    setShowScanner(false);
    // Validate URL before navigation
    try {
      const url = new URL(scannedUrl);
      console.log(url);
      // You can add additional validation here if needed
      
      // Navigate to the scanned URL
      window.location.href = scannedUrl;
    } catch (error) {
      console.warn(error);
      alert("Invalid QR code. Please try again.");
    }
  };

  const handleCloseScanner = (): void => {
    setShowScanner(false);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image with mobile-optimized loading */}
      <img 
        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
        alt="Industrial Machinery"
        className="absolute w-full h-full object-cover opacity-50"
        loading="eager"
      />
      {/* Improved gradient for better text readability on mobile */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50"></div>
      
      {/* Content container with proper mobile padding */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
        {/* Responsive typography with proper line-height for small screens */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-valorant-light mb-4 sm:mb-6 uppercase tracking-tighter leading-tight">
          Next Level<br/>
          <span className="text-valorant-red">Industrial</span><br/>
          <span className="sm:inline">Maintenance</span>
        </h1>
        
        {/* Description with improved readability on small screens */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-xs sm:max-w-lg md:max-w-2xl mb-6 sm:mb-8">
          Precision maintenance solutions powered by augmented reality technology for the modern industrial age
        </p>
        
        {/* Button container with improved spacing on mobile */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <button 
            className="bg-valorant-red hover:bg-red-700 text-white px-5 sm:px-8 py-3 sm:py-4 rounded flex items-center justify-center gap-2 transition-all text-base sm:text-lg font-medium"
            onClick={() => navigate('/machines')}
          >
            Get Started
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button 
            className="border-2 border-valorant-light hover:bg-valorant-light hover:text-valorant-black text-valorant-light px-5 sm:px-8 py-2.5 sm:py-3.5 rounded flex items-center justify-center gap-2 transition-all text-base sm:text-lg font-medium"
            onClick={handleScanClick}
          >
            Scan Now
          </button> 
        </div>
      </div>
      
      {/* Scroll indicator with better mobile positioning */}
      {/* <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-valorant-light" />
      </div> */}
      
      {/* QR Scanner component */}
      {showScanner && (
        <QRScanner 
          onClose={handleCloseScanner}
          onScanSuccess={handleScanSuccess}
        />
      )}
    </div>
  );
};

export default Hero;