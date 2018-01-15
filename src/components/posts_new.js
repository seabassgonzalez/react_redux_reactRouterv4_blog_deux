// import React and Component from react
// import Field and reduxForm from redux-form

// class PostsNew extends Component
	// render
		// return
			// form
				// Field component with name property

// export default redux form helper to connect component to reducer, first arument object key property form set to unique string, second argument PostsNew

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component{
	render(){
		return(
			<form>
				<Field
					name="title"
					component={}
				/>
			</form> // comment to clean up syntax highlighting
		);
	}
}

export default reduxForm({
	form: 'PostsNewForm'
})(PostsNew);