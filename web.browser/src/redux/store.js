import { createStore, combineReducers, applyMiddleware } from 'redux';
import { WeeksReducer, PostsReducer } from './reducer';
import thunk from 'redux-thunk'



const store = createStore(
    combineReducers({
        posts: PostsReducer,
        weeks: WeeksReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)

export default store;
