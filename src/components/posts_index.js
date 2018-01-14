// import React and Component from react
// import connect from react-redux
// import fetchPosts action creator from /actions

// class PostsIndex extends Component
	// use componentDidMount lifecycle method as will be called as soon as rendered to dom            
	// render
		// return
			// div simple placeholder text

// export default connect null, {fetchPosts} PostsIndex instead of using mapDispatchToProps

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
	componentDidMount(){
		this.props.fetchPosts();
	}
	render(){
		return(
			<div>Posts Index</div>
		);
	}
}

export default connect(null, { fetchPosts })(PostsIndex);