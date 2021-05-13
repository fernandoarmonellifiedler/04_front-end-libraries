import { useState, useEffect } from 'react';

const Base = () => {
  const [nombre, setNombre] = useState('Pedro');

  useEffect(() => {
    setTimeout(() => {
      setNombre('Carlos');
    }, 2000);
  }, []);

  return (
    <div>
      <h1>Pagina de base</h1>
      {nombre}
    </div>
  );
};

export default Base;
