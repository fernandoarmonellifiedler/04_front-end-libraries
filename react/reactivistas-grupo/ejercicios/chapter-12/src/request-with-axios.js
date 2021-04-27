// API request with Axios
import axios from 'axios';

axios
  .get(`http://www.reddit.com/r/reactjs.json`)
  .then((response) => {
    const posts = response.data.data.children.map((obj) => obj.data);
    console.log(posts);
  })
  .catch((error) => {
    console.error(error);
  });
