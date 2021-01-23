/* Use Array.map() to Dynamically Render Elements

Conditional rendering is useful, but you may need your components to render an unknown number of elements. Often in reactive programming, a programmer has no way to know what the state of an application is until runtime, because so much depends on a user's interaction with that program. Programmers need to write their code to correctly handle that unknown state ahead of time. Using Array.map() in React illustrates this concept.

For example, you create a simple "To Do List" app. As the programmer, you have no way of knowing how many items a user might have on their list. You need to set up your component to dynamically render the correct number of list elements long before someone using the program decides that today is laundry day.

-------------------------------

Exercise: The code editor has most of the MyToDoList component set up. Some of this code should look familiar if you completed the controlled form challenge. You'll notice a textarea and a button, along with a couple of methods that track their states, but nothing is rendered to the page yet.

Inside the constructor, create a this.state object and define two states: userInput should be initialized as an empty string, and toDoList should be initialized as an empty array. Next, delete the comment in the render() method next to the items variable. In its place, map over the toDoList array stored in the component's internal state and dynamically render a li for each item. Try entering the string eat, code, sleep, repeat into the textarea, then click the button and see what happens.

Note: You may know that all sibling child elements created by a mapping operation like this do need to be supplied with a unique key attribute. Don't worry, this is the topic of the next challenge.*/

const textAreaStyles = {
    width: 235,
    margin: 5
};

class MyToDoList extends React.Component {
    constructor(props) {
        super(props);
        // Change code below this line
        this.state = {
            userInput: '',
            toDoList: []
        }
        // Change code above this line
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
        const itemsArray = this.state.userInput.split(',');
        this.setState({
            toDoList: itemsArray
        });
    }
    handleChange(e) {
        this.setState({
            userInput: e.target.value
        });
    }
    render() {
        const items = this.state.toDoList.map(item => <li>{item}</li>);
        return (
            <div>
                <textarea
                    onChange={this.handleChange}
                    value={this.state.userInput}
                    style={textAreaStyles}
                    placeholder='Separate Items With Commas'
                />
                <br />
                <button onClick={this.handleSubmit}>Create List</button>
                <h1>My "To Do" List:</h1>
                <ul>{items}</ul>
            </div>
        );
    }
}

// ----------------------------
/* Give Sibling Elements a Unique Key Attribute

The last challenge showed how the map method is used to dynamically render a number of elements based on user input. However, there was an important piece missing from that example. When you create an array of elements, each one needs a key attribute set to a unique value. React uses these keys to keep track of which items are added, changed, or removed. This helps make the re-rendering process more efficient when the list is modified in any way.

Note: Keys only need to be unique between sibling elements, they don't need to be globally unique in your application.

-------------------------------

Exercise: The code editor has an array with some front end frameworks and a stateless functional component named Frameworks(). Frameworks() needs to map the array to an unordered list, much like in the last challenge. Finish writing the map callback to return an li element for each framework in the frontEndFrameworks array. This time, make sure to give each li a key attribute, set to a unique value. The li elements should also contain text from frontEndFrameworks.

Normally, you want to make the key something that uniquely identifies the element being rendered. As a last resort the array index may be used, but typically you should try to use a unique identification.*/

const frontEndFrameworks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue'
];

function Frameworks() {
    const renderFrameworks = frontEndFrameworks.map(item => <li key={item}>{item}</li>);
    return (
        <div>
            <h1>Popular Front End JavaScript Frameworks</h1>
            <ul>
                {renderFrameworks}
            </ul>
        </div>
    );
};