// import combineReducers from redux
// import PostsReducer from reducer_posts

// create const rootReducer set to call to combineReducers 
	// assign posts piece of state to PostsReducer

// export default rootReducer

import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
	posts: PostsReducer
});

export default rootReducer;
