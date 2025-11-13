import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main className="main-content">
        <section className="hero-section">
          <h1>Tu NEGOCIO no necesita más tecnología. Necesita resultados con IA.</h1>
        </section>
        <section className="how-we-do-it-section">
          <h2>Te brindamos soluciones listas para usar.</h2>
          <div className="steps">
            <div className="step">
              <span className="step-icon">💬</span>
              <h3>Nos contás tu problema</h3>
              <p>En 5 minutos: qué necesitás, para quién, cuál es el objetivo.</p>
            </div>
            <div className="step">
              <span className="step-icon">⚡</span>
              <h3>Te entregamos la solución lo mas rapido posible</h3>
              <p>App, landing, video con avatar, agente IA… listo para implementar.</p>
            </div>
            <div className="step">
              <span className="step-icon">✅</span>
              <h3>Lo ajustamos hasta que funcione</h3>
              <p>Soporte post-entrega, métricas, mejoras continuas.</p>
            </div>
          </div>
        </section>
        <section className="services-section">
          <div className="service-item">
            <span className="service-icon">🎥</span>
            <h3>Videos con avatares</h3>
            <p>Para comunicar tu marca con rostro humano.</p>
            <Link to="/videos-con-avatares">Ver más</Link>
          </div>
          <div className="service-item">
            <span className="service-icon">🖥️</span>
            <h3>Apps en 24h</h3>
            <p>Automatizá procesos, validá ideas, generá leads.</p>
            <Link to="/apps-en-24h">Ver más</Link>
          </div>
          <div className="service-item">
            <span className="service-icon">📢</span>
            <h3>Campañas en 48h</h3>
            <p>Promociones, lanzamientos, eventos — listos rápido.</p>
            <Link to="/campañas-en-48h">Ver más</Link>
          </div>
          <div className="service-item">
            <span className="service-icon">📊</span>
            <h3>Producción de contenido</h3>
            <p>De la idea al post, al video, al email — todo en un flujo.</p>
            <Link to="/produccion-de-contenido">Ver más</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
