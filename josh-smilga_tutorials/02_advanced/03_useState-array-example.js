/* useState array example

- we´ll work with an array of objects from '../../../data' that we´ll pass to useState
- then, we´ll iterate over the array to return each one of these values
- we destructure the id and name and display the elements on screen

- we include a button to delete one item of the list
- we can call the useState handler directly from the onClick event
- this button is calling setPeople function and passing a new value, in this case, an empty array
*/

import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
          </div>
        );
      })}
      <button className='btn' onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;

/*
removing an individual item
- we´ll filter the array so it returns only the elements that are not equal to the 'id' passed as argument
- finally, we pass the new array to setPeople */

import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className='btn' onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
