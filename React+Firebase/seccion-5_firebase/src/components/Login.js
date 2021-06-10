import { auth } from '../firebaseconfig';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const historial = useHistory();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [msgError, setMsgError] = useState(null);

  const registrar = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, pass)
      .then((res) => {
        historial.push('/');
      })
      .catch((e) => {
        if (e.code === 'auth/invalid-email') {
          setMsgError('Formato de email incorrecto');
        }
        if (e.code === 'auth/weak-password') {
          setMsgError('El password debe tener 6 caracteres o más');
        }
      });
  };

  const loginUsuario = (e) => {
    auth
      .signInWithEmailAndPassword(email, pass)
      .then((res) => {
        historial.push('/');
      })
      .catch((e) => {
        if (e.code === 'auth/wrong-password') {
          setMsgError('Password incorrecto');
        }
        if (e.code === 'auth/invalid-email') {
          setMsgError('Email inválido');
        }
        if (e.code === 'auth/user-not-found') {
          setMsgError('Usuario no existente');
        }
      });
  };

  return (
    <div className='row mt-5'>
      <div className='col'></div>
      <div className='col'>
        <form onSubmit={registrar} className='form-group'>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className='form-control'
            type='email'
            placeholder='Introduce tu email'
          />
          <input
            onChange={(e) => setPass(e.target.value)}
            className='form-control mt-4'
            type='password'
            placeholder='Introduce tu password'
          />
          <input
            className='btn btn-dark col-12 mt-4'
            type='submit'
            value='Registrar usuario'
          />
        </form>
        <button className='btn btn-success col-12 mt-2' onClick={loginUsuario}>
          Iniciar sesión
        </button>
        {msgError !== null ? <div>{msgError}</div> : <span></span>}
      </div>
      <div className='col'></div>
    </div>
  );
};

export default Login;
