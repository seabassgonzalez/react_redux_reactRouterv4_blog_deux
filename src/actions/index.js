// import axios from axios

// action types stored
// export const FETCH_POSTS stores fetch_posts string
// export const FETCH_POST to store fetch_post string type
// export const CREATE_POST to store create_post string

// create const to hold root url
// create const to hold api key

// export first action creator fetchPosts function
	// const request set to axios.get and use redux blog api info to fill template url
	// return
		// type FETCH_POSTS
		// payload set to request

// export function createPost receiving values object-- the blog post with title categories and content-- and callback so that it calls callback manually when completed using a promise 
	// make request to api with axios
		// return an action
			// type
			// payload holds request

// export function fetchPost receiving an id for a particular post
	// make axios get request to api to get particular post info
		// return
			// type
			// payload

import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
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

export function createPost(values, callback){
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
		.then(() => callback());
	return{
		type: CREATE_POST,
		payload: request
	};
}

export function fetchPost(id){
	const requst = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
	return{
		type: FETCH_POST,
		payload: request
	};
}