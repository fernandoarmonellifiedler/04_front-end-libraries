// 4. Return the appropriate JSX from this component so that when username is undefined or null,
// it renders “Not logged in”. When username is a string, render “Hello, username”

import React from 'react';
import ReactDOM from 'react-dom';

function Greeting() {
  // Try all of these variations:
  // let username = "root";
  // let username = undefined;
  // let username = null;
  let username = false;
  // Fill in the rest:
  return (
    <>
    {typeof(username) === 'string' && 'Hello, '+ username}
    {!username && 'Not logged in'}
    </>
  )
}

ReactDOM.render(<Greeting />, document.querySelector('#root'));
