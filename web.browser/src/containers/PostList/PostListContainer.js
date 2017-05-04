import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Chip from 'material-ui/Chip';
import PostList from './PostList';
import PostToolBar from '../../components/PostToolBar';
import { updateVote, sortByDate, sortByUpvotes, getPosts } from '../../redux/actions';




class PostListContainer extends Component {

    constructor(){
        super();
        this.updateVote = this.updateVote.bind(this);
        this.sortByDate = this.sortByDate.bind(this);
        this.sortByUpvotes = this.sortByUpvotes.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getPosts(2));
    }

    sortByDate() {
        this.props.dispatch(sortByDate());
    }

    sortByUpvotes() {
        this.props.dispatch(sortByUpvotes());
    }

    updateVote(postId) {
        if (postId) this.props.dispatch(updateVote(postId));
    }

    categoryChips(category, i) {
        return <Chip key={category.title + i} style={{ float: 'right', marginRight: '10px' }} >{ category.title }</Chip>;
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
        );
    }
}


function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

PostListContainer.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(PostListContainer);