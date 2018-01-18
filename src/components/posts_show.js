// import React and Component from react
// import connect from react-redux
// import fetchPost action creator from actions

// create class PostsShow extending Component
	// use componentDidMount lifecycle method so renders at right time
		// access prop from react-router -- this.props.match.params.id -- save as a const
		// use this.props.fetchPost() to call fetchPost on props specifically id object just made
	// render
		// return	
			// div simply saying Post Show

// define mapStateToProps function so we can use post off application level state to be used in component -- called with state object, posts piece of state in particular, second argument is ownProps === component's this.props
	// return object where post set to specific posts[ownProps.match.params.id]	

// export default use connect()(PostsShow)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
	componentDidMount(){
		const { id } = this.props.match.params.id; // props.match.params available from react-router
		this.props.fetchPost(id); // made accessible by connect below
	}
	render(){
		// this.props === ownProps, so can access in mapStateToProps as ownProps, called that by convention
		return(
			<div>
				Posts Show
			</div> // comment to clear up syntax highlighting
		);
	}
}

function mapStateToProps({ posts }, ownProps){
	return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);