/* simple list 
- to avoid repeating each one of books we can add objects to an array and then iterate over it returning a component on every iteration.
- using map method with destructuring we can do it
- so how do we return Book component accessing his props?
*/

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book img={img} title={title} author={author} />;
      })}
    </section>
  );
}

// one way
// instead of passing all of the props one by one we can pass a book prop equal to the book that we´re passing in (an object) as a prop

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book book={book} />;
      })}
    </section>
  );
}

// we´ll have a problem in Book function receiving an object as a prop so we´ll look inside props (props.book) and destructure book inside it

const Book = (props) => {
  const { img, title, author } = props.book;

  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

/* another way using spread operator
- instead of passing an object as a prop we can spread out all the properties
- this way we´re not passing anymore this book property as a object but as a separate property. 
- we spread all the properties inside the component
 */

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;

  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

/* this does the same
const Book = ({ img, title, author }) => {

  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
*/
