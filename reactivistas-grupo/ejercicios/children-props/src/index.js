/* 
1. Make a component to display an “error box”.
2. Practice using the React.Children.toArray function with these next few exercises. You can put them all in a single app.
  a) Write a component called FirstChildOnly that accepts any number of children but only renders the first.
  b) Write a component called LastChildOnly that only renders its last child.
  c) Create a component named Head that takes a number prop, and renders the first [number] children. e.g. If you pass number=3, and 7 child elements, it will render the first 3.
  d) Create a component named Tail that takes a number and renders the last N children.

3. Create a Dialog component which accepts as children Title, Body, and Footer components, all optional. Dialog should verify that all of its children are one of these types. */

import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

function ErrorBox({ children }) {
  return (
    <div className='card text-white bg-danger mb-3'>
      <div className='card-body'>
        <i class='fas fa-exclamation-triangle'></i>
        {children}
      </div>
    </div>
  );
}

function FirstChildOnly({ children }) {}

function LastChildOnly({ children }) {}

function Head({ children }) {}

function Tail({ children }) {}

function Dialog({ children }) {
  return (
    <div>
      <title>title</title>
      <body>body</body>
      <footer>footer</footer>
    </div>
  );
}

ReactDOM.render(
  <ErrorBox>Something has gone wrong</ErrorBox>,
  document.querySelector('#root')
);
