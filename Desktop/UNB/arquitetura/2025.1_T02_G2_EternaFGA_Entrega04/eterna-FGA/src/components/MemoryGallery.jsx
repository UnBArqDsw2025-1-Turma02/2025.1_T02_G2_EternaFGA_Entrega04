import React from 'react';
import MemoryCard from './MemoryCard.jsx';
import { memoryStyles } from '../styles/Memory.styles.js';

function MemoryGallery({ memorias, onCardClick }) {
    return (
        <div style={memoryStyles.gallery}>
            {memorias.map((memoria) => (
                <MemoryCard key={memoria.id} {...memoria} onCardClick={onCardClick} />
            ))}
        </div>
    );
}

export default MemoryGallery;
