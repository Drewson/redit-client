import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';

const styles = {
    padding: '6px 0 0 0'
}

const PostToolBar = ({ sortByUpvotes, sortByDate }) => ( 
    <Toolbar className='postToolBar' style={{ justifyContent: 'flex-end', position: 'relative' }} >
        <ToolbarTitle text="Posts"  style={{ position: 'absolute', left: '50px', color: 'grey' }}/>
        <p style={{ color: 'grey' }} >Sort:</p>
        <FlatButton style={styles} label="Newest" onTouchTap={() => sortByDate()} />
        <FlatButton style={styles} label="Popular" onTouchTap={() => sortByUpvotes()} />
    </Toolbar>
 );

export default PostToolBar;