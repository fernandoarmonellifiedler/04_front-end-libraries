/* Short-circuit evaluation
- in react when we talk about JSX we´re talking about the fact that it has to return an expression, a value. an if statement in JSX will not be allowed
- we can use instead && and || operators as well as ternary operator */

import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <>
      <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1>
    </>
  );
};

export default ShortCircuit;

// an example: if i want to display inside and h1 tag a value or a default value if that value don´t exist

<h1>{text || 'default value'}</h1>;

// if text it´s not true then return 'hello world'
{
  !text && <h1>hello world</h1>;
}

/* ----------------------------------
Ternary operator
- for this we´re gonna set a button
- instead of relying on text we´re gonna rely on the state variable isError.
- the button will change isError state to true or false */

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h1>{text || 'default value'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>

      {/* using && operator */}
      {isError && <h1>Error</h1>}

      {/* using ternary operator */}
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
    </>
  );
};
