/* useState object example

- we pass to useState directly the object instead of a variable. that´s possible too
- this will be different for the array example because inside the object we have some values that we want too pursue.
- the problem is that if we pass a value directly we wipe out all the values
- that´s because first state value has an object and then we change it to an string */

import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  });
  const changeMessage = () => {
    setPerson('hello world'); // here
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;


// - if we try to change only the message, the message stays but the rest gets erased again

const changeMessage = () => {
  setPerson({message: 'hello world'});
};

/*
- the solution is to use the spread operator
- the spread operator it first copy the value and then we come up with whatever value we want to override */

const changeMessage = () => {
  setPerson({...person, message: 'hello world'});
};