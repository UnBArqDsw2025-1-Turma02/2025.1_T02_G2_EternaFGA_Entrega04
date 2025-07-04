import React, { useState } from 'react';
import { memoryStyles } from '../styles/Memory.styles.js';

function MemoryCard({ onCardClick, ...memoria }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div 
      style={{ ...memoryStyles.card, ...(isHovered ? memoryStyles.cardHover : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onCardClick(memoria)}
    >
      <div style={memoryStyles.imageContainer}>
        <img src={memoria.imagemUrl} alt={memoria.titulo} style={{...memoryStyles.cardImage, ...(isHovered ? memoryStyles.imageHover : {})}} />
      </div>
      <div style={memoryStyles.cardContent}>
        <h3 style={memoryStyles.cardTitle}>{memoria.titulo}</h3>
        <p style={memoryStyles.cardDescription}>{memoria.descricao}</p>
        <time style={memoryStyles.cardDate}>{new Date(memoria.dataEnvio).toLocaleDateString('pt-BR')}</time>
      </div>
    </div>
  );
}

export default MemoryCard;
