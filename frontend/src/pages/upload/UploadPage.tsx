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

  const handleSubmitMeta = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario

    // Obtén los valores del formulario
    const nombreArchivo = event.currentTarget.nombreArchivo.value;
    const autor = event.currentTarget.autor.value;

    // Llama a la función UploadMeta en React pasando los valores del formulario
    uploadMeta(nombreArchivo, autor);
  };

  const uploadMeta = (nombreArchivo: string, autor: string) => {
    const url = `http://127.0.0.1:8005/api/metadata/autoupload?nombre_archivo=${encodeURIComponent(
      nombreArchivo
    )}&autor=${encodeURIComponent(autor)}`;

    const config = {
      method: 'post',
      url: url,
      headers: {},
    };

    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    };

  return (
    <div>
      <h2>Subir archivo:</h2>
      <p>El archivo debe estar en formato .tiff</p>
      <form id="form" onSubmit={handleSubmit}>
        <input type="file" name='file' /><br /><br />
        <button type='submit'>Submit</button>
      </form>
      <h2>Subir metadata:</h2>
      <form onSubmit={handleSubmitMeta}>
      <label htmlFor="nombreArchivo">Nombre de Archivo:</label>
      <input type="text" id="nombreArchivo" name="nombreArchivo" /><br /><br />

      <label htmlFor="autor">Autor:</label>
      <input type="text" id="autor" name="autor" /><br /><br />

      <input type="submit" value="Enviar" />
    </form>
    </div>
  );
};

export default UploadPage;
