// import FETCH_POSTS from actions

// export default function taking state defaulting it to an object and an action
	// switch statement for action types
		// FETCH_POSTS
			// 
		// default case
			// return state object

import { FETCH_POSTS } from '../actions';

export default function(state = {}, action){
	switch(action.type){
		case FETCH_POSTS:
			console.log(action.payload.data);
		default:
			return state;
	}
}