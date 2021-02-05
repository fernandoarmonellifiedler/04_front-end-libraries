/* useState counter
- we´re gonna use different ways to implement the counter.

- one way will be to pass directly the value in our reset function */

import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0); // here
  };
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className='btn' onClick={() => setValue(reset)}>
          reset
        </button>
        <button className='btn' onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;

/* adding value with delay using functional approach
- now, we´re gonna pass a function in our setValue function
- we have just one button that will have a more complex implementation. we add the complexIncrease function that will have a setTimeout method 
- the thing is that if i click 3 times within those 2 seconds of delay it will only increase one. that´s because we have an asyncronous function that will always look to the older value until it updates

  const complexIncrease = () => {
    setTimeout(() => {
      setValue(value + 1);
    }, 2000);
  };

functional approach:
- adding an arrow function inside setValue will take the correct updated number. 
- we have to add an argument (for convention is prevState) and will be updated with whatever value the function returns so be carefull to not return undefined
- in this case we are getting the correct old value

*/

const complexIncrease = () => {
  setTimeout(() => {
    setValue((prevState) => {
      return prevState + 1;
    });
  }, 2000);
};

/*
note:
- we can do both of the ways. somethimes it´s not needed to pass the value calling a function inside setValue, just the value itself. These are different approachs. Functions can be used in any of the previous examples
- take a previous example of UseStateArray  */

// previous approach
const removeItem = (id) => {
  let newPeople = people.filter((person) => person.id !== id);
  setPeople(newPeople);
};

// functional approach
const removeItem = (id) => {
  setPeople((oldPeople) => {
    let newPeople = oldPeople.filter((person) => person.id !== id);
    return newPeople;
  });
};
