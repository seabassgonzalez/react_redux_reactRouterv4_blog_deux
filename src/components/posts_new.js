// import React and Component from react
// import Field and reduxForm from redux-form

// class PostsNew extends Component
	// create function renderField to return jsx, take argument field with event handlers we need to wire up to jsx we're returning to field component
		// save const className string for styling only when touched and error -- template form-group ${field.meta.touched && field.meta.error} ternary to use either has-danger or nothing, an empty string
		// return
			// div bootstrap className form-group and has-danger
				// Label Title
				// input with property {...field.input} bootstrap className form-control
			// div bootstrap className text-help to style as red
				// reference meta.error property automatically added to field object from validate function, reference it here to show errors
				// can implement a ternary expression checking if field.meta has been touched, render field.meta.error if so, empty string if not
	// create function onSubmit called with object values
		// console.log values to check values		
	// render
		// return
			// create const to store object handleSubmit set to this.props
			// form with onSubmit property set to an object with handleSubmit passed in, pass call to this.onSubmit.bind(this)
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
		const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;
		const inputClassName = `form-control ${field.meta.touched && field.meta.error ? 'form-control-danger is-invalid' : ''}`;
		return(
			<div className={className}>
				<label className="form-control-label">{field.label}</label>
				<input
					className={inputClassName}
					type="text"
					{...field.input}
				/>
				<div className="invalid-feedback">
					{field.meta.touched ? field.meta.error : ''}
				</div>
			</div> // comment to clear syntax highlighting
		);
	}
	onSubmit(values){
		console.log(values);
	}
	render(){
		const { handleSubmit } = this.props;
		return(
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
	// if errors is empty, form fine to submit, otherwise redux assums invalid
	return errors;
}

export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(PostsNew);