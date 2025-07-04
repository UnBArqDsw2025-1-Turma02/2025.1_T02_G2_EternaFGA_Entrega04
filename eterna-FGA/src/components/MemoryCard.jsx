import React from 'react';

function MemoryCard({ titulo, descricao, imagemUrl, dataEnvio }) {
  return (
    <div style={styles.card}>
      <img src={imagemUrl} alt={titulo} style={styles.image} />
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <small>Enviado em: {dataEnvio}</small>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    width: '250px',
    textAlign: 'center',
    boxShadow: '2px 2px 8px rgba(0,0,0,0.1)',
    margin: '8px',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
  },
};

export default MemoryCard;
