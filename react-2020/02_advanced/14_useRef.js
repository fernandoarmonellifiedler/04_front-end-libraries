/* useRef
- when using forms we have controlled inputs but also uncontrolled inputs.
- we do that using useRef
- one common case is targeting the DOM element and then set up uncontrolled inputs

- is a lot like useState since it also preserves value between renders but DOES NOT trigger re-render
- target DOM nodes/elements

- we import it like all others hooks
- declare the value and then use it to signal what input will be referenced */

const UseRefBasics = () => {
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };
  console.log(refContainer);
  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
          <button type='submit'>submit</button>
        </div>
      </form>
    </>
  );
};

/*
- the variable with the useRef hook is an object with the 'current' property set to null
- when we submit the form this value will hold the value of the input
- note that in this case we don´t have the state value, instead we use this ref and add this ref attribute
- you can add the ref to any html element, like a div, for example, if you want to do something particular with this DOM node.*/

import React, { useEffect, useRef } from 'react';

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };
  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
          <button type='submit'>submit</button>
        </div>
      </form>
      <div ref={divContainer}>hello world</div>
    </>
  );
};

export default UseRefBasics;

/* ------------------------------
- one cool thing we can do is to focus the input the moment our app renders
- ass useRef doesn´t trigger re-render we use useEffect */

useEffect(() => {
  console.log(refContainer.current);
  refContainer.current.focus();
});
