import React from 'react';
import MemoryGallery from './components/MemoryGallery';

function App() {
  const mockMemorias = [
    {
      id: 1,
      titulo: "Viagem à praia",
      descricao: "Férias inesquecíveis em família.",
      imagemUrl: "https://noticias.unb.br/images/Noticias/2018/06-Jun/08122017_AlunosUnB_BetoMonteiro-4.jpg",
      dataEnvio: "2025-07-01",
    },
    {
      id: 2,
      titulo: "Aniversário de 80 anos da Vovó",
      descricao: "Toda a família reunida para celebrar.",
      imagemUrl: "https://noticias.unb.br/images/Noticias/2018/06-Jun/08122017_AlunosUnB_BetoMonteiro-4.jpg",
      dataEnvio: "2025-06-15",
    },
    {
      id: 3,
      titulo: "Primeiro dia na escola",
      descricao: "Um dia cheio de expectativas e alegria.",
      imagemUrl: "https://noticias.unb.br/images/Noticias/2018/06-Jun/08122017_AlunosUnB_BetoMonteiro-4.jpg",
      dataEnvio: "2025-05-20",
    },
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Museu de Memórias</h1>
      <MemoryGallery memorias={mockMemorias} />
    </div>
  );
}

export default App;
