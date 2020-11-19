/* Pass Props to a Stateless Functional Component
The previous challenges covered a lot about creating and composing JSX elements, functional components, and ES6 style class components in React. With this foundation, it's time to look at another feature very common in React: props. In React, you can pass props, or properties, to child components. Say you have an App component which renders a child component called Welcome which is a stateless functional component. You can pass Welcome a user property by writing:

<App>
  <Welcome user='Mark' />
</App>

You use custom HTML attributes created by you and supported by React to be passed to the component. In this case, the created property user is passed to the component Welcome. Since Welcome is a stateless functional component, it has access to this value like so:

const Welcome = (props) => <h1>Hello, {props.user}!</h1>

It is standard to call this value props and when dealing with stateless functional components, you basically consider it as an argument to a function which returns JSX. You can access the value of the argument in the function body. With class components, you will see this is a little different.

-------------------------------

Exercise: There are Calendar and CurrentDate components in the code editor. When rendering CurrentDate from the Calendar component, pass in a property of date assigned to the current date from JavaScript's Date object. Then access this prop in the CurrentDate component, showing its value within the p tags. Note that for prop values to be evaluated as JavaScript, they must be enclosed in curly brackets, for instance date={Date()}. */

const CurrentDate = (props) => {
    return (
        <div>
            { /* Change code below this line */}
            <p>The current date is: {props.date}</p>
            { /* Change code above this line */}
        </div>
    );
};

class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>What date is it?</h3>
                { /* Change code below this line */}
                <CurrentDate date={Date()} />
                { /* Change code above this line */}
            </div>
        );
    }
};


// =========================

/* Pass an Array as Props
The last challenge demonstrated how to pass information from a parent component to a child component as props or properties. This challenge looks at how arrays can be passed as props. To pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces.

<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
The child component then has access to the array property colors. Array methods such as join() can be used when accessing the property. const ChildComponent = (props) => <p>{props.colors.join(', ')}</p> This will join all colors array items into a comma separated string and produce: <p>green, blue, red</p> Later, we will learn about other common methods to render arrays of data in React.

-------------------------------

Exercise: There are List and ToDo components in the code editor. When rendering each List from the ToDo component, pass in a tasks property assigned to an array of to-do tasks, for example ["walk dog", "workout"]. Then access this tasks array in the List component, showing its value within the p element. Use join(", ") to display the props.tasksarray in the p element as a comma separated list. Today's list should have at least 2 tasks and tomorrow's should have at least 3 tasks. */

const List = (props) => {
    { /* Change code below this line */ }
    return <p>{props.tasks.join(', ')}</p>
    { /* Change code above this line */ }
};

class ToDo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>To Do Lists</h1>
                <h2>Today</h2>
                { /* Change code below this line */}
                <List tasks={['walk dog', 'workout']} />
                <h2>Tomorrow</h2>
                <List tasks={['study', 'call mom', 'go to the park']} />
                { /* Change code above this line */}
            </div>
        );
    }
};

