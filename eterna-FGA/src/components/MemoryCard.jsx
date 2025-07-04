import React, { useState } from 'react';
import { memoryCardStyles } from '../styles/Memory.styles.js';

function MemoryCard({ onCardClick, ...memoria }) {
  const { titulo, descricao, imagemUrl, dataEnvio, categoria } = memoria;
  const [isHovered, setIsHovered] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  return (
    <div 
      style={{
        ...memoryCardStyles.card,
        ...(isHovered ? memoryCardStyles.cardHover : {})
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onCardClick} // Ação de clique agora abre o modal
      onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && onCardClick()}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalhes da memória: ${titulo}`}
    >
      <div style={memoryCardStyles.imageContainer}>
        <img 
          src={imagemUrl} 
          alt={titulo}
          style={{
            ...memoryCardStyles.image,
            ...(isHovered ? memoryCardStyles.imageHover : {}),
          }}
          onError={(e) => { e.target.src = 'https://placehold.co/600x400/EEE/31343C?text=Erro'; }}
        />
        <div style={memoryCardStyles.badge}>
          {categoria}
        </div>
      </div>
      
      <div style={memoryCardStyles.content}>
        <h3 style={memoryCardStyles.title}>{titulo}</h3>
        <p style={memoryCardStyles.description}>{descricao}</p>
        <time style={memoryCardStyles.date}>
          {formatDate(dataEnvio)}
        </time>
      </div>
    </div>
  );
}

export default MemoryCard;
