import React from 'react';
import Header from './components/Header';
import MemoryGallery from './components/MemoryGallery';
import { globalStyles } from './styles/globalStyles';
import { mockMemorias } from './data/mockMemorias';

// Componente para injetar as animações globais
const GlobalAnimations = () => (
  <style>
    {`
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes scaleIn {
        from { transform: scale(0.9); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
    `}
  </style>
);

function App() {
  const appStyles = {
    ...globalStyles.app,
    ...globalStyles.body,
  };

  return (
    <div style={appStyles}>
      <GlobalAnimations />
      <Header />
      <main>
        <MemoryGallery memorias={mockMemorias} />
      </main>
    </div>
  );
}

export default App;
