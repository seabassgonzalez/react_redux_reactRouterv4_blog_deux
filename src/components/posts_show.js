// import React and Component from react
// import connect from react-redux
// import fetchPost action creator from actions
// import Link from react-router-dom

// create class PostsShow extending Component
	// use componentDidMount lifecycle method so renders at right time
		// access prop from react-router -- this.props.match.params.id -- save as a const
		// use this.props.fetchPost() to call fetchPost on props specifically id object just made
	// render
		// create const post = this.props since we access it often, destructured
		// first check if post has been passed -- allows for promise to resolve without immediately trying to render a property of something that does not exist-- will rerender when available
			// if not return a div that says loading
		// return	
			// div 
				// Link component to return to root /, style with bootstrap as button
				// h3 post.title
				// h6 Categories: post.categories
				// p post.content

// define mapStateToProps function so we can use post off application level state to be used in component -- called with state object, posts piece of state in particular, second argument is ownProps === component's this.props
	// return object where post set to specific posts[ownProps.match.params.id]	

// export default use connect()(PostsShow)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
	componentDidMount(){
		const { id } = this.props.match.params; // props.match.params available from react-router -- identical to const id = this.props.match.params.id
		this.props.fetchPost(id); // made accessible by connect below
	}
	render(){
		// this.props === ownProps, so can access in mapStateToProps as ownProps, called that by convention
		const { post } = this.props;
		if(!post){
			return <div>Loading...</div>; // comment to clear up syntax highlighting
		}
		return(
			<div>
				<Link to="/" className="btn btn-primary">Back to Index</Link>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div> // comment to clear up syntax highlighting
		);
	}
}

function mapStateToProps({ posts }, ownProps){
	return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);