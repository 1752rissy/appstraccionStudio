import React from 'react';
import './VideoAvatars.css';

const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle', marginRight: '8px' }}>
    <path d="M12.03 2C6.53 2 2.1 6.43 2.1 11.93c0 1.77.46 3.48 1.31 4.99L2 22l5.25-1.38c1.45.79 3.08 1.21 4.78 1.21h.01c5.5 0 9.93-4.43 9.93-9.93c0-5.5-4.43-9.93-9.93-9.93zM17.2 15.31c-.14-.28-.82-1.36-1.36-1.64c-.54-.28-1.02-.39-1.2-.39c-.18 0-.36.05-.54.28c-.18.23-.68.86-.84 1.04c-.16.18-.31.2-.49.02c-.18-.18-1.52-.56-2.89-1.77c-1.07-.95-1.79-2.13-2.08-2.49c-.29-.36-.02-.56.16-.74c.16-.16.36-.42.54-.6c.18-.18.23-.31.31-.54c.08-.23.04-.42-.02-.59c-.06-.17-.54-1.3-.74-1.79c-.2-.48-.4-.42-.54-.42h-.4c-.18 0-.45.21-.68.45c-.23.24-.86.84-.86 2.05c0 1.21.88 2.37 1.01 2.55c.13.18 1.74 2.79 4.22 3.72c.59.23 1.05.36 1.41.46c.59.16 1.13.14 1.54.08c.45-.06 1.36-.56 1.55-1.1c.19-.54.19-1.02.13-1.1c-.06-.08-.23-.14-.4-.28z" fill="currentColor"/>
  </svg>
);

const VideoAvatars = () => {
  return (
    <div className="video-avatars-page">
      <div className="intro-section section-container">
        <h2 className="page-subtitle">Enfocamos tecnología + creatividad: el “cómo lo hacemos posible con IA”.</h2>
        <h1 className="main-headline">Videos profesionales con inteligencia artificial, sin cámara, sin estudio, sin actores. Solo tu mensaje — con un avatar que habla, gesticula y conecta como vos.</h1>
      </div>
      <div className="target-audience-section section-container">
        <h2>🎯 ¿Para quién es?</h2>
        <ul>
          <li>Emprendedores y pymes que quieren escalar su presencia por medio de un avatar personalizado para innovar con IA sobre su marca o producto.</li>
          <li>Capacitadores, RHH, equipos de soporte que quieren estandarizar la comunicación.</li>
          <li>Agencias que buscan ofrecer contenido premium sin productoras y de una forma totalmente distinta a la competencia.</li>
        </ul>
      </div>
      <div className="how-it-works-section section-container">
        <h2>🧠 ¿Cómo funciona? (simple, 3 pasos)</h2>
        <div className="step">
          <h3>1. Diseñamos tu avatar:</h3>
          <ul>
            <li>Elegís el estilo (realista, ilustrado, 3D ligero), ropa, tono de voz, gestos.</li>
            <li>Opcional: clon ético con tu voz y gestos (con consentimiento y control total).</li>
          </ul>
        </div>
        <div className="step">
          <h3>2. Creás el guion (o nosotros lo generamos con IA a partir de un brief).</h3>
        </div>
        <div className="step">
          <h3>3. Generamos el video:</h3>
          <ul>
            <li>El avatar habla con sincronización labial natural, mirada a cámara, expresiones emocionales (alegría, seriedad, entusiasmo).</li>
            <li>Integración de logos, productos, subtítulos, fondo dinámico (ej: tienda virtual, oficina, calle).</li>
          </ul>
        </div>
      </div>
      <div className="tech-stack-section section-container">
        <h2>✅ Tecnología que usamos (solo para transparencia):</h2>
        <p>HeyGen / D-ID + ElevenLabs + fine-tuning con feedback humano → nada de deepfakes no éticos.</p>
      </div>
      <div className="use-cases-section section-container">
        <h2>💡 Casos de uso reales </h2>
        <div className="testimonial">
          <blockquote>“En 3 días, creamos 12 videos para nuestras sucursales — cada gerente local tiene su propio avatar. ¡Nuestro CAC bajó 18%!”</blockquote>
          <cite>— Gerente de Marketing, cadena de farmacias</cite>
        </div>
        <div className="testimonial">
          <blockquote>“Mi avatar explica los cambios de política a los empleados. Ahora el 94% entiende el mensaje a la primera.”</blockquote>
          <cite>— Director de RRHH, empresa de logística</cite>
        </div>
      </div>
      <div className="cta-section section-container">
        <h2>✅ Solicita tu demo gratis!!</h2>
        <a href="https://wa.me/2996052287" className="cta-button" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon />
          “Pedinos el avatar para tu negocio — gratis y sin compromiso desde aca o escribinos al 2996052287!!”
        </a>
      </div>
    </div>
  );
};

export default VideoAvatars;
