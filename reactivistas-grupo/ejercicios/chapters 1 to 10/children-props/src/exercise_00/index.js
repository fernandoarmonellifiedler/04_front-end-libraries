import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

function IconButton({children}) {
  return (
    <button>
      <i className='target-icon'/>
      {children}
    </button>
  );
}

ReactDOM.render(<IconButton>"Do the Thing"</IconButton>, document.querySelector('#root'));
