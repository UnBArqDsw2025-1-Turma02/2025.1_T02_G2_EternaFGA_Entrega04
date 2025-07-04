import React, { useEffect } from 'react';
// Importando os estilos corretos
import { memoryModalStyles } from '../styles/Memory.styles.js';

// Função para formatar a data
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
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!memoria) {
    return null;
  }

  return (
    <div style={memoryModalStyles.overlay} onClick={onClose} role="dialog" aria-modal="true">
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
          {/* Usando o estilo 'modalTitle' para evitar conflito */}
          <h2 style={memoryModalStyles.modalTitle}>{memoria.titulo}</h2>
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
