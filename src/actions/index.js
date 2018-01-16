// import axios from axios

// export const FETCH_POSTS stores fetch_posts string
// export const CREATE_POST to store create_post string

// create const to hold root url
// create const to hold api key

// export first action creator fetchPosts function
	// const request set to axios.get and use redux blog api info to fill template url
	// return
		// type FETCH_POSTS
		// payload set to request

// export function createPost receiving values object -- the blog post with title categories and content
	// make request to api with axios
		// return an action
			// type
			// payload holds request

import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=SEABASSGONZALEZ01';

export function fetchPosts(){
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
	return{
		type: FETCH_POSTS,
		payload: request
	};
}

export function createPost(values){
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values);

	return{
		type: CREATE_POST,
		payload: request
	};
}