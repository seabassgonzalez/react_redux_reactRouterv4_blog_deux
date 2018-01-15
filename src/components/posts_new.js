// import React and Component from react
// import Field and reduxForm from redux-form

// class PostsNew extends Component
	// create function renderTitleField to return jsx, take argument field with event handlers we need to wire up to jsx we're returning to field component
		// return
			// div bootstrap className form-group
				// Label Title
				// input with property {...field.input} bootstrap className form-control
	// create renderTagsField function
		// return
			// div
				// label title
				// input
	// render
		// return
			// form
				// Field component with 
					// name property set to title
					// component property set to a function that returns jsx - will refer to callback and put function above renderTitleField
				// Field component with 
					// name property set to tags
					// component property set to a function that returns jsx - will refer to callback and put function above renderTagsField

// export default redux form helper to connect component to reducer, first arument object key property form set to unique string, second argument PostsNew

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component{
	renderTitleField(field){
		return(
			<div className="form-group">
				<label>Title</label>
				<input
					className="form-control"
					type="text"
					{...field.input}
				/>
			</div> // comment to clear syntax highlighting
		);
	}
	renderTagsField(){
		
	}
	render(){
		return(
			<form>
				<Field
					name="title"
					component={this.renderTitleField}
				/>
				<Field
					name="tags"
					component={this.renderTagsField}
				/>
			</form> // comment to clean up syntax highlighting
		);
	}
}

export default reduxForm({
	form: 'PostsNewForm'
})(PostsNew);