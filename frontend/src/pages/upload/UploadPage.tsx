import React from 'react';
import axios from 'axios';

const UploadPage = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', event.currentTarget.file.files[0]);

    try {
      await axios.post('http://127.0.0.1:8000/archivo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Archivo enviado correctamente');
    } catch (error) {
      console.error('Error al enviar el archivo:', error);
    }
  };

  return (
    <div>
      <h2>Subir archivo:</h2>
      <p>El archivo debe estar en formato .tiff</p>
      <form id="form" onSubmit={handleSubmit}>
        <input type="file" name='file' /><br /><br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default UploadPage;
