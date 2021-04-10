import React from 'react';
import ReactDOM from 'react-dom';

const Page = () => (
  <div>
    <CountingParent />
    <CountingParent2 />
  </div>
);

class CountingParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actionCount: 0,
    };
    this.handleAction = this.handleAction.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleAction(action) {
    console.log('Child says', action);
    // common way to use setState (it updates asyncronously)
    // this.setState({
    //   actionCount: this.state.actionCount + 1,
    // });

    // pass a callback function to update state immediately
    this.setState({ actionCount: this.state.actionCount + 1 }, function () {
      console.log(this.state);
    });

    // updating state with a functional setState (not working)
    // this.setState((state, props)=>{
    //   return {
    //     value: state.value + 1
    //   }
    // })
  }

  handleReset() {
    this.setState({
      actionCount: 0,
    });
  }

  render() {
    return (
      <div>
        <Child onAction={this.handleAction} onReset={this.handleReset} />
        <p>Clicked {this.state.actionCount} times</p>
      </div>
    );
  }
}

// cleaner syntax for class components
class CountingParent2 extends React.Component {
  state = {
    actionCount: 0,
  };

  handleAction = (action) => {
    console.log('Child says', action);

    // pass a callback function to update state immediately
    this.setState({ actionCount: this.state.actionCount + 1 }, function () {
      console.log(this.state);
    });
  };

  handleReset = () => {
    this.setState({
      actionCount: 0,
    });
  };

  render() {
    return (
      <div>
        <Child onAction={this.handleAction} onReset={this.handleReset} />
        <p>Clicked {this.state.actionCount} times</p>
      </div>
    );
  }
}

function Child({ onAction, onReset }) {
  return (
    <div>
      <button onClick={onAction}>Click Me!</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

ReactDOM.render(<Page />, document.querySelector('#root'));
