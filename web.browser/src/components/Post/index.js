import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import 'url-search-params-polyfill';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';

const Post = ({ post, updateVote, categoryChips}) => (
  <Card key={post.id} style={{ width: '950px', padding: '10px', margin: '20px', position: 'relative' }} >
    <CardTitle titleStyle={{ color: 'darkblue'}} style={{padding: '0px'}} title={ post.title } />
    <p style={{ padding: '0' }} >{ post.description }</p>
    <div style={{ display: 'inline-block', width: '80%' }}>
      <FlatButton onClick={() => updateVote(post.id)} >
        &#x21e7;
        Vote {post.votes}
      </FlatButton>
      <Chip style={{ float: 'right', marginRight: '10px' }} >{post.tag}</Chip>
    </div>
    
  </Card>
)

export default Post;
