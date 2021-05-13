import { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const Usuario = () => {
  const [user, setUser] = useState([]);
  const {id} = useParams();

  const obtenerUsuario = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.data;
    setUser(user);
  };

  useEffect(() => {
    obtenerUsuario();
  },[obtenerUsuario]);

  return (
    <div>
      <h2>Usuario</h2>
      <p>Nombre: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Telefono: {user.phone}</p>
    </div>
  )
}

export default Usuario
