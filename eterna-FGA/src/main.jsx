import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PostMemoria from './component-memoria'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <PostMemoria />
      
      {/* Você pode adicionar múltiplos posts com props diferentes */}
      <PostMemoria 
        userName="Maria Santos"
        userAvatar="https://via.placeholder.com/40/ff6b6b"
        postTime="1h"
        content="Que dia lindo para uma caminhada no parque! 🌞"
        imageUrl="https://via.placeholder.com/500x300/87ceeb"
      />
      
      <PostMemoria 
        userName="Carlos Lima"
        userAvatar="https://via.placeholder.com/40/4ecdc4"
        postTime="3h"
        content="Compartilhando uma receita deliciosa que aprendi hoje!"
      />
    </div>
  </StrictMode>,
)