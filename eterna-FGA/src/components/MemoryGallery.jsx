import React, { useState, useMemo } from 'react';
import MemoryCard from './MemoryCard';
// Corrigido o caminho do import para os estilos
import { memoryGalleryStyles } from '../styles/Memory.styles.js';

function MemoryGallery({ memorias = [] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('todos');

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'recentes', label: 'Recentes' },
    { id: 'populares', label: 'Populares' },
  ];

  const filteredMemorias = useMemo(() => {
    let filtered = memorias;

    if (searchTerm) {
      filtered = filtered.filter(memoria =>
        memoria.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        memoria.descricao.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedFilter === 'recentes') {
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
      filtered = filtered.filter(memoria => new Date(memoria.dataEnvio) > oneMonthAgo);
    }

    return filtered.sort((a, b) => new Date(b.dataEnvio) - new Date(a.dataEnvio));
  }, [memorias, searchTerm, selectedFilter]);

  return (
    <section style={memoryGalleryStyles.container}>
      <div style={memoryGalleryStyles.header}>
        <h1 style={memoryGalleryStyles.title}>Memórias Compartilhadas</h1>
        <p style={memoryGalleryStyles.subtitle}>
          Explore os momentos especiais da nossa comunidade acadêmica
        </p>
      </div>

      <div style={memoryGalleryStyles.searchContainer}>
        <div style={memoryGalleryStyles.searchWrapper}>
          <div style={memoryGalleryStyles.searchIcon}>🔍</div>
          <input
            type="text"
            style={{
              ...memoryGalleryStyles.searchInput,
              ...(isSearchFocused ? memoryGalleryStyles.searchInputFocus : {})
            }}
            placeholder="Pesquise por título ou descrição..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
          {searchTerm && (
            <button
              style={memoryGalleryStyles.clearButton}
              onClick={() => setSearchTerm('')}
              aria-label="Limpar busca"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <div style={memoryGalleryStyles.filters}>
        {filters.map(filter => (
          <button
            key={filter.id}
            style={{
              ...memoryGalleryStyles.filterButton,
              ...(selectedFilter === filter.id ? memoryGalleryStyles.filterButtonActive : {})
            }}
            onClick={() => setSelectedFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {filteredMemorias.length > 0 ? (
        <div style={memoryGalleryStyles.gallery}>
          {filteredMemorias.map((memoria) => (
            <MemoryCard key={memoria.id} {...memoria} />
          ))}
        </div>
      ) : (
        <div style={memoryGalleryStyles.emptyState}>
          <div style={memoryGalleryStyles.emptyStateIcon}>📭</div>
          <p style={memoryGalleryStyles.emptyStateText}>
            {searchTerm ? 'Nenhuma memória encontrada' : 'Nenhuma memória para exibir'}
          </p>
          <p style={memoryGalleryStyles.emptyStateSubtext}>
            {searchTerm ? 'Tente uma busca diferente.' : 'Que tal compartilhar a primeira memória?'}
          </p>
        </div>
      )}
    </section>
  );
}

export default MemoryGallery;
