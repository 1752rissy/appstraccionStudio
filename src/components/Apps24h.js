import React from 'react';
import './Apps24h.css';
import HomeButton from './HomeButton';


const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle', marginRight: '8px' }}>
    <path d="M12.03 2C6.53 2 2.1 6.43 2.1 11.93c0 1.77.46 3.48 1.31 4.99L2 22l5.25-1.38c1.45.79 3.08 1.21 4.78 1.21h.01c5.5 0 9.93-4.43 9.93-9.93c0-5.5-4.43-9.93-9.93-9.93zM17.2 15.31c-.14-.28-.82-1.36-1.36-1.64c-.54-.28-1.02-.39-1.2-.39c-.18 0-.36.05-.54.28c-.18.23-.68.86-.84 1.04c-.16.18-.31.2-.49.02c-.18-.18-1.52-.56-2.89-1.77c-1.07-.95-1.79-2.13-2.08-2.49c-.29-.36-.02-.56.16-.74c.16-.16.36-.42.54-.6c.18-.18.23-.31.31-.54c.08-.23.04-.42-.02-.59c-.06-.17-.54-1.3-.74-1.79c-.2-.48-.4-.42-.54-.42h-.4c-.18 0-.45.21-.68.45c-.23.24-.86.84-.86 2.05c0 1.21.88 2.37 1.01 2.55c.13.18 1.74 2.79 4.22 3.72c.59.23 1.05.36 1.41.46c.59.16 1.13.14 1.54.08c.45-.06 1.36-.56 1.55-1.1c.19-.54.19-1.02.13-1.1c-.06-.08-.23-.14-.4-.28z" fill="currentColor"/>
  </svg>
);

const Apps24h = () => {
  return (
    <div className="apps-24h-page">
      <div className="intro-section section-container">
        <h1 className="main-headline">¿Necesitás tu aplicacion, pagina web, MVP o micro-app con IA… y no podés esperar 3 meses?</h1>
        <p className="sub-headline">Lo construimos. Lo integramos. Lo entregamos en 24 horas!!</p>
      </div>

      <div className="solution-for-section section-container">
        <h2 className="section-title">🎯 ¿Para quién es esta solución?</h2>
        <div className="solution-cards">
          <div className="solution-card">
            <h3>Emprendedores</h3>
            <p>Validar e implementar una idea de forma rapida y escalable, sin invertir en programadores o una consultora en sistemas. Tene tu aplicacion o tu pagina funcional segun tus necesidades.</p>
          </div>
          <div className="solution-card">
            <h3>PYMES</h3>
            <p>Automatiza los procesos rutinarios o escala tu web actual con nuestro desarrollo. Ofrecemos una App Web ligera, fluida. lista para usar desde el móvil o el equipo que necesites.</p>
          </div>
          <div className="solution-card">
            <h3>Agencias</h3>
            <p>Ofrece un “plus tecnológico” a tus clientes sin tener desarrolladores internos. Explotamos el proceso que necesites con IA para ganarle a tus competidores.</p>
          </div>
          <div className="solution-card">
            <h3>Equipos de ventas</h3>
            <p>Generamos propuestas personalizadas al instante. Web app que toma los datos de entrada que necesitas, incluyendo documentos en pdf, imagenes y genera los resultados que nos pedis.</p>
          </div>
        </div>
      </div>

      <div className="how-it-works-section section-container">
        <h2 className="section-title">⚡ ¿Cómo es posible en 24h?</h2>
        <p className="workflow-intro">Nuestro flujo:</p>
        <ul className="workflow-list">
          <li>Vos describís el problema (Te proponemos el prompt que necesitas).</li>
          <li>
            Nuestro agente IA sugiere:
            <ul>
              <li>Arquitectura óptima (¿Streamlit? ¿Next.js? ¿No-code + API?)</li>
              <li>Modelo de IA ideal (RAG, fine-tuned small LLM, API de terceros)</li>
              <li>Interfaz mínima viable (Figma auto-generado)</li>
            </ul>
          </li>
          <li>Nuestro ingeniero: ajusta, integra, prueba y entrega.</li>
        </ul>
      </div>

      <div className="stack-section section-container">
        <h2 className="section-title">🚀 Stack acelerado (low-code + open source)</h2>
        <div className="stack-cards">
          <div className="stack-card">
            <h3>💻 Frontend</h3>
            <p>Next.js, Streamlit, Gradio, o Carrd (para landing ultra-rápida)</p>
          </div>
          <div className="stack-card">
            <h3>⚙️ Backend</h3>
            <p>Supabase (DB + auth), Firebase, o Vercel Edge Functions</p>
          </div>
          <div className="stack-card">
            <h3>🧠 IA</h3>
            <p>Modelos open-source (Phi-3, Mistral) + APIs (OpenRouter, Together AI) + RAG ligero</p>
          </div>
          <div className="stack-card">
            <h3>☁️ Hosting</h3>
            <p>Vercel / Cloudflare Pages → deploy en 1 clic</p>
          </div>
        </div>
      </div>

      <div className="mobile-section section-container">
        <h2 className="section-title">¿Funciona en móvil?</h2>
        <ul>
          <li>✅ Todas nuestras apps/web son responsive.</li>
          <li>Opcional: PWA (app instalable en celular)</li>
        </ul>
        <a href="https://wa.me/2996052287" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon />
          Solicita una demo gratis con un requerimiento funcional de tu emprendimiento, pyme o agencia.
        </a>
      </div>
      <HomeButton />
    </div>
  );
};


export default Apps24h;
