import React from 'react';
// Corrigido o caminho do import para os estilos
import { headerStyles } from '../styles/Header.styles.js';

function Header() {
  return (
    <header style={headerStyles.header}>
      <div style={headerStyles.container}>
        <div style={headerStyles.logo}>
          <span style={headerStyles.logoMain}>Eterna</span>
          <span style={headerStyles.logoSub}>FGA</span>
          <div style={headerStyles.logoDescription}>
            Memórias da Faculdade Gama
          </div>
        </div>
        
        <nav style={headerStyles.nav}>
          <a href="#" style={headerStyles.navLink}>memórias</a>
          <a href="#" style={headerStyles.navLink}>ações</a>
          <a href="#" style={headerStyles.navLink}>sobre</a>
          <a href="#" style={headerStyles.navLink}>em destaque</a>
          <a href="#" style={headerStyles.navLink}>contato</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
