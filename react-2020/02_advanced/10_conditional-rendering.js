/* Conditional Rendering
- we´ll display different components or content based on some condition likein the following example: */

import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return <>multiple returns</>;
};

export default MultipleReturns;

/* Fetching data
- for a more complex example we´ll add a Error state value.
- depending of the state we´ll render diferent contents */

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }

  // this is rendered if is not loading and there´s no error
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

/* Fetch data
- in ths case we don´t use async/await. just another way of doing the same */

useEffect(() => {
  fetch(url)
    .then((resp) => resp.json())
    .then((user) => console.log(user))
    .catch((error) => console.log(error));
}, []);

/* how do we operate with these values/
- calling setUser once we get user and setIsLoading to false when i get the user data

- one problem with this fetch is that when you talk about the error you´re talking about the network. when we get the json response from the url we´ll check what is the status of our response. we´ll modify .then((resp) => resp.json()) a little bit */

useEffect(() => {
  fetch(url)
    .then((resp) => {
      if (resp.status >= 200 && resp.status <= 299) {
        return resp.json();
      } else {
        setIsLoading(false);
        setIsError(true);
        throw new Error(resp.statusText);
      }
    })
    .then((user) => {
      const { login } = user;
      setUser(login);
      setIsLoading(false);
    })
    .catch((error) => console.log(error));
}, []);