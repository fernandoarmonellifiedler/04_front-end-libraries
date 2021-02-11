/* multiple state values

- there´s a way to avoid using objects and replace all values for state values.
- there´s no rule that prevents you to create as many state values as you want.
- so instead of going for one giant object you can set multiple smaller state values
*/

const UseStateObject = () => {
  // const [person, setPerson] = useState({
  //   name: 'peter',
  //   age: 24,
  //   message: 'random message',
  // });

  const [name, setName] = useState('peter');
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState('hello world');

  const changeMessage = () => {
    //setPerson({...person, message: 'hello world'});
    setMessage('random message')
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;