import React from 'react';
import { headerStyles } from '../styles/Header.styles.js';

function Header() {
  return (
    <header style={headerStyles.header}>
      <div style={headerStyles.container}>
        <div style={headerStyles.logo}>
          <span style={headerStyles.logoMain}>Eterna</span>
          <span style={headerStyles.logoSub}>FGA</span>
          <div style={headerStyles.logoDescription}>
            Memórias compartilhadas da comunidade acadêmica UnB - campus Gama
          </div>
        </div>
        
        <nav style={headerStyles.nav}>
          <a href="#" style={headerStyles.navLink}>Memórias</a>
          <a href="#" style={headerStyles.navLink}>Enviar Memórias</a>
          <a href="#" style={headerStyles.navLink}>Sobre</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
