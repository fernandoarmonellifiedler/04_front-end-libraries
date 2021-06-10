import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import Menu from './components/Menu';
import Admin from './components/Admin';
import Login from './components/Login';

function App() {
  return (
    <div className='container'>
      <Router>
        <Menu/>
        <Switch>
          <Route path='/' component={Inicio} exact />
          <Route path='/admin' component={Admin} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
