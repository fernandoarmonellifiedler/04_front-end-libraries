import { useState } from 'react';

const Temperatura = () => {
  const [temperatura, setTemperatura] = useState(19);

  const handleAumentar = () => {
    setTemperatura(temperatura + 1);
  };

  const handleDisminuir = () => {
    setTemperatura(temperatura - 1);
  };

  return (
    <div className='container'>
      <h1>Temperatura</h1>
      <h2>{temperatura}</h2>
      <p>{temperatura > 21 ? 'Hace calor' : 'Hace frío'}</p>
      <button className='btn btn-success btn-block' onClick={handleAumentar}>
        Aumentar
      </button>
      <button className='btn btn-success btn-block' onClick={handleDisminuir}>
        Disminuir
      </button>
    </div>
  );
};

export default Temperatura;
