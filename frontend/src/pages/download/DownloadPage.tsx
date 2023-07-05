import React from 'react';
import { ChangeEvent, useState, useEffect } from "react";
import axios from 'axios';

type Props = {};

type Archivo = {
  nombre_archivo: string;
  autor: string;
  driver: string;
  dtype: string;
  nodata: string;
  width: number;
  height: number;
  count: number;
  crs: string;
  transform: string
};

const DownloadPage = (props: Props) => {
  const [nombre, setNombre] = useState("");
  const [show, setShow] = useState(false);
  const [datos, setDatos] = useState<Archivo[]>([]);

  const searchByName = () => {
    var config = {
      method: 'get',
      url: 'http://127.0.0.1:8005/api/all',
      headers: {}
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setDatos(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function mostrarResultado() {
    setShow(true);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value);
  };

  useEffect(() => {
    searchByName();
  }, []);

  return (
    <div className="App">
      <h2>Todos los archivos disponibles:</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={{ padding: "8px", textAlign: "left", borderBottom: "1px solid #ddd", backgroundColor: "#f2f2f2" }}>Nombre</th>
          <th style={{ padding: "8px", textAlign: "left", borderBottom: "1px solid #ddd", backgroundColor: "#f2f2f2" }}>Subido por:</th>
          <th style={{ padding: "8px", textAlign: "left", borderBottom: "1px solid #ddd", backgroundColor: "#f2f2f2" }}>CRS</th>
          <th style={{ padding: "8px", textAlign: "left", borderBottom: "1px solid #ddd", backgroundColor: "#f2f2f2" }}>Driver</th>
          <th style={{ padding: "8px", textAlign: "left", borderBottom: "1px solid #ddd", backgroundColor: "#f2f2f2" }}>Link</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((item, index) => (
          <tr key={index}>
            <td style={{ padding: "8px", textAlign: "left", borderBottom: "1px solid #ddd" }}>{item.nombre_archivo}</td>
            <td style={{ padding: "8px", textAlign: "left", borderBottom: "1px solid #ddd" }}>{item.autor}</td>
            <td style={{ padding: "8px", textAlign: "left", borderBottom: "1px solid #ddd" }}>{item.crs}</td>
            <td style={{ padding: "8px", textAlign: "left", borderBottom: "1px solid #ddd" }}>{item.driver}</td>
            <td style={{ padding: "8px", textAlign: "left", borderBottom: "1px solid #ddd" }}>
              <a href={`http://127.0.0.1:8000/archivo?nombre=${item.nombre_archivo}`} target="_blank" rel="noopener noreferrer">
                Enlace
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default DownloadPage;
