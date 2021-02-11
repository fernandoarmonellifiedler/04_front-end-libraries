/* Use the Lifecycle Method componentWillMount

React components have several special methods that provide opportunities to perform actions at specific points in the lifecycle of a component. These are called lifecycle methods, or lifecycle hooks, and allow you to catch components at certain points in time. This can be before they are rendered, before they update, before they receive props, before they unmount, and so on. Here is a list of some of the main lifecycle methods: componentWillMount()
componentDidMount()
shouldComponentUpdate()
componentDidUpdate()
componentWillUnmount()

The next several lessons will cover some of the basic use cases for these lifecycle methods.

Note: The componentWillMount Lifecycle method will be deprecated in a future version of 16.X and removed in version 17. (Source)

-------------------------------

Exercise: The componentWillMount() method is called before the render() method when a component is being mounted to the DOM. Log something to the console within componentWillMount() - you may want to have your browser console open to see the output. */

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        // Change code below this line
        console.log('Loggin')
        // Change code above this line
    }
    render() {
        return <div />
    }
};


// =========================

/* Use the Lifecycle Method componentDidMount

Most web developers, at some point, need to call an API endpoint to retrieve data. If you're working with React, it's important to know where to perform this action.

The best practice with React is to place API calls or any calls to your server in the lifecycle method componentDidMount(). This method is called after a component is mounted to the DOM. Any calls to setState() here will trigger a re-rendering of your component. When you call an API in this method, and set your state with the data that the API returns, it will automatically trigger an update once you receive the data.

-------------------------------

Exercise: There is a mock API call in componentDidMount(). It sets state after 2.5 seconds to simulate calling a server to retrieve data. This example requests the current total active users for a site. In the render method, render the value of activeUsers in the h1 after the text Active Users:. Watch what happens in the preview, and feel free to change the timeout to see the different effects. */

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeUsers: null
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                activeUsers: 1273
            });
        }, 2500);
    }
    render() {
        return (
            <div>
                {/* Change code below this line */}
                <h1>Active Users: {this.state.activeUsers} </h1>
                {/* Change code above this line */}
            </div>
        );
    }
}