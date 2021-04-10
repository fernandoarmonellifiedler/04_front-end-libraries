// 3. Make a copy of the component from Exercise 1, and replace the JSX with calls to
// React.createElement. The output should be identical.

import React from 'react';
import ReactDOM from 'react-dom';

function MyThing() {
  return React.createElement('div', { className: 'book' }, 
    React.createElement('div', {className: 'title'}, 'The Title'),
    React.createElement('div', {className: 'author'}, 'The Author'),
    React.createElement('ul', {className: 'stats'},
      React.createElement('li', {className: 'rating'}, '5 stars'),
      React.createElement('li', {className: 'isbn'}, '12-345687-910'),
    )
  );
}

ReactDOM.render(<MyThing />, document.querySelector('#root'));
