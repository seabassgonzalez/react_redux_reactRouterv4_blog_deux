// import axios from axios

// export const FETCH_POSTS stores fetch_posts string

// create const to hold root url
// create const to hold api key

// export first action creator fetchPosts function
	// const request set to axios.get and use redux blog api info to fill template url
	// return
		// type FETCH_POSTS
		// payload set to request

import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=SEABASSGONZALEZ01';

export function fetchPosts(){
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
	return{
		type: FETCH_POSTS,
		payload: request
	};
}