// import combineReducers from redux
// import PostsReducer from reducer_posts
// import reducer from redux-form, import as formReducer

// create const rootReducer set to call to combineReducers 
	// assign posts piece of state to PostsReducer
	// assign formReducer to key form

// export default rootReducer

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
	posts: PostsReducer,
	form: formReducer
});

export default rootReducer;
