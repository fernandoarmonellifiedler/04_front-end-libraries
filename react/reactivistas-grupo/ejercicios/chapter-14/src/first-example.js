import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Function Component
function OneTimeButton({ onClick }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    onClick();
    setClicked(true);
  };

  return (
    <button onClick={handleClick} disabled={clicked}>
      You Can Only Click Me Once!
    </button>
  );
}

// Class Component
class OneTimeButton2 extends React.Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.props.onClick();
    this.setState({ clicked: true });
  };

  render() {
    return (
      <button onClick={this.handleClick} disabled={this.state.clicked}>
        You Can Only Click Me Once!
      </button>
    );
  }
}

ReactDOM.render(
  <>
    <OneTimeButton onClick={() => alert('hi')} />
    <OneTimeButton2 onClick={() => alert('hi')} />
  </>,
  document.getElementById('root')
);
