// export const FETCH_POSTS stores fetch_posts string

// export first action creator fetchPosts function
	// return
		// type FETCH_POSTS
		// payload

export const FETCH_POSTS = 'fetch_posts';

export function fetchPosts(){
	return{
		type: FETCH_POSTS
	};
}