import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>APPSTRACCION STUDIO</h3>
        <p>Consultoría de IA aplicada para PYMES y emprendedores.</p>
        <div className="contact-info">
          <p>📧 <a href="mailto:appstraccioniastartup@gmail.com">appstraccioniastartup@gmail.com</a></p>
          <p>📱 <a href="https://wa.me/542996052287">WhatsApp: +54 2996052287</a></p>
        </div>
        <div className="copyright">
          <p>© 2025 APPSTRACCION STUDIO — Hecho con IA, pensado por humanos</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
