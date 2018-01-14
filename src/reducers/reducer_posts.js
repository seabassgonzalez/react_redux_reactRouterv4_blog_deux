// import FETCH_POSTS from actions

// export default function taking state defaulting it to an object and an action
	// switch statement for action types
		// FETCH_POSTS
			// return _.mapKeys on array action.payload.data, use id prop to create id
		// default case
			// return state object

import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action){
	switch(action.type){
		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, 'id');
		default:
			return state;
	}
}