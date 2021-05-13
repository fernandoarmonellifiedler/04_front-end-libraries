import { useParams } from 'react-router-dom';

const Inicio = () => {
  const {nombre} = useParams()

  return (
    <div>
      <h1>Pagina de Inicio</h1>
      {nombre}
    </div>
  );
};

export default Inicio;
