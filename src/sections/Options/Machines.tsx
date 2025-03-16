// import { useNavigate } from 'react-router-dom';
// import { ArrowLeft, Settings, AlertTriangle, Activity } from 'lucide-react';
// import m1 from '../../utils/m1.jpeg';
// import m2 from '../../utils/m2.jpg';
// import m3 from '../../utils/m3.png';

// const machines = [
//   {
//     id: 1,
//     name: 'Hydrolic Pump',
//     status: 'Maintenance Due',
//     lastMaintenance: '2024-02-15',
//     image: m1
//   },
//   {
//     id: 2,
//     name: 'Industrial Robot Arm',
//     status: 'Needs Attention',
//     lastMaintenance: '2024-01-20',
//     image: m2
//   },
//   {
//     id: 3,
//     name: 'CNC Milling Machine',
//     status: 'Operational',
//     lastMaintenance: '2024-03-01',
//     image: m3
//   }
// ];

// const Machines = () => {
//   const navigate = useNavigate();

//   const getStatusIcon = (status: string) => {
//     switch (status) {
//       case 'Operational':
//         return <Activity className="w-5 h-5 text-green-500" />;
//       case 'Needs Attention':
//         return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
//       case 'Maintenance Due':
//         return <Settings className="w-5 h-5 text-red-500" />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       <div className="container mx-auto px-6 py-8">
//         <button
//           onClick={() => navigate('/')}
//           className="flex items-center gap-2 text-gray-400 hover:text-white mb-8"
//         >
//           <ArrowLeft className="w-5 h-5" />
//           Back to Home
//         </button>

//         <h2 className="text-3xl font-bold mb-8">Select Machine</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {machines.map((machine) => (
//             <div
//               key={machine.id}
//               // onClick={() => navigate(`/maintenance/${machine.id}`)}
//               // onClick={() => navigate('/maintenance-view')}
//               onClick={() => navigate('/maintenance-view', { state: { machineId: machine.id } })}

//               className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all"
//             >
//               <img
//                 src={machine.image}
//                 alt={machine.name}
//                 className="w-full h-48 object-cover aspect-video"
//                 onError={(e) => {
//                   console.error("Image failed to load:", machine.image);
//                   (e.target as HTMLImageElement).src = "https://via.placeholder.com/300";
//                 }}
//               />
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-xl font-semibold">{machine.name}</h3>
//                   {getStatusIcon(machine.status)}
//                 </div>
//                 <div className="text-gray-400">
//                   <p>Status: {machine.status}</p>
//                   <p>Last Maintenance: {machine.lastMaintenance}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Machines;




import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Settings, AlertTriangle, Activity } from 'lucide-react';
import m1 from '../../utils/m1.jpeg';
import m2 from '../../utils/m2.jpg';
import m3 from '../../utils/m3.png';

const machines = [
  {
    id: 1,
    name: 'Hydraulic Pump',
    status: 'Down',
    lastMaintenance: '2024-02-15',
    image: m1
  },
  {
    id: 2,
    name: 'Industrial Robot Arm',
    status: 'Needs Attention',
    lastMaintenance: '2024-01-20',
    image: m2
  },
  {
    id: 3,
    name: 'CNC Milling Machine',
    status: 'Operational',
    lastMaintenance: '2024-03-01',
    image: m3
  }
];

const Machines = () => {
  const navigate = useNavigate();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Operational':
        return <Activity className="w-5 h-5 text-green-500" />;
      case 'Needs Attention':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'Down':
        return <Settings className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        <h2 className="text-3xl font-bold mb-8">Select Machine</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {machines.map((machine) => (
            <div
              key={machine.id}
              onClick={() => navigate('/maintenance-view', { state: { machineId: machine.id } })}
              className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all"
            >
              <img
                src={machine.image}
                alt={machine.name}
                className="w-full h-48 object-cover aspect-video"
                onError={(e) => {
                  console.error("Image failed to load:", machine.image);
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/300";
                }}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{machine.name}</h3>
                  {getStatusIcon(machine.status)}
                </div>
                <div className="text-gray-400">
                  <p>Status: {machine.status}</p>
                  <p>Last Maintenance: {machine.lastMaintenance}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Machines;
