import React from 'react';
import ReactDOM from 'react-dom';

// exercise 1
class House extends React.Component {
  state = {
    kitchen: true,
    bathroom: false,
    livingRoom: true,
    bedroom: false,
  };

  handleClick = (e) => {
    let name = e.target.value;

    this.setState(
      {
        [name]: !this.state[name],
      },
      () => console.log(this.state[name])
    );
  };

  render() {
    return (
      <div>
        <h2>Exercise 1</h2>
        <button onClick={this.handleClick} value='kitchen'>
          kitchen
        </button>
        <button onClick={this.handleClick} value='bathroom'>
          bathroom
        </button>
        <button onClick={this.handleClick} value='livingRoom'>
          livingRoom
        </button>
        <button onClick={this.handleClick} value='bedroom'>
          bedroom
        </button>
      </div>
    );
  }
}

// exercise2
class House2 extends React.Component {
  state = {
    rooms: {
      kitchen: true,
      bathroom: false,
      livingRoom: true,
      bedroom: false,
    },
  };

  handleClick = (e) => {
    let value = e.target.value;

    this.setState(
      { rooms: {
        [value]: !this.state.rooms[value],
      }
        
      },
      () => console.log(this.state.rooms)
    );
  };

  render() {
    return (
      <div>
        <h2>Exercise 2</h2>
        <button onClick={this.handleClick} value='kitchen'>
          kitchen
        </button>
        <button onClick={this.handleClick} value='bathroom'>
          bathroom
        </button>
        <button onClick={this.handleClick} value='livingRoom'>
          livingRoom
        </button>
        <button onClick={this.handleClick} value='bedroom'>
          bedroom
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <>
    <House />
    <House2 />
  </>,
  document.querySelector('#root')
);
