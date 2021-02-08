/* useEffect hook
- it allows you to use the side effect with every re-render of the app 
- a side effect is any action that happens outside of the component like change the title, a console.log, eventListener,etc

- by default runs after every re-render
- cleanup function
- second parameter
- to work we pass any callback function


--------------------------------------
Running after a re-render
example: change the document title "react app"
- we create a button to increment a value by one
- everytime i click we can see the console.logs when rendering and after render
*/

import React, { useState, useEffect } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('call useEffect');
  });
  console.log('render component');
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;

/* 
- useState do two things: it preserves the value between the renders and triggers re-render so it calls useEffect with each re-render
- we can change the title with every click, for example
*/
useEffect(() => {
  console.log('call useEffect');
  document.title = `New Messages(${value})`;
});

/* --------------------------------------
useEffect conditionals
- we will change the title only when the value is bigger than 0
- remember that hooks cannot be called conditionally so one solution will be putting if/else statements inside useEffect hook
*/

useEffect(() => {
  console.log('call useEffect');
  if (value > 0) {
    document.title = `New Messages(${value})`;
  }
});

/* --------------------------------------
Second parameter
- its added as part of the useEffect function. Its an array of dependecies (list of dependecies)
- IMPORTANT: if we leave an empty array that means that will only render on the initial run
- there are cases where we want to render only after certain actions or values are modified. that value is

const [value, setValue] = useState(0); // value

- so we pass inside the array whatever name is our dependency
- by default it will run after every time the component gets re-rendered */

useEffect(() => {
  console.log('call useEffect');
  if (value > 0) {
    document.title = `New Messages(${value})`;
  }
}, [value]);

// you can add as many useEffect as you want
