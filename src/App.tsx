import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from './sections/Hero';
import { MaintenanceView } from "./sections/Options/MaintenanceView";
import Machines from './sections/Options/Machines';
import DashBoard from "./sections/Options/DashBoard";
import Instructions from "./sections/Options/Instructions";
import History from "./sections/Options/History";

function App() {
    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
              </>
            }
          />
          <Route path="/" element={<Hero />} />
          <Route path="/machines" element={<Machines />} />
          <Route path="/maintenance-view" element={<MaintenanceView />} />
          <Route path="/instructions" element={<Instructions/>} />
          <Route path="/dashboard" element={<DashBoard/>} />
          <Route path="/history" element={<History />} />
          
        </Routes>
      </Router>
    );
}

export default App;