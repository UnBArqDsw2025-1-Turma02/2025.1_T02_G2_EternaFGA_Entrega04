import React from 'react';
import { headerStyles } from '../styles/globalStyles.js';

function Header({ onSendMemoryClick }) {
  const handleSendClick = (e) => {
    e.preventDefault();
    onSendMemoryClick();
  };
  return (
    <header style={headerStyles.header}>
      <div style={headerStyles.container}>
        <div style={headerStyles.logo}>
          <span style={headerStyles.logoMain}>Eterna</span><span style={headerStyles.logoSub}>FGA</span>
          <div style={headerStyles.logoDescription}>Memórias da comunidade acadêmica</div>
        </div>
        <nav style={headerStyles.nav}>
          <a href="#" style={headerStyles.navLink}>Memórias</a>
          <a href="#" onClick={handleSendClick} style={{...headerStyles.navLink, ...headerStyles.navButton}}>Enviar Memória</a>
          <a href="#" style={headerStyles.navLink}>Sobre</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
