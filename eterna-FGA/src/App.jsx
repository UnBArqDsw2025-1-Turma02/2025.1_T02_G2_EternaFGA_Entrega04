import React from 'react';
import Header from './components/Header';
import MemoryGallery from './components/MemoryGallery';
import { globalStyles } from './styles/globalStyles';
import { mockMemorias } from './data/mockMemorias'; 

function App() {

  const appStyles = {
    ...globalStyles.app,
    ...globalStyles.body,
  };

  return (
    <div style={appStyles}>
      <Header />
      <main>
        <MemoryGallery memorias={mockMemorias} />
      </main>
    </div>
  );
}

export default App;
