import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, ChevronLeft, ChevronRight, HardHat } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type PopupPosition = {
  x: number;
  y: number;
};

type StatusBar = {
  status: 'Operational' | 'Issues' | 'Degraded' | 'Down';
  date: Date;
  bgColor: string;
};

type System = {
  name: string;
  uptime: string;
  status: string;
  bars: StatusBar[];
};

function History() {
  const [selectedBar, setSelectedBar] = useState<null | {
    date: string;
    status: string;
    time: string;
    position: PopupPosition;
  }>(null);

    const navigate = useNavigate();
    
  const [systems, setSystems] = useState<System[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [incidents, setIncidents] = useState<Set<string>>(new Set());
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate number of bars based on screen width
  const getNumberOfBars = () => {
    if (windowWidth < 640) return 30; // Mobile
    if (windowWidth < 768) return 45; // Tablet
    return 90; // Desktop
  };

  // Generate random status bars for a system
  const generateStatusBars = (reliability: number): StatusBar[] => {
    return Array(getNumberOfBars()).fill(null).map((_, i) => {
      const random = Math.random() * (1 + (1 - reliability));
      const date = new Date();
      date.setDate(date.getDate() - (getNumberOfBars() - i));
      
      let status: 'Operational' | 'Issues' | 'Degraded' | 'Down';
      let bgColor: string;
      
      if (random > 0.98) {
        status = 'Down';
        bgColor = 'bg-red-500';
      } else if (random > 0.95) {
        status = 'Degraded';
        bgColor = 'bg-yellow-400';
      } else if (random > 0.92) {
        status = 'Issues';
        bgColor = 'bg-orange-400';
      } else {
        status = 'Operational';
        bgColor = 'bg-emerald-400';
      }

      return { status, date, bgColor };
    });
  };

  useEffect(() => {
    const initialSystems: System[] = [
      { name: 'Turbine', uptime: '99.96%', status: 'operational', bars: generateStatusBars(0.9996) },
      { name: 'Compressor', uptime: '99.82%', status: 'operational', bars: generateStatusBars(0.9982) },
      { name: 'Pump', uptime: '100%', status: 'operational', bars: generateStatusBars(1) },
    //   { name: 'CDN', uptime: '99.99%', status: 'operational', bars: generateStatusBars(0.9999) },
    ];
    setSystems(initialSystems);

    const newIncidents = new Set<string>();
    for (let i = 1; i <= 31; i++) {
      if (Math.random() > 0.8) {
        newIncidents.add(i.toString());
      }
    }
    setIncidents(newIncidents);
  }, [windowWidth]); // Regenerate when window width changes

  const handleBarClick = (bar: StatusBar, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offset = 10;
    
    // Adjust popup position based on screen width
    const position = {
      x: windowWidth < 640 ? Math.min(rect.right + offset, window.innerWidth - 200) : rect.right + offset,
      y: rect.top,
    };
    
    setSelectedBar({
      date: bar.date.toLocaleDateString(),
      status: bar.status,
      time: bar.date.toLocaleTimeString(),
      position,
    });
  };

  const prevMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1));
  };

  const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const daysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1
  ).getDay();

  const startOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-8">
        <div className="container mx-auto px-4 py-6">
        <button
          onClick={() => navigate('/maintenance-view')}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
        </div>

      <div className="max-w-4xl mx-auto">
        {/* Illustration Header */}
        <div className="relative h-48 mb-8 bg-gray-800 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
            alt="Data Center"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center">
              <HardHat className="w-16 h-16 mx-auto mb-4 text-blue-400" />
              <h1 className="text-3xl font-bold mb-2">System Status</h1>
              <p className="text-gray-400">Real-time monitoring of all services</p>
            </div>
          </div>
        </div>

        {/* Status Overview */}
        <div className="bg-gray-800 rounded-xl p-4 sm:p-6 mb-8">
          <div className="flex items-center space-x-2 text-lg mb-4">
            <CheckCircle className="text-emerald-400" />
            <span>All systems are fully operational</span>
          </div>
          <p className="text-gray-400">
            No incidents reported in the last 24 hours.
          </p>
        </div>

        {/* System Status */}
        <div className="bg-gray-800 rounded-xl p-4 sm:p-6 mb-8 relative">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-2 sm:space-y-0">
            <h2 className="text-xl font-semibold">System status</h2>
            <div className="flex items-center space-x-2 text-gray-400">
              <ChevronLeft className="w-5 h-5 cursor-pointer" />
              <span className="text-sm sm:text-base">Dec 2024 - Mar 2025</span>
              <ChevronRight className="w-5 h-5 cursor-pointer" />
            </div>
          </div>

          <div className="space-y-8">
            {systems.map((system, systemIndex) => (
              <div key={systemIndex}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-emerald-400 w-5 h-5" />
                    <span className="text-sm sm:text-base">{system.name}</span>
                  </div>
                  <span className="text-gray-400 text-sm sm:text-base">{system.uptime} uptime</span>
                </div>
                <div className="flex">
                  {system.bars.map((bar, barIndex) => (
                    <div 
                      key={barIndex}
                      onClick={(e) => handleBarClick(bar, e)}
                      className={`h-8 w-1.5 mx-px ${bar.bgColor} cursor-pointer hover:opacity-75 transition-opacity rounded-full`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {selectedBar && (
            <div 
              style={{
                position: 'absolute',
                left: `${selectedBar.position.x}px`,
                top: `${selectedBar.position.y}px`,
              }}
              className="bg-gray-700 p-4 rounded-xl shadow-lg z-10 border border-gray-600"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">Status Details</h3>
                  <button 
                    onClick={() => setSelectedBar(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    ×
                  </button>
                </div>
                <p>Date: {selectedBar.date}</p>
                <p>Time: {selectedBar.time}</p>
                <p className={`font-semibold ${
                  selectedBar.status === 'Operational' ? 'text-emerald-400' :
                  selectedBar.status === 'Down' ? 'text-red-500' :
                  selectedBar.status === 'Degraded' ? 'text-yellow-400' :
                  'text-orange-400'
                }`}>
                  Status: {selectedBar.status}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Calendar */}
        <div className="bg-gray-800 rounded-xl p-4 sm:p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Calendar</h2>
            <div className="flex items-center space-x-2 text-gray-400">
              <ChevronLeft 
                className="w-5 h-5 cursor-pointer hover:text-white" 
                onClick={prevMonth}
              />
              <span className="text-sm sm:text-base">
                {selectedDate.toLocaleString('default', { month: 'long' })} {selectedDate.getFullYear()}
              </span>
              <ChevronRight 
                className="w-5 h-5 cursor-pointer hover:text-white" 
                onClick={nextMonth}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-1 sm:gap-2">
            {daysOfWeek.map(day => (
              <div key={day} className="text-center text-gray-400 py-2 text-sm sm:text-base">
                {day}
              </div>
            ))}
            
            {Array.from({ length: startOffset }).map((_, index) => (
              <div key={`empty-${index}`} className="text-center py-2" />
            ))}
            
            {Array.from({ length: daysInMonth }).map((_, index) => {
              const day = index + 1;
              const isToday = day === new Date().getDate() && 
                            selectedDate.getMonth() === new Date().getMonth() &&
                            selectedDate.getFullYear() === new Date().getFullYear();
              const hasIncident = incidents.has(day.toString());
              
              return (
                <div
                  key={day}
                  className={`
                    text-center py-2 rounded-lg cursor-pointer text-sm sm:text-base
                    ${isToday ? 'border border-gray-500' : ''}
                    ${hasIncident ? 'bg-yellow-400/20 hover:bg-yellow-400/30' : 'hover:bg-gray-700'}
                    transition-colors
                  `}
                  onClick={() => {
                    if (hasIncident) {
                      alert(`Incident reported on ${selectedDate.toLocaleString('default', { month: 'long' })} ${day}, ${selectedDate.getFullYear()}`);
                    }
                  }}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        {/* <div className="text-center text-gray-400 text-sm">
          <p>Powered by Your Company Name</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-white">Privacy policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white">Terms of service</a>
          </div>
        </div> */}
      </div> 
    </div>
  );
}

export default History;

