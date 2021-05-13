import axios from 'axios';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  const obtenerUsuarios = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = await res.data;
    setUsuarios(users);
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      {usuarios.map((user) => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Usuarios;
