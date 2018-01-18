// import FETCH_POSTS and FETCH_POST from actions

// export default function taking state defaulting it to an object and an action
	// switch statement for action types
		// FETCH_POST
			// return state object ...state to save posts, use key interpolation with [] make action.payload.id into object with key to id and set value to action.payload.data
		// FETCH_POSTS
			// return _.mapKeys on array action.payload.data, use id prop to create id
		// default case
			// return state object

import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state = {}, action){
	switch(action.type){
		case FETCH_POST:
			return { ...state, [action.payload.data.id] : action.payload.data };
		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, 'id');
		default:
			return state;
	}
}