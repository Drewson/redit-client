import React from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import 'url-search-params-polyfill';
import FlatButton from 'material-ui/FlatButton';

const Post = ({ post, updateVote, categoryChips}) => (
  <Card style={{ width: '950px', padding: '10px', margin: '20px', position: 'relative' }} >
    <CardTitle titleStyle={{ color: 'darkblue'}} style={{padding: '0px'}} title={ post.title } />
    <p style={{padding: '0'}} >{ post.description }</p>
    <div style={{ display: 'inline-block', width: '80%' }}>
      <FlatButton onClick={() => updateVote( post.id )} >
        &#x21e7;
        Vote {post.votes}
      </FlatButton> 
    </div>
    <div>
      {post.categories.map( categoryChips )}
    </div>
  </Card>
)

export default Post;