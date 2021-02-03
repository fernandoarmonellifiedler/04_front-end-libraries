/* children props
- special props is children
- the name has to be 'children'
- a children prop is the props that is passed inside the opening and closing tags of a react component. children prop will be here: */

<Book
  img={firstBook.img}
  title={firstBook.title}
  author={firstBook.author}
>
  {/* // children prop*/}
</Book>;

// the children prop is in props object
const Book = ({ img, title, author, children }) => {
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

// we refactor to see that children prop will still be there
const Book = (props) => {
  const {img, title, author} = props;
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
    </article>
  );
};

/* to have diferent sizes (since firstBook has a description and secondBook don´t) in css we can align-items: start on .booklist

@media screen and (min-width: 768px) {
  .booklist {
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
  }
}

.book p {
  margin-top: 0.5rem;
}
*/
