// import React and Component from react
// import Field and reduxForm from redux-form

// class PostsNew extends Component
	// create function renderField to return jsx, take argument field with event handlers we need to wire up to jsx we're returning to field component
		// return
			// div bootstrap className form-group
				// Label Title
				// input with property {...field.input} bootstrap className form-control
			// reference meta.error property automatically added to field object from validate function, reference it here to show errors
	// render
		// return
			// form
				// Field component with 
					// label Post Title
					// name property set to title
					// component property set to a function that returns jsx - will refer to callback and put function above renderTitleField
				// Field component with 
					// label Categories
					// name property set to categories
					// component property set to a function that returns jsx - will refer to callback and put function above renderTagsField
				// Field component with 
					// label Post Content
					// name property set to tags
					// component property set to a function that returns jsx - will refer to callback and put function above renderTagsField
				// button type submit classname btn btn-primary value Submit
// create function validate to pass to reduxForm helper, takes argument values
	// const error set to an empty object
	//  if no values.title -- validate the inputs from values -- can add stipulations like string length
		// set errors.title to a message
	//  if no values.categories -- validate the inputs from values
		// set errors.categories to a message
	//  if no values.content -- validate the inputs from values
		// set errors.content to a message
	// return error object, if empty form can submit, otherwise fails validation
// export default redux form helper to connect component to reducer, first arument object key property validate set to validate, and form set to unique string, second argument PostsNew

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component{
	renderField(field){
		return(
			<div className="form-group">
				<label>{field.label}</label>
				<input
					className="form-control"
					type="text"
					{...field.input}
				/>
				{field.meta.error}
			</div> // comment to clear syntax highlighting
		);
	}
	render(){
		return(
			<form>
				<Field
					label="Post Title"
					name="title"
					component={this.renderField}
				/> 
				<Field
					label="Categories"
					name="categories"
					component={this.renderField}
				/>
				<Field
					label="Post Content"
					name="content"
					component={this.renderField}
				/>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form> // comment to clean up syntax highlighting
		);
	}
}
// whenever user submits for, presses enter for example, validate will be called
// console logging values would return an object with key title categories and post content and corresponding values
function validate(values){
	const errors = {};
	if(!values.title || values.title.length < 3){
		errors.title = "Enter a title that is at least 3 characters";
	}
	if(!values.categories){
		errors.categories = "Enter some categories";
	}
	if(!values.content){
		errors.content = "Enter some content";
	}
}

export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(PostsNew);