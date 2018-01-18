// import React and Component from react
// import connect from react-redux
// import fetchPost action creator from actions

// create class PostsShow extending Component
	// use componentDidMount lifecycle method so renders at right time
		// access prop from react-router -- this.props.match.params.id -- save as a const
		// use this.props.fetchPost() to call fetchPost on props specifically id object just made
	// render
		// posts[this.props.match.params.id]
		// return	
			// div simply saying Post Show

// define mapStateToProps function so we can use post off application level state to be used in component -- called with state object, posts piece of state in particular
	// return { posts }

// export default use connect()(PostsShow)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
	componentDidMount(){
		const { id } = this.props.match.params.id;
		this.props.fetchPost(id);
	}
	render(){
		posts[this.props.match.params.id]
		return(
			<div>
				Posts Show
			</div>
		);
	}
}

function mapStateToProps({ posts }){
	return { posts };
}

export default connect(null, { fetchPost })(PostsShow);