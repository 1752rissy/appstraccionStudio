import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import VideoAvatars from './components/VideoAvatars';
import Apps24h from './components/Apps24h';
import Campañas48h from './components/Campañas48h';
import ProduccionContenido from './components/ProduccionContenido';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos-con-avatares" element={<VideoAvatars />} />
          <Route path="/apps-en-24h" element={<Apps24h />} />
          <Route path="/campañas-en-48h" element={<Campañas48h />} />
          <Route path="/produccion-de-contenido" element={<ProduccionContenido />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
