import { TurbineScene } from '../components/TurbineScene';
export const Model = () => (
<div className="bg-valorant-black py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-8 sm:mb-12">Interactive Turbine Model</h2>
          <div className="max-w-4xl mx-auto">
            <TurbineScene />
          </div>
        </div>
      </div>
);