/* Adding Time Travel

As a final exercise, let’s make it possible to “go back in time” to the previous moves in the game.


----------------------------
Storing a History of Moves

If we mutated the squares array, implementing time travel would be very difficult.

However, we used slice() to create a new copy of the squares array after every move, and treated it as immutable. This will allow us to store every past version of the squares array, and navigate between the turns that have already happened.

We’ll store the past squares arrays in another array called history. The history array represents all board states, from the first to the last move, and has a shape like this: */

history = [
  // Before first move
  {
    squares: [
      null, null, null,
      null, null, null,
      null, null, null,
    ]
  },
  // After first move
  {
    squares: [
      null, null, null,
      null, 'X', null,
      null, null, null,
    ]
  },
  // After second move
  {
    squares: [
      null, null, null,
      null, 'X', null,
      null, null, 'O',
    ]
  },
  // ...
]

/* Now we need to decide which component should own the history state.


----------------------------
Lifting State Up, Again

We’ll want the top-level Game component to display a list of past moves. It will need access to the history to do that, so we will place the history state in the top-level Game component.

Placing the history state into the Game component lets us remove the squares state from its child Board component. Just like we “lifted state up” from the Square component into the Board component, we are now lifting it up from the Board into the top-level Game component. This gives the Game component full control over the Board’s data, and lets it instruct the Board to render previous turns from the history.

First, we’ll set up the initial state for the Game component within its constructor: */

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
    };
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

/* Next, we’ll have the Board component receive squares and onClick props from the Game component. Since we now have a single click handler in Board for many Squares, we’ll need to pass the location of each Square into the onClick handler to indicate which Square was clicked. Here are the required steps to transform the Board component:

- Delete the constructor in Board.

- Replace this.state.squares[i] with this.props.squares[i] in Board’s renderSquare.

- Replace this.handleClick(i) with this.props.onClick(i) in Board’s renderSquare.

The Board component now looks like this: */

class Board extends React.Component {
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// We’ll update the Game component’s render function to use the most recent history entry to determine and display the game’s status:

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }

// Since the Game component is now rendering the game’s status, we can remove the corresponding code from the Board’s render method. After refactoring, the Board’s render function looks like this:

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }

// Finally, we need to move the handleClick method from the Board component to the Game component. We also need to modify handleClick because the Game component’s state is structured differently. Within the Game’s handleClick method, we concatenate new history entries onto history.

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      xIsNext: !this.state.xIsNext,
    });
  }

    /*Note: Unlike the array push() method you might be more familiar with, the concat() method doesn’t mutate the original array, so we prefer it.

At this point, the Board component only needs the renderSquare and render methods. The game’s state and the handleClick method should be in the Game component.

View the full code at this point: https://codepen.io/gaearon/pen/EmmOqJ?editors=0010


----------------------------
Showing the Past Moves

Since we are recording the tic-tac-toe game’s history, we can now display it to the player as a list of past moves.

We learned earlier that React elements are first-class JavaScript objects; we can pass them around in our applications. To render multiple items in React, we can use an array of React elements.

In JavaScript, arrays have a map() method (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) that is commonly used for mapping data to other data, for example: */

const numbers = [1, 2, 3];
const doubled = numbers.map(x => x * 2); // [2, 4, 6]

/* Using the map method, we can map our history of moves to React elements representing buttons on the screen, and display a list of buttons to “jump” to past moves.

Let’s map over the history in the Game’s render method: */

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }

/* View the full code at this point: https://codepen.io/gaearon/pen/EmmGEa?editors=0010

For each move in the tic-tac-toe game’s history, we create a list item <li> which contains a button <button>. The button has a onClick handler which calls a method called this.jumpTo(). We haven’t implemented the jumpTo() method yet. For now, we should see a list of the moves that have occurred in the game and a warning in the developer tools console that says:

Warning: Each child in an array or iterator should have a unique “key” prop. Check the render method of “Game”.

Let’s discuss what the above warning means.

----------------------------
Picking a Key

When we render a list, React stores some information about each rendered list item. When we update a list, React needs to determine what has changed. We could have added, removed, re-arranged, or updated the list’s items.

Imagine transitioning from

<li>Alexa: 7 tasks left</li>
<li>Ben: 5 tasks left</li>

to

<li>Ben: 9 tasks left</li>
<li>Claudia: 8 tasks left</li>
<li>Alexa: 5 tasks left</li>

In addition to the updated counts, a human reading this would probably say that we swapped Alexa and Ben’s ordering and inserted Claudia between Alexa and Ben. However, React is a computer program and does not know what we intended. Because React cannot know our intentions, we need to specify a key property for each list item to differentiate each list item from its siblings. One option would be to use the strings alexa, ben, claudia. If we were displaying data from a database, Alexa, Ben, and Claudia’s database IDs could be used as keys. */

<li key={user.id}>{user.name}: {user.taskCount} tasks left</li>

/* When a list is re-rendered, React takes each list item’s key and searches the previous list’s items for a matching key. If the current list has a key that didn’t exist before, React creates a component. If the current list is missing a key that existed in the previous list, React destroys the previous component. If two keys match, the corresponding component is moved. Keys tell React about the identity of each component which allows React to maintain state between re-renders. If a component’s key changes, the component will be destroyed and re-created with a new state.

key is a special and reserved property in React (along with ref, a more advanced feature). When an element is created, React extracts the key property and stores the key directly on the returned element. Even though key may look like it belongs in props, key cannot be referenced using this.props.key. React automatically uses key to decide which components to update. A component cannot inquire about its key.

It’s strongly recommended that you assign proper keys whenever you build dynamic lists. If you don’t have an appropriate key, you may want to consider restructuring your data so that you do.

If no key is specified, React will present a warning and use the array index as a key by default. Using the array index as a key is problematic when trying to re-order a list’s items or inserting/removing list items. Explicitly passing key={i} silences the warning but has the same problems as array indices and is not recommended in most cases.

Keys do not need to be globally unique; they only need to be unique between components and their siblings.


----------------------------
Implementing Time Travel

In the tic-tac-toe game’s history, each past move has a unique ID associated with it: it’s the sequential number of the move. The moves are never re-ordered, deleted, or inserted in the middle, so it’s safe to use the move index as a key.

In the Game component’s render method, we can add the key as <li key={move}> and React’s warning about keys should disappear: */

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

/* View the full code at this point: https://codepen.io/gaearon/pen/PmmXRE?editors=0010

Clicking any of the list item’s buttons throws an error because the jumpTo method is undefined. Before we implement jumpTo, we’ll add stepNumber to the Game component’s state to indicate which step we’re currently viewing.

First, add stepNumber: 0 to the initial state in Game’s constructor: */

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

// Next, we’ll define the jumpTo method in Game to update that stepNumber. We also set xIsNext to true if the number that we’re changing stepNumber to is even:

  handleClick(i) {
    // this method has not changed
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    // this method has not changed
  

/* We will now make a few changes to the Game’s handleClick method which fires when you click on a square.

The stepNumber state we’ve added reflects the move displayed to the user now. After we make a new move, we need to update stepNumber by adding stepNumber: history.length as part of the this.setState argument. This ensures we don’t get stuck showing the same move after a new one has been made.

We will also replace reading this.state.history with this.state.history.slice(0, this.state.stepNumber + 1). This ensures that if we “go back in time” and then make a new move from that point, we throw away all the “future” history that would now become incorrect. */

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

// Finally, we will modify the Game component’s render method from always rendering the last move to rendering the currently selected move according to stepNumber:

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    // the rest has not changed
  }
/* If we click on any step in the game’s history, the tic-tac-toe board should immediately update to show what the board looked like after that step occurred.

View the full code at this point: https://codepen.io/gaearon/pen/gWWZgR?editors=0010


----------------------------
Wrapping Up

Congratulations! You’ve created a tic-tac-toe game that:

- Lets you play tic-tac-toe,
- Indicates when a player has won the game,
- Stores a game’s history as a game progresses,
- Allows players to review a game’s history and see previous versions of a game’s board.

Nice work! We hope you now feel like you have a decent grasp of how React works.

Check out the final result here: Final Result (https://codepen.io/gaearon/pen/gWWZgR?editors=0010).

If you have extra time or want to practice your new React skills, here are some ideas for improvements that you could make to the tic-tac-toe game which are listed in order of increasing difficulty:

    1. Display the location for each move in the format (col, row) in the move history list.

    2. Bold the currently selected item in the move list.

    3. Rewrite Board to use two loops to make the squares instead of hardcoding them.
    
    4. Add a toggle button that lets you sort the moves in either ascending or descending order.

    5. When someone wins, highlight the three squares that caused the win.

    6. When no one wins, display a message about the result being a draw.

Throughout this tutorial, we touched on React concepts including elements, components, props, and state. For a more detailed explanation of each of these topics, check out the rest of the documentation (https://reactjs.org/docs/hello-world.html).

To learn more about defining components, check out the React.Component API reference (https://reactjs.org/docs/react-component.html).*/