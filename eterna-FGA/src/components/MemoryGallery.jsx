import React from 'react';
import MemoryCard from './MemoryCard';

function MemoryGallery({ memorias }) {
  return (
    <div style={styles.gallery}>
      {memorias.map((memoria) => (
        <MemoryCard key={memoria.id} {...memoria} />
      ))}
    </div>
  );
}

const styles = {
  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '16px',
    padding: '16px',
  },
};

export default MemoryGallery;
