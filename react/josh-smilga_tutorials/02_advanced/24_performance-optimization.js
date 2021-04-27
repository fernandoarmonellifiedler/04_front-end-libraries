/* Performance Optimization
- React.memo
- useCallback
- useMemo
- Memoizing - catching results (remember)

Warning:
- react is fast by default
- optimizations add their own costs!

- it doesn´t mean that you have to add this functions and hooks to your app. */


/* ---------------------------------
React.memo
- in the first place you´ll notice that every time we click te button the page re-renders. this happens because we have a state value using useState (count)
- the solution is the memo method that comes with react. we wrap all the component on it
- memo memorizes what is the value so if the products prop value doesn´t change then we´re not triggering the re-render
*/

const BigList = React.memo(({ products }) => {
  useEffect(() => {
    console.log('big list called');
  })
  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product}></SingleProduct>
      })}
    </section>
  )
})


/* ---------------------------------
useCallback
- what if we create a state value but we don´t add the actual item in the cart? we´ll simulate this situation
- inside the Index component we create cart state value of zero and a function to add one with every item added. 

  const { products } = useFetch(url)
  const [count, setCount] = useState(0)
  const [cart,setCart] = useState(0)

  const addToCart = () => {
    setCart(cart + 1)
  }

- then we want to pass that function down to an item so we add a heading to the return to simulate adding a product and do some prop drilling to the SingleProduct component
- the issue is the same than before. Every time we add an item to the cart the app re-renders. It also re-renders when adding a count value because the function addToCarte gets re-created and modifies the prop
- that´s because in the BigList component we take care of 'products' with memo but we also have a function that modifies the prop addToCart

- we use useCallback to solve this the same way with memo in BigList, but in this case with the function. so, if the value of the function doesn´t change the function won´t re-create again
- Important: we also add the dependency array because each and every time we update the cart value we also create this function (addToCart)

  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

- so now we create the function only when we update the cart value
- if the dependency array is an empty array the value will always be 1 once we start clicking on the addToCart button

- as a sidenote, we have a warning on the console: React Hook useEffect has a missing dependency: 'getProducts' that is coming from our useFetch custom hook. 
- this is another use case where we can use useCallback hook that we´ll see later
*/


/* ---------------------------------
useMemo
- unlike the useCallback (which memorizes the function if the cart value didn´t change), the useMemo deals with a value
- keep in mind that this is for functions that takes a long time to calculate
- so we create a function that returns some kind of value. For the example, it´ll return the most expensive value using reduce method.

const calculateMostExpensive = (data) => {
  return (
    data.reduce((total, item) => {
      const price = item.field.price;
      if (price > total) {
        total = price;
      }
      return price;
    }, 0) / 100
  );
}

- we add a heading with the value in the return of Index and pass it the functions with the products

<h1>Most Expensive : ${calculateMostExpensive(products)}</h1>

- like previous cases, this function is called every time we click on a button so this function needs to be called only if data changes. that is 'products' prop value
- so we call useMemo inside a variable. then we pass a callback function with the name of the function that returns a value, we invoque it with products argument and the second thing is the dependency array with products

  const mostExpensive = useMemo(() => calculateMostExpensive(products), [
    products,
  ]);

- and then, of course, we change the name of the function that is called on heading one in the Index return

<h1>Most Expensive : ${mostExpensive}</h1>

- so we´re rememberin gthe value using the useMemo hook so that only when products change (the data we´re passing in) the function renders */


/* ---------------------------------
useCallback - fetch example
- so, in the fetch custom hook we have a function in useEffect that it´s not being used
- if we add that function to the dependency array we create an infinite loop because the function itself (getProducts) alters the value of products. Since this value is modified the function is recreated and goes all over again

- so we can call useCallback hook and use it to wrap all the function and it only will change when url modifies
- now we can go to useEffect and just add our getProducts function in the dependency array
*/

import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);
  return { loading, products };
};