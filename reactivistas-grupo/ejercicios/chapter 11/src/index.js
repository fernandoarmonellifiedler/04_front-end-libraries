import React from 'react';
import ReactDOM from 'react-dom';

class CountingParent extends React.Component {
  render() {
    return <div>a</div>;
  }
}

ReactDOM.render(<Page />, document.querySelector('#root'));
