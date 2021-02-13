/* Prop Types
- allows us to validate our prop
- in our example we fetch different products from a list and display them in our app
- we also use useFetch custom hook from our previous example
- in our Product component file we destructure product list and show its properties
- the problems is that when working with APIs they do not always have all the info. in this case the last product doesn´t have the price property
- another case is when we pass an image as an url. if the image is undefined react won´t work

- so in cases like that we want to set a prop type that will check that for us (undefined properties for example)
- the second thing will be to set a default value

----------------------------------
Prop Types - Images
- we import propTypes

import propTypes from 'prop-types';

- we have to set up PropTypes on the component. Then inside the component we set the types for each one of its elements
- we add .isRequired to fire an alarm when some of them are missing */

Product.propTypes = {
  image:PropTypes.object.isRequired,
  name:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,
}

/* ----------------------------------
Default props
- the next thing to do is to either use short circuit operators or we could set up default props
- we simply call defaultProps on the component and set those values.
- in the case of image we can add a url or we can add an image from the project itself. to do so, we need to import it first

import defaultImage from '../../assets/default-image.jpeg'

- and then: */

Product.defaultProps = {
  image: defaultImage,
  name: 'default name',
  price: 3.99,
}

/* 
- going on, default price is displayed but image don´t. why is that? that´s because image is an object (image.url). so even though we set up default value for the image we have an error since there´s not a .url property for the default option
- we´ll see after how to solve this.

----------------------------------
- now we´ll another way of using default props with OR operator
- we can do this with the price but with the image we have the same problem.

<article className='product'>
  <img src={image.url || defaultImage} alt={name} /> // error!
  <h4>{name}</h4>
  <p>${price || 3.99}</p>
</article>

- so, here we can use AND operator. If the image is there, then give me image.url */

const Product = ({ image, name, price }) => {
  const url = image && image.url; // && operator
  return (
    <article className='product'>
      <img src={url || defaultImage} alt={name || 'default name'} />
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
    </article>
  );
};