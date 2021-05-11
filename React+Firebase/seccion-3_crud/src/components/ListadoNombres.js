import { useState } from 'react';
import uniqid from 'uniqid';

const ListadoNombres = () => {
  const [nombre, setNombre] = useState('');
  const [listaNombres, setListaNombres] = useState([]);
  const [edicion, setEdicion] = useState(false);
  const [id, setId] = useState('');
  const [error, setError] = useState(null);

  const addNombre = (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      setError('El campo Nombre esta vacio');
      console.log('El campo Nombre esta vacio');
      return;
    }

    const nuevoNombre = {
      id: uniqid(),
      nombre,
    };
    setListaNombres([...listaNombres, nuevoNombre]);
    setNombre('');
    setError(null);
  };

  const deleteNombre = (id) => {
    const nuevoListado = listaNombres.filter((item) => item.id !== id);
    setListaNombres(nuevoListado);
  };

  const updateNombre = (item) => {
    setEdicion(true);
    setNombre(item.nombre);
    setId(item.id);
  };

  const edit = (e) => {
    e.preventDefault();

    if (!nombre.trim()) {
      setError('El campo Nombre esta vacio');
      console.log('El campo Nombre esta vacio');
      return;
    }

    const nuevoArray = listaNombres.map((item) =>
      item.id === id ? { id: item.id, nombre } : item
    );
    setListaNombres(nuevoArray);
    setNombre('');
    setId('');
    setEdicion(false);
    setError(null);
  };

  return (
    <div>
      <h2>Aplicación de CRUD básica</h2>
      <div className='row'>
        <div className='col'>
          <h3>Listado de nombres</h3>
          <ul className='list-group list-group-flush'>
            {listaNombres.map((item) => (
              <li
                key={item.id}
                className='list-group-item d-flex justify-content-between align-items-center'
              >
                {item.nombre}
                <div>
                  <button
                    onClick={() => updateNombre(item)}
                    className='btn btn-info'
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => deleteNombre(item.id)}
                    className='btn btn-danger'
                  >
                    Borrar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='col'>
          <h3>Formulario para añadir nombres</h3>
          <form onSubmit={edicion ? edit : addNombre} className='form-group'>
            <input
              className='form-control mb-3'
              type='text'
              placeholder='Introduce el nombre'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <input
              className='btn btn-info btn-block'
              type='submit'
              value={edicion ? 'Editar' : 'Registrar nombre'}
            />
          </form>
          {error !== null ? (
            <div className='alert alert-danger'>{error}</div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListadoNombres;
