/* useState
- is a function that we get from react. once we invoque this function we pass a default value and then we get an array of two values. a value and a handler of this value, [text, setText] in example.



why using useState hook?
- we cannot modify directly the title variable, however the console log shows a change. Thats because we´re not re-rendering the component
- we want to keep the value added or modified and re-render the component */

// in the example we´ll change the name by pressing a button

import React from 'react';

const ErrorExample = () => {
  let title = 'random title';
  const handleClick = () => {
    title = 'hello people';
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;

/*
- essencially useState is a function that returns an array with a value and a function that controlls that value (a handler)
- we have multiple ways to access the value
- so useState returns an array we can assign it to a value

- next, we add the button with handleClick in onClick. Here, we´ll use setText function to pass a new value. there are multiple ways to do this.

- finally, we add some if/else statement to return to previous value
*/

import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler)

  // use destrucure to implement a default value
  const [text, setText] = useState('random title');

  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world');
    } else {
      setText('random title');
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;

/* note:
- instead if importing { useState } there´s another option. Basically calling useState directly */

const UseStateArray = () => {
  const [people, setPeople] = React.useState([]);
  return <h2>useState array example</h2>;
};
