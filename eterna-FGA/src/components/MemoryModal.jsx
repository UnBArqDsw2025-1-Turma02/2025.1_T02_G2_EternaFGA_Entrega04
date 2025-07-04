import React, { useEffect } from 'react';
import { memoryModalStyles } from '../styles/Memory.styles.js';

// Função para formatar a data, pode ser movida para um arquivo de utilitários depois
const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
};

function MemoryModal({ memoria, onClose }) {
  // Efeito para fechar o modal com a tecla 'Esc'
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    // Adiciona o listener quando o modal monta
    window.addEventListener('keydown', handleKeyDown);

    // Remove o listener quando o modal desmonta para evitar memory leaks
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!memoria) {
    return null;
  }

  return (
    // O overlay escurece o fundo e fecha o modal ao ser clicado
    <div style={memoryModalStyles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      {/* O container do conteúdo impede que o clique feche o modal */}
      <div style={memoryModalStyles.content} onClick={(e) => e.stopPropagation()}>
        <button style={memoryModalStyles.closeButton} onClick={onClose} aria-label="Fechar modal">
          &times;
        </button>
        <div style={memoryModalStyles.imageContainer}>
            <img 
                src={memoria.imagemUrl} 
                alt={`Memória de ${memoria.titulo}`} 
                style={memoryModalStyles.image} 
            />
        </div>
        <div style={memoryModalStyles.details}>
          <span style={memoryModalStyles.badge}>{memoria.categoria}</span>
          <h2 style={memoryModalStyles.title}>{memoria.titulo}</h2>
          <p style={memoryModalStyles.description}>{memoria.descricao}</p>
          <time style={memoryModalStyles.date}>
            Enviado em {formatDate(memoria.dataEnvio)}
          </time>
        </div>
      </div>
    </div>
  );
}

export default MemoryModal;
