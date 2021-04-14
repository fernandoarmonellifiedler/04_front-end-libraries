// fetch posts from Reddit
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class ErrorCatcher extends React.Component {
  state = { error: null };
  
  componentDidCatch(error, info) {
    this.setState({ error: info.componentStack });
  }

  render() {
    if (this.state.error) {
      return <div>An error ocurred: {this.state.error}</div>;
    }

    return this.props.children;
  }
}

class Reddit extends React.Component {
  state = {
    posts: null,
  };

  componentDidMount() {
    axios
      .get(`https://www.reddit.com/r/${this.props.subreddit}.json`)
      // .then((res) => {
      //   if (res.ok) {
      //     return res.json();
      //   }
      //   throw new Error('Request failed');
      // })
      .then((res) => {
        // if (res.status === 200) {
          const posts = res.data.data.children.map((obj) => obj.data);
          this.setState({ posts });
        // }
        // throw new Error('Request failed');
      })
      .catch((error) => {
        // console.log(error.message);
        this.setState({
          error: true,
        });
      });
  }

  render() {
    if (this.state.error) {
      throw new Error('There was a problem')
    }

    const { posts } = this.state;

    return (
      <div>
        <h1>{`/r/${this.props.subreddit}`}</h1>
        {posts ? (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}

ReactDOM.render(
  <ErrorCatcher>
    <Reddit subreddit='reacstjs' />
  </ErrorCatcher>,
  document.querySelector('#root')
);
