// stateless function component
// always return JSX

import { Fragment } from 'react';

function Greeting() {
  return (
    <div>
      <h4>hello world</h4>
    </div>
  );
}

// the same with arrow function and React.createElement
// const Greeting = () => {
//     return React.createElement('h1', {}, 'hello world');
// };

// --------------------------------
// JSX RULES
// return single element
// div / section / article or Fragment
// use cameCase for html attribute
// className instead of class
// close every element
// formatting (parentheses)

// --------------------------------
// Nested Components, React Tools
import React from 'react';
import ReactDom from 'react-dom';

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>fernando armonelli</h2>;
const Message = () => {
  return <p>this is my message</p>;
};

ReactDom.render(<Greeting />, document.getElementById('root'));
