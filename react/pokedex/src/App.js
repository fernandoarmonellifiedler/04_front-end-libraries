import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    
  }, [])

  return (
    <div className="App">
      <div className="section">
        <Pokedex />
      </div>
      <div className="results">

      </div>
    </div>
  );
}

export default App;
