// MemoryCard.jsx
import React, { useState } from 'react';
import { memoryCardStyles } from '../styles/Memory.styles.js';

function MemoryCard({ titulo, descricao, imagemUrl, dataEnvio, categoria = 'Memória' }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const handleCardClick = () => {
    // Aqui você pode adicionar lógica para abrir modal, navegar, etc.
    console.log('Clicou na memória:', titulo);
  };

  return (
    <div 
      style={{
        ...memoryCardStyles.card,
        ...(isHovered ? memoryCardStyles.cardHover : {})
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleCardClick();
        }
      }}
    >
      <div style={memoryCardStyles.imageContainer}>
        <img 
          src={imagemUrl} 
          alt={titulo}
          style={{
            ...memoryCardStyles.image,
            ...(isHovered ? memoryCardStyles.imageHover : {}),
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease, transform 0.3s ease'
          }}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0xMDAgMTAwTDEwMCAxMDBaIiBzdHJva2U9IiNDQ0MiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K';
          }}
        />
        {!imageLoaded && (
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f0f0f0',
            color: '#999'
          }}>
            📸
          </div>
        )}
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