import React, { useState, useMemo } from 'react';
import MemoryCard from './MemoryCard';
import MemoryModal from './MemoryModal'; // 1. Importar o novo componente
import { memoryGalleryStyles } from '../styles/Memory.styles.js';

function MemoryGallery({ memorias = [] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('todos');
  // 2. Adicionar estado para a memória selecionada
  const [selectedMemory, setSelectedMemory] = useState(null);

  const filteredMemorias = useMemo(() => {
    // ... (sua lógica de filtro e busca continua a mesma)
    let filtered = memorias;
    if (searchTerm) {
      filtered = filtered.filter(memoria =>
        memoria.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        memoria.descricao.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filtered.sort((a, b) => new Date(b.dataEnvio) - new Date(a.dataEnvio));
  }, [memorias, searchTerm]);

  // 3. Funções para abrir e fechar o modal
  const handleCardClick = (memoria) => {
    setSelectedMemory(memoria);
  };

  const handleCloseModal = () => {
    setSelectedMemory(null);
  };

  return (
    <section style={memoryGalleryStyles.container}>
      {/* ... (Header, Search e Filters continuam os mesmos) ... */}
      <div style={memoryGalleryStyles.header}>
        <h1 style={memoryGalleryStyles.title}>Memórias Compartilhadas</h1>
        <p style={memoryGalleryStyles.subtitle}>
          Explore os momentos especiais da nossa comunidade acadêmica
        </p>
      </div>
      
      {/* ... Search e Filters ... */}

      {filteredMemorias.length > 0 ? (
        <div style={memoryGalleryStyles.gallery}>
          {filteredMemorias.map((memoria) => (
            // 4. Passar a função de clique para cada card
            <MemoryCard
              key={memoria.id}
              {...memoria}
              onCardClick={() => handleCardClick(memoria)}
            />
          ))}
        </div>
      ) : (
        <div style={memoryGalleryStyles.emptyState}>
          <div style={memoryGalleryStyles.emptyStateIcon}>📭</div>
          <p>Nenhuma memória encontrada.</p>
        </div>
      )}

      {/* 5. Renderizar o modal se uma memória estiver selecionada */}
      {selectedMemory && (
        <MemoryModal memoria={selectedMemory} onClose={handleCloseModal} />
      )}
    </section>
  );
}

export default MemoryGallery;
