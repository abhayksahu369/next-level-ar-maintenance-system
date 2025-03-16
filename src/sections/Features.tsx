import { Shield, Cog, Wrench } from 'lucide-react';

export const Features = () => (
<div className="bg-valorant-grey py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-valorant-black p-6 sm:p-8 rounded-lg">
              <Shield className="w-12 h-12 text-valorant-red mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Advanced Protection</h3>
              <p className="text-gray-400">State-of-the-art monitoring systems to protect your valuable industrial assets</p>
            </div>
            <div className="bg-valorant-black p-6 sm:p-8 rounded-lg">
              <Cog className="w-12 h-12 text-valorant-red mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Smart Automation</h3>
              <p className="text-gray-400">Automated maintenance scheduling and predictive analytics for optimal performance</p>
            </div>
            <div className="bg-valorant-black p-6 sm:p-8 rounded-lg">
              <Wrench className="w-12 h-12 text-valorant-red mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-4">AR Solutions</h3>
              <p className="text-gray-400">Cutting-edge augmented reality tools for precise maintenance procedures</p>
            </div>
          </div>
        </div>
      </div>
);

