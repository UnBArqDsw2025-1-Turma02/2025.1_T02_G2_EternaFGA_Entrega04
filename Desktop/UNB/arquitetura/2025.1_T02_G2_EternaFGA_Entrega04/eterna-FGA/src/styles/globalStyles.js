export const globalStyles = {
  body: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    lineHeight: 1.6,
    color: '#333',
    margin: 0,
  },
  app: {
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
  },
};

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
  },
  logoMain: {
    fontSize: '2.5rem',
    fontWeight: '300',
    lineHeight: '1',
  },
  logoSub: {
    fontSize: '1.8rem',
    fontWeight: '700',
    letterSpacing: '0.1em',
    lineHeight: '1',
  },
  logoDescription: {
    fontSize: '0.85rem',
    opacity: 0.9,
  },
  nav: {
    display: 'flex',
    gap: '24px',
    alignItems: 'center',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    padding: '8px 12px',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
  },
  navButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    fontWeight: '600',
  },
};
