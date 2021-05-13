import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Inicio from './components/Inicio';
import Base from './components/Base';

function App() {
  return (
    <div className='App'>
      <Router>
        <Link to='/'>Base</Link>
        <Link to='/inicio'>Inicio</Link>

        <Switch>
          <Route exact path='/'>
            <Base />
          </Route>
          <Route path='/inicio/:nombre'>
            <Inicio />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
