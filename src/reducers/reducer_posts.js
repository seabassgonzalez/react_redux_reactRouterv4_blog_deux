// import FETCH_POSTS and FETCH_POST from actions

// export default function taking state defaulting it to an object and an action
	// switch statement for action types
		// FETCH_POST
			// save post in const from action.payload.data
			// store state object as newState
			// set post to newState with new property [post.id]
			// return newState
		// FETCH_POSTS
			// return _.mapKeys on array action.payload.data, use id prop to create id
		// default case
			// return state object

import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state = {}, action){
	switch(action.type){
		case FETCH_POST:
			const post = action.payload.data;
			const newState = { ...state };
			newState[post.id] = post;
			return newState;
		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, 'id');
		default:
			return state;
	}
}