import { FETCH_POSTS, ADD_POST } from './types';

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => 
        dispatch({
          type: FETCH_POSTS,
          payload: posts
        })
    );
};

export const createPost = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', 
    {
      method: 'POST',
      headers: {
        'content-type': 'aplication/json'
      },
        body: JSON.stringify(postData)
    })
      .then(response => response.json())
      .then(post => 
        dispatch({
          type: ADD_POST,
          payload: {
            id: post.id,
            title: postData.title,
            body: postData.body 
          }
        })
    );
};
