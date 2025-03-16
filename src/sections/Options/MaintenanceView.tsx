import { AROption } from "../AROption";
import { Footer } from "../Footer";
import { ArrowLeft, Activity, AlertTriangle, Settings } from "lucide-react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import m1 from '../../utils/m1.jpeg';
import m2 from '../../utils/m2.jpg';
import m3 from '../../utils/m3.png';

type Machine = {
    id: number;
    name: string;
    status: string;
    lastMaintenance: string;
    image: string;
    description: string;
    specs: {
      flowRate?: string;
      pressure?: string;
      efficiency?: string;
      powerInput?: string;
      reach?: string;
      payload?: string;
      repeatability?: string;
      axes?: string;
      workArea?: string;
      spindleSpeed?: string;
      toolPositions?: string;
      accuracy?: string;
    };
    nextMaintenance: string;
  };

const machinesData = [
  {
    id: 1,
    name: 'Hydraulic Pump',
    status: 'Down',
    lastMaintenance: '2024-02-15',
    image: m1,
    description: "High-performance hydraulic pump system designed for industrial applications. Features pressure regulation and flow control systems with automatic shutdown protection.",
    specs: {
      flowRate: "120 L/min",
      pressure: "350 bar",
      efficiency: "87%",
      powerInput: "22 kW"
    },
    nextMaintenance: "2025-03-25"
  },
  {
    id: 2,
    name: 'Industrial Robot Arm',
    status: 'Needs Attention',
    lastMaintenance: '2024-01-20',
    image: m2,
    description: "6-axis industrial robot arm with precision movement capability and programmable path control. Designed for manufacturing and assembly line operations.",
    specs: {
      reach: "1850 mm",
      payload: "20 kg",
      repeatability: "±0.05 mm",
      axes: "6"
    },
    nextMaintenance: "2025-03-20"
  },
  {
    id: 3,
    name: 'CNC Milling Machine',
    status: 'Operational',
    lastMaintenance: '2024-03-01',
    image: m3,
    description: "Computer numerical control milling machine with multi-axis capability for precision machining of complex parts. Equipped with automatic tool changer and coolant system.",
    specs: {
      workArea: "800×500×450 mm",
      spindleSpeed: "18,000 RPM",
      toolPositions: "24",
      accuracy: "±0.01 mm"
    },
    nextMaintenance: "2025-04-15"
  }
];

function MaintenanceView() {
  const navigate = useNavigate();
  const location = useLocation();
  const { machineId } = location.state || {}; // Get machineId from location state
  const [machine, setMachine] = useState<Machine|null>(null);

  useEffect(() => {
    if (machineId) {
      const selectedMachine = machinesData.find(m => m.id === machineId);
      setMachine(selectedMachine || null);
    } else if (machinesData.length > 0) {
      // If no machineId provided, default to first machine
      setMachine(machinesData[0]);
    }
  }, [machineId]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Operational':
        return <Activity className="w-6 h-6 text-green-500" />;
      case 'Needs Attention':
        return <AlertTriangle className="w-6 h-6 text-yellow-500" />;
      case 'Down':
        return <Settings className="w-6 h-6 text-valorant-red" />;
      default:
        return null;
    }
  };


  if (!machine) {
    return (
      <div className="bg-valorant-grey min-h-screen flex items-center justify-center text-white">
        <div className="text-center p-8 bg-valorant-black rounded-lg shadow-lg">
          <AlertTriangle className="w-12 h-12 text-valorant-red mx-auto mb-4" />
          <p className="text-xl">No machine data available.</p>
          <button 
            onClick={() => navigate('/machines')} 
            className="mt-6 px-4 py-2 bg-valorant-red text-white rounded hover:bg-red-700 transition-colors"
          >
            Return to Machines
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-valorant-grey min-h-screen py-8 px-3 text-white">
      <div className="container mx-auto max-w-6xl">
        <button 
          onClick={() => navigate('/machines')} 
          className="flex items-center gap-2 text-gray-400 hover:text-valorant-red transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Machines
        </button>

        <div className="bg-valorant-black rounded-lg overflow-hidden shadow-2xl mb-12">
          {/* Image section with 3D-like effect */}
          <div className="relative">
            <div className="overflow-hidden">
              <img 
                src={machine.image} 
                alt={machine.name} 
                className="w-full h-72 object-cover transform hover:scale-105 transition-transform duration-700" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/1200x400";
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-valorant-black via-transparent to-transparent"></div>
            
            {/* Status badge positioned on the image */}
            <div className="absolute bottom-4 right-4">
              <div className={`flex items-center gap-2 px-4 py-2 rounded border`}>
                {getStatusIcon(machine.status)}
                <span className="font-medium">{machine.status}</span>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
              <div>
                <h1 className="text-4xl font-bold mb-2">{machine.name}</h1>
                <p className="text-gray-400 max-w-3xl">{machine.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Specifications Panel */}
              <div className="bg-valorant-grey rounded-lg p-6 shadow-lg transform hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold border-b border-gray-700 pb-2 mb-4 flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-valorant-red" />
                  Technical Specifications
                </h3>
                
                {machine.specs && Object.entries(machine.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-3 border-b border-gray-700 last:border-0">
                    <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>

              {/* Maintenance Panel */}
              <div className="bg-valorant-grey rounded-lg p-6 shadow-lg transform hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold border-b border-gray-700 pb-2 mb-4 flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-valorant-red" />
                  Maintenance Information
                </h3>
                
                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-gray-400">Status</span>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(machine.status)}
                    <span>{machine.status}</span>
                  </div>
                </div>
                
                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-gray-400">Last Maintenance</span>
                  <span className="font-medium">{machine.lastMaintenance}</span>
                </div>
                
                <div className="flex justify-between py-3">
                  <span className="text-gray-400">Next Scheduled</span>
                  <span className={`font-medium ${
                    machine.status === 'Maintenance Due' ? 'text-valorant-red' : ''
                  }`}>{machine.nextMaintenance}</span>
                </div>
                
                <div className="mt-6">
                  <button className="w-full py-3 bg-valorant-red text-white rounded font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                    <Settings className="w-5 h-5" />
                    Schedule Maintenance
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AROption />
      <Footer />
    </div>
  );
}

export { MaintenanceView };