// import React and Component from react
// import Field and reduxForm from redux-form

// class PostsNew extends Component
	// create function renderTitleField to return jsx, take argument field with event handlers we need to wire up to jsx we're returning to field component
		// return
			// div
				// input with property {...field.input}
	// render
		// return
			// form
				// Field component with 
					// name property
					// component property set to a function that returns jsx - will refer to callback and put function above

// export default redux form helper to connect component to reducer, first arument object key property form set to unique string, second argument PostsNew

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component{
	renderTitleField(field){
		return(
			<div>
				<input
					{...field.input}
				/>
			</div> // comment to clear syntax highlighting
		);
	}
	render(){
		return(
			<form>
				<Field
					name="title"
					component={this.renderTitleField}
				/>
			</form> // comment to clean up syntax highlighting
		);
	}
}

export default reduxForm({
	form: 'PostsNewForm'
})(PostsNew);