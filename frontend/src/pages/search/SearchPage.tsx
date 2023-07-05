import React from 'react';
import { ChangeEvent, useState } from "react";
import axios from 'axios';

type Props = {};


const SearchPage = (props: Props) => {
    const [nombre, setNombre] = useState("");
    const [coord, setCoord] = useState("");
    const [show, setShow] = useState(false);
    const [datos, setDatos] = useState([]);

    const searchByName = (nombre:string) => {
        var config = {
            method: 'get',
            url: `http://127.0.0.1:8005/api/metadata?nombre_archivo=${nombre}`,
            headers: { }
          };
        axios(config)
        .then(function (response) {
            console.log(nombre);
            console.log(JSON.stringify(response.data));
            setDatos(response.data)
            mostrarResultado();
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    function mostrarResultado(){
        setShow(true);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNombre(e.target.value);
    };
    const handleChangeCoord = (e: ChangeEvent<HTMLInputElement>) => {
        setCoord(e.target.value);
    };

  return (
    <div>
        <h2>Buscar por nombre:</h2>
        <div>
            <label>Nombre archivo:</label><br />
            <input type="text" onChange={handleChange} value={nombre}/>
        </div>
        <div>
            <button onClick={() => searchByName(nombre)}>Buscar</button>
        </div>
        <div>{show?<p>{JSON.stringify(datos)}</p>:null}</div><br />
        <h2>Buscar por coordenadas:</h2>
        <div>
            <label>Ingresar coordenadas: *no implementado</label><br />
            <input type="text" onChange={handleChangeCoord} value={coord}/>
        </div>
        <div>
            <button onClick={() => searchByName(coord)}>Buscar</button>
        </div>
        
    </div>
  );
};

export default SearchPage;