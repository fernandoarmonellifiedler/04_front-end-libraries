import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Usuarios from './components/Usuarios';
import Usuario from './components/Usuario';

function App() {
  return (
    <Router>
      <Link to='/'>Usuarios</Link>
      <Link to='/inicio'>Inicio</Link>

      <Switch>
        <Route exact path='/'>
          <Usuarios />
        </Route>
        <Route path='/users/:id'>
          <Usuario />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
