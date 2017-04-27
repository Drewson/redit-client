import { data } from '../mock-data';
import {
    SORT_BY_DATE,
    SORT_BY_UPVOTE,
    UPDATE_VOTE
} from './actions';


export function PostsReducer(state = data.posts, action) {
  switch (action.type) {
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

export function WeeksReducer(state = data.weeks, action) {
  switch (action.type) {     
      default:
        return state;
    }
}
