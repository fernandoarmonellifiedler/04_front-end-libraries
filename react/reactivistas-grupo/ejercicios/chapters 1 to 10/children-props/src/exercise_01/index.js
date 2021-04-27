import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

function Nav({ children }) {
  let items = React.Children.toArray(children);
  for (let i = items.length - 1; i >= 1; i--) {
    items.splice(
      i,
      0,
      <span key={i} className='separator'>
        |
      </span>
    );
  }
  return <div>{items}</div>;
}

ReactDOM.render(
  <Nav>
    <a href='/'>Home</a>
    <a href='/about'>About</a>
    <a href='/contact'>Contact</a>
  </Nav>,
  document.querySelector('#root')
);
