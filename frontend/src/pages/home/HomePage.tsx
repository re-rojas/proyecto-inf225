import React from 'react';

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <h3>Integrantes:</h3>
        <div>
          <ul>
            <li>Eugenio Perez, rol: 202073020-2 </li>
            <li>Rolando Rojas, rol: 202073047-4 </li>
            <li>Solveig Gluppe Aarø, rol: 202290197-7 </li>
          </ul> 
        Tutor: Ernesto Roca
        </div><br />
      <h3>Aspectos técnicos relevantes</h3>
        <div>
          <ul>
            <li>Tecnologías utilizadas:
              <ul>
                <li>Python 3.11 </li>
                <li>MongoDB 6.0 </li>
                <li>Postman </li>
                <li>ReactJS </li>
                <li>NodeJS </li>
              </ul>
            </li>
            <li>Librerías utilizadas: 
              <ul>
                <li>fastapi 0.65.1 </li>
                <li>uvicorn 0.14.0 </li>
                <li>motor 3.1.1 </li>
                <li>rasterio 1.3.7 </li>
                <li>python-multipart 0.0.6 </li>
                <li>aiofiles 23.1.0 </li>
                <li>axios </li>
              </ul> 
            </li>
          </ul> 
        </div>
    </div>
  );
};

export default HomePage;