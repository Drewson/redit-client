import {
    SORT_BY_DATE,
    SORT_BY_UPVOTE,
    UPDATE_VOTE,
    GET_WEEKS,
    GET_POSTS
} from './actions';


export function PostsReducer(state = [], action) {
  switch (action.type) {
    case GET_POSTS: 
        const posts = action.payload.posts;
        return posts;
    case UPDATE_VOTE:
        return state.map((post) => {
            if (action.id === post.id) post.votes++;
            return post;
        });
    case SORT_BY_DATE:
        let sortedState = [...state]
        return sortedState.sort((a, b) => {
            return b.id - a.id;
        });
    case SORT_BY_UPVOTE:
        sortedState = [...state]
         return sortedState.sort((a, b) => {
            return b.votes - a.votes;
        });
    default:
        return state;
    }
}

export function WeeksReducer(state =[], action) {
  switch (action.type) {    
      case GET_WEEKS:
        const weeks = action.payload.weeks; 
        return weeks; 
      default:
        return state;
    }
}
