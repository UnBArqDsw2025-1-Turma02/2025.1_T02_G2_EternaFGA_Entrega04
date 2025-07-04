// Header.styles.js
export const headerStyles = {
  header: {
    backgroundColor: '#1B7A9B',
    color: '#fff',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px 32px',
  },
  logo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  logoMain: {
    fontSize: '2.5rem',
    fontWeight: '300',
    letterSpacing: '-0.02em',
    lineHeight: '1',
    marginBottom: '2px',
  },
  logoSub: {
    fontSize: '1.8rem',
    fontWeight: '700',
    letterSpacing: '0.1em',
    lineHeight: '1',
    marginBottom: '4px',
  },
  logoDescription: {
    fontSize: '0.85rem',
    fontWeight: '400',
    opacity: 0.9,
    letterSpacing: '0.02em',
    textTransform: 'none',
  },
  nav: {
    display: 'flex',
    gap: '24px', // Diminuí um pouco o espaçamento
    alignItems: 'center',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '400',
    letterSpacing: '0.02em',
    padding: '8px 12px',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
    position: 'relative',
    cursor: 'pointer',
  },
  // NOVO ESTILO PARA O BOTÃO DE AÇÃO
  navButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    fontWeight: '600',
  }
};
