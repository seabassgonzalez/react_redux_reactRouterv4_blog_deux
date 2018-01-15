// import React and Component from react
// import Field and reduxForm from redux-form

// class PostsNew extends Component
	// render
		// return
			// div new Posts

// export default PostsNew

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component{
	render(){
		return(
			<div>New Posts</div> // comment to clear syntax highlighting
		);
	}
}

export default reduxForm({
	form: 'PostsNewForm'
})(PostsNew);