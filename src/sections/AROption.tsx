// import React, { useState } from 'react';
import { LucideTimer, Atom, BarChart4Icon, BookOpen ,LucidePhoneCall} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// import QRScanner from './Options/QRScanner';

export const AROption: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    
    <div className="bg-valorant-grey py-12 sm:py-20">
      <div className="container mx-auto px-4 text-center">
        
        
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-10">
        Explore Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Scan Now */}
          {/* <div
            className="bg-valorant-black p-5 sm:p-6 rounded-lg text-center hover:scale-105 transition-all cursor-pointer"
            onClick={handleScanClick}
          >
            <Scan className="w-10 sm:w-14 h-10 sm:h-14 text-valorant-red mx-auto mb-3" />
            <h3 className="text-lg sm:text-xl font-bold mb-1">Scan Now</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Instant equipment scanning and analysis
            </p>
          </div>  */}

          {/* Predictive Scan */}
          <div className="bg-valorant-black p-5 sm:p-6 rounded-lg text-center hover:scale-105 transition-all cursor-pointer " onClick={() => navigate('/dashboard')}>
            <BarChart4Icon className="w-10 sm:w-14 h-10 sm:h-14 text-valorant-red mx-auto mb-3"  />
            <h3 className="text-lg sm:text-xl font-bold mb-1">Dashboard</h3>
            <p className="text-gray-400 text-sm sm:text-base">
            Monitor machine status and performance
            </p>
            
          </div>

          {/* 3D Dissection */}
          <div className="bg-valorant-black p-5 sm:p-6 rounded-lg text-center hover:scale-105 transition-all cursor-pointer" onClick={() => window.open("https://webxrregen.netlify.app/", "_blank")}>
            <Atom className="w-10 sm:w-14 h-10 sm:h-14 text-valorant-red mx-auto mb-3" />
            <h3 className="text-lg sm:text-xl font-bold mb-1">AR/3D View</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Detailed component visualization
            </p>
          </div>

          {/* AR Instructions */}
          <div
            className="bg-valorant-black p-5 sm:p-6 rounded-lg text-center hover:scale-105 transition-all cursor-pointer"
            onClick={() => navigate("/Instructions")}
          >
            <BookOpen className="w-10 sm:w-14 h-10 sm:h-14 text-valorant-red mx-auto mb-3" />
            <h3 className="text-lg sm:text-xl font-bold mb-1">AR Instructions</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Step-by-step maintenance guides
            </p>
          </div>
          
          <div
            className="bg-valorant-black p-5 sm:p-6 rounded-lg text-center hover:scale-105 transition-all cursor-pointer"
          >
            <LucidePhoneCall className="w-10 sm:w-14 h-10 sm:h-14 text-valorant-red mx-auto mb-3" />
            <h3 className="text-lg sm:text-xl font-bold mb-1">Live Expert Support</h3>
            <p className="text-gray-400 text-sm sm:text-base">
            Instant video assistance from experts
            </p>
          </div>

          {/* History */}
          <div
            className="bg-valorant-black p-5 sm:p-6 rounded-lg text-center hover:scale-105 transition-all cursor-pointer"
            onClick={() => navigate("/history")}
          >
            <LucideTimer className="w-10 sm:w-14 h-10 sm:h-14 text-valorant-red mx-auto mb-3" />
            <h3 className="text-lg sm:text-xl font-bold mb-1">Fault History</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Fault Logging and Analysis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AROption;

