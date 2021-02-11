/* useEffect - fetch data
- first we´re gonna set up a state value and in the useEffect callback function we´re gonna fetch a list of users
- there are multiple ways of doing this. in this case we´re using a super function because we´re using async/await and this returns a promise. useEfect will not work. you can add async/await inside the callback function or use a super function. Like this: */

import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
  };

  useEffect(() => {});
  getUsers();
  return (
    <>
      <h3>github users</h3>
    </>
  );
};

export default UseEffectFetchData;

/*
- now we want to use setUsers and instead of an empty array we´ll get the users list and in JSX iterate over users and a return for each one of them

- IMPORTANT! if we use this setUsers(users) we´ll create an infinite loop so we add the empty array as second parameter. Make sure you use the dependecy list!
 */

const getUsers = async () => {
  const response = await fetch(url);
  const users = await response.json();
  setUsers(users);
};

useEffect(() => {
  getUsers();
}, []);

/* 
- now we can return is JSX a list of users iterating over them with map method.
- we destructure each one of the elements inside and return an image with their avatar, user name and a link to their profile */

import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
