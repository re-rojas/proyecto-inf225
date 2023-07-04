import React from 'react';

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <h3>Integrantes:</h3>
        <div>
        Eugenio Perez, rol: 202073020-2 <br />
        Rolando Rojas, rol: 202073047-4 <br />
        Solveig Gluppe Aarø, rol: 202290197-7 <br /> <br />

        Tutor: Ernesto Roca
        </div>
      <h3>Aspectos técnicos relevantes</h3>
        <div>
        Tecnologías utilizadas: Python 3.11, MongoDB 6.0, Postman, ReactJS, NodeJS <br />
        Librerías utilizadas: fastapi 0.65.1, uvicorn 0.14.0, motor 3.1.1, rasterio 1.3.7, python-multipart 0.0.6, aiofiles 23.1.0, axios <br /> <br />
        </div>
    </div>
  );
};

export default HomePage;