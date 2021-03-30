import { useState } from 'react';
import React from 'react';

const Pokedex = () => {
  const [list, setList] = useState([]);
  const [selectedPoke, setSelectedPoke] = useState([]);

  // useEffect(() => {
  //   setList = ;

  // }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const name = e.target.value;

    // let pokeFind = await list.find((item) => item.name === name);
    // if (pokeFind.length === 0) {
    //   console.log('Pokemon not found');
    //   throw new Error('Pokemon not found');
    // }

    // setSelectedPoke([...selectedPoke], name);
  };
  return (
    <div className='App'>
      <div className='section'>
        <form onSubmit={handleSubmit}>
          <input type='text' />
          <button>Catch!</button>
        </form>
      </div>
      <div className='results'></div>
    </div>
  );
};

export default Pokedex;

/*<form onSubmit={handleSubmit}>
          <input type="text" />
          <button>Catch!</button>
        </form> */
