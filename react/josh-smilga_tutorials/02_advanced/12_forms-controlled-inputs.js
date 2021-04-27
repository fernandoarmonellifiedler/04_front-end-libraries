/* Forms 
- in JS usually you select an element on a variable and you access the value of the element with element.value
// const input = document.getElementById('myText');
// const inputValue = input.value

- in React, whenever we deal with controlled inputs we´re gonna hooking up our input to a state value
// value, onChange

Starting with form:
- we create a form with two inputs: name and email.
- when it comes to React we have two options: either we can add onSubmit on the form or on the onClick in the button. we´re going by the second one

- in the form or in the button we add onSubmit={handleSubmit} that will show for now a console.log. Since the browser will refresh the page on every submit we have in React the preventDefault method */

const ControlledInputs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello world');
  };

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name:</label>
            <input type='text' name='firstName' id='firstName' />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email:</label>
            <input type='text' name='email' id='email' />
          </div>
          <button type='submit'>add person</button>
        </form>
      </article>
    </>
  );
};

/* -------------------------------
Controlled inputs
- now we´re gonna access the data inside the inputs
- we set up state values and then add attributes to the input:
  - value: will reference the state value
  - onChange event listener: will fire the callback function 

- value will connect the inputs to the state value and onChange will modify that value */

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, email);
  };

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name:</label>
            <input
              type='text'
              name='firstName'
              id='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email:</label>
            <input
              type='text'
              name='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
      </article>
    </>
  );
};

/* -------------------------------
Add items to the list
- finally, to end the example we´ll add a list o persons
- we add a state value for the list with an empty array and set a condition so we only submit if both values are true
- then we create a new object and add it to the array with setFunction where we´re returning the array using the spread operator and adding the new person object to the people state value
- then we can make firstName and email return to be an empty string
- lastly, we will display the people we´ve added at the end of the return iterating over people state value array with map method
- we can use index as unique value but it´s not recomended. for this case we´re gonna cheat a little bit by using new Date for, get Time for each person added. so in the handleSubmit function we add: const person = { id: new Date().getTime().toString, ... */

import React, { useState } from 'react';

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName('');
      setEmail('');
    } else {
      console.log('empty values');
    }
  };

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name:</label>
            <input
              type='text'
              name='firstName'
              id='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email:</label>
            <input
              type='text'
              name='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
