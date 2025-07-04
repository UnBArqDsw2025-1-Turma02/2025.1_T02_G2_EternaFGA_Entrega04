import React, { useState } from 'react';
import { formStyles } from '../styles/Memory.styles.js';

function MemoryForm({ isVisible, onClose, onAddMemory }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [imageFile, setImageFile] = useState(null);

  if (!isVisible) return null;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !imageFile) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    const newMemory = {
      id: Date.now(),
      titulo: title,
      descricao: description,
      imagemUrl: imagePreview,
      dataEnvio: new Date().toISOString(),
      tag: 'Nova',
    };
    onAddMemory(newMemory);
    handleClose();
  };

  const handleClose = () => {
    setTitle('');
    setDescription('');
    setImageFile(null);
    setImagePreview('');
    onClose();
  };

  return (
    <div style={formStyles.overlay} onClick={handleClose}>
      <div style={formStyles.content} onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <h2 style={formStyles.title}>Compartilhe uma Memória</h2>
          <label htmlFor="image-upload" style={formStyles.imageUploadLabel}>
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" style={formStyles.imagePreview} />
            ) : (
              <span>+ Adicionar Foto</span>
            )}
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          <div style={formStyles.inputGroup}>
            <label style={formStyles.label}>Título</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={formStyles.input}
            />
          </div>
          <div style={formStyles.inputGroup}>
            <label style={formStyles.label}>Descrição</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={formStyles.textarea}
            ></textarea>
          </div>
          <div style={formStyles.actions}>
            <button
              type="button"
              onClick={handleClose}
              style={{ ...formStyles.button, ...formStyles.buttonSecondary }}
            >
              Cancelar
            </button>
            <button type="submit" style={formStyles.button}>
              Publicar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MemoryForm;
