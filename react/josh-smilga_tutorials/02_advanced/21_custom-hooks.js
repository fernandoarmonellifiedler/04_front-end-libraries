/* custom hooks
- it allows us to reuse functionality (fetching data, saving to local storage)
- we can create them or use custom hooks from someone else
- since it´s a custom hook you have to use 'use' word in the function name.
- so either the function is a component or a custom hook

- in the fetch-example file we have a custom setup fetching some products from an external url.
- how do we do to reuse some or all this functionality? if i have another components that fetchs data too we don´t need to duplicate this lines of code. Basically this: */

const [loading, setLoading] = useState(true)
const [products, setProducts] = useState([])

const getProducts = async () => {
  const response = await fetch(url)
  const products = await response.json()
  setProducts(products)
  setLoading(false)
}

useEffect(() => {
  getProducts()
}, [url])

/* 
- so we´re going to create our own custom hook, useFetch function and throw all this code above in it
- we want to use this functionality of fetching products but not anymore in the component but in the useFetch function
- this function will receive as argument an url and return an object with two state values (loading and products)
- it´s gonna run once and every time this url changes (useEffect )*/

import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [url]);
  return { loading, products };
};

/* 
- since useFetch is returning an object we´re gonna destructure it right away
*/

import React, { useState, useEffect } from 'react';
import { useFetch } from './2-useFetch';

const url = 'https://course-api.com/javascript-store-products';

const Example = () => {
  const { loading, products } = useFetch(url);
  console.log(products);
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  );
};

export default Example;
