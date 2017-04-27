import React from 'react';
import Post from './../../components/Post';


const PostList = ({ posts, updateVote, categoryChips }) => {
    
    return ( 
      <div> 
             <div>
                {posts.map(( post, i ) => 
                ( <Post 
                    categoryChips={categoryChips}
                    post={post}
                    key={Date.now() + i}
                    updateVote={updateVote}
                    /> 
                ))}
            </div>
      </div>
    )    
}


export default PostList;

