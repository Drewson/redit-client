import React from 'react';
import Post from './../../components/Post';

const PostList = ({ posts, updateVote, tags }) => {
  return ( 
    <div>
      {
        posts.map((post, i) => (
          <Post
            tags={tags}
            post={post}
            key={Date.now() + i}
            updateVote={updateVote}
          />
        ))
      }
    </div>
  );
};

export default PostList;

