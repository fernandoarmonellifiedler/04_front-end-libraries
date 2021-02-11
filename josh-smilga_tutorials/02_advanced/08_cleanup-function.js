/* cleanup function
- here we want to check the size of the window. we can do that by setting an eventListener on the window object
- then, as the window size changes the value will be updated */

import React, { useState, useEffect } from 'react';

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
  });

  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;

/* 
- if we check the resize event listener we´ll not have only one but a bunch of them. this can cause problems on thememory usage
- what happens here is that every time we use setSize the component re-renders and useState preserves the changed values and triggers the re-rendering

- in useEffect we have the option of returning a function. whatever we add there it will be invoqued every time we exit
- we will console.log 'cleanup' and set a removeEventListener */

useEffect(() => {
  window.addEventListener('resize', checkSize);
  return () => {
    console.log('cleanup');
    window.removeEventListener('resize', checkSize);
  };
});

/* 
- here, the component gets rendered. the second time useEffect is called, it adds an event listener that sets a new state value and removes the event listener once it is triggered.

- however, in this case this is not necesary if we add an empty array as the second argument since it will be called once after a re-render
- cleanup function will be very important once we start dealing with components appearing and dissapearing
- it´s good practice every time you use a side effect, you also set up a cleanup function
*/

useEffect(() => {
  window.addEventListener('resize', checkSize);
  // return () => {
  //   console.log('cleanup');
  //   window.removeEventListener('resize', checkSize);
  // };
}, []);
