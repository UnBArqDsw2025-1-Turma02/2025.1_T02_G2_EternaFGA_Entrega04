import React, { useState } from 'react';

// Importando todos os componentes necessários
import Header from './components/Header.jsx';
import MemoryGallery from './components/MemoryGallery.jsx';
import MemoryForm from './components/MemoryForm.jsx';
import MemoryModal from './components/MemoryModal.jsx'; // 1. Importar o novo modal
import { mockMemorias } from './data/mockMemorias.js';
import { globalStyles } from './styles/globalStyles.js';

// Componente para injetar as animações CSS globais
const GlobalAnimations = () => (
  <style>{`
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes scaleIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
  `}</style>
);

function App() {
  const [memorias, setMemorias] = useState(mockMemorias);
  const [isFormVisible, setIsFormVisible] = useState(false);
  
  // 2. Adicionar estado para controlar a memória selecionada
  const [selectedMemory, setSelectedMemory] = useState(null);
  
  const handleAddMemory = (newMemory) => {
    setMemorias([newMemory, ...memorias]);
  };

  // 3. Adicionar função para abrir o modal com a memória clicada
  const handleCardClick = (memoria) => {
    setSelectedMemory(memoria);
  };

  // 4. Adicionar função para fechar o modal
  const handleCloseModal = () => {
    setSelectedMemory(null);
  };

  const appStyles = {
    ...globalStyles.app,
    ...globalStyles.body,
  };

  return (
    <div style={appStyles}>
      <GlobalAnimations />
      
      <Header onSendMemoryClick={() => setIsFormVisible(true)} />
      
      <main>
        <MemoryGallery memorias={memorias} onCardClick={handleCardClick} />
      </main>

      <MemoryForm 
        isVisible={isFormVisible}
        onClose={() => setIsFormVisible(false)}
        onAddMemory={handleAddMemory}
      />
      <MemoryModal 
        memoria={selectedMemory}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
