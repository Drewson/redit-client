import React, { Component } from 'react';
import PostList from './PostList';
import PostToolBar from '../../components/PostToolBar'
import Chip from 'material-ui/Chip';
import { updateVote, sortByDate, sortByUpvotes } from '../../redux/actions';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';




class PostListContainer extends Component {

    constructor(){
        super();
        this.updateVote = this.updateVote.bind(this);
        this.sortByDate = this.sortByDate.bind(this);
        this.sortByUpvotes = this.sortByUpvotes.bind(this);
    }

    sortByDate() {
        this.props.dispatch(sortByDate());
    }

    sortByUpvotes(){
        this.props.dispatch(sortByUpvotes());
    }

    updateVote( postId ){
        if ( postId ) this.props.dispatch(updateVote(postId));
    }

    categoryChips( category ){
        return <Chip key="category" style={{ position:'absolute', right: '50px', bottom: '20px' }} >{ category }</Chip>
    }

    render() {
        return ( 
            <div>
                <PostToolBar
                    sortByDate={this.sortByDate}
                    sortByUpvotes={this.sortByUpvotes}
                />
                <PostList
                    posts={this.props.posts}
                    categoryChips={this.categoryChips}
                    updateVote={this.updateVote}
                />
            </div>
        )
    }
};


function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

PostListContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(PostListContainer);