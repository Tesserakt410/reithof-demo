import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WirUeberUns from './pages/WirUeberUns';
import Aktuelles from './pages/Aktuelles';
import Reitunterricht from './pages/Reitunterricht';
import Reitanlagen from './pages/Reitanlagen';
import Boxen from './pages/Boxen';
import Beritt from './pages/Beritt';
import Pferdeverkauf from './pages/Pferdeverkauf';
import Reitstube from './pages/Reitstube';
import Oeffnungszeiten from './pages/Oeffnungszeiten';
import Anfahrt from './pages/Anfahrt';
import Anfaenger from './pages/Anfaenger';
import Reitclub from './pages/Reitclub';
import Galerie from './pages/Galerie';
import Empfehlungen from './pages/Empfehlungen';
import Impressum from './pages/Impressum';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="wir-ueber-uns" element={<WirUeberUns />} />
          <Route path="aktuelles" element={<Aktuelles />} />
          <Route path="reitunterricht" element={<Reitunterricht />} />
          <Route path="reitanlagen" element={<Reitanlagen />} />
          <Route path="boxen" element={<Boxen />} />
          <Route path="beritt" element={<Beritt />} />
          <Route path="pferdeverkauf" element={<Pferdeverkauf />} />
          <Route path="reitstube" element={<Reitstube />} />
          <Route path="oeffnungszeiten" element={<Oeffnungszeiten />} />
          <Route path="anfahrt" element={<Anfahrt />} />
          <Route path="anfaenger" element={<Anfaenger />} />
          <Route path="reitclub" element={<Reitclub />} />
          <Route path="galerie" element={<Galerie />} />
          <Route path="empfehlungen" element={<Empfehlungen />} />
          <Route path="impressum" element={<Impressum />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
