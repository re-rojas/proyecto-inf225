import React from 'react';

type Props = {};

const ChangelogPage = (props: Props) => {
  return (
    <div>
      <h3>Requisitos:</h3>
      Para el buen funcionamiento de esta página se deben estar corriendo: <br />  
      <p>Api metadatos en el puerto 8005</p>
      <p>Api Upload/Download en el puerto 8000</p>

    </div>
  );
};

export default ChangelogPage;