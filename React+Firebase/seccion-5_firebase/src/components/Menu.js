import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from '../firebaseconfig';

const Menu = () => {
  const historial = useHistory();
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email);
      }
    });
  }, []);

  const cerrarSesion = () => {
    auth.signOut();
    setUser(null);
    historial.push('/');
  };

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>
              Inicio
            </Link>
          </li>
          <li className='nav-item'>
            {!user ? (
              <Link className='nav-link' to='/login'>
                Login
              </Link>
            ) : (
              <span></span>
            )}
          </li>
          <li className='nav-item'>
            {user ? (
              <Link className='nav-link' to='/admin'>
                Admin
              </Link>
            ) : (
              <span></span>
            )}
          </li>
        </ul>
        {user ? (
          <button onClick={cerrarSesion} className='btn btn-danger'>
            Cerrar sesión
          </button>
        ) : (
          <span></span>
        )}
      </nav>
    </div>
  );
};

export default Menu;
