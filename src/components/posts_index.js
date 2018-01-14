// import React and Component from react
// import connect from react-redux
// import fetchPosts action creator from /actions

// class PostsIndex extends Component
	// use componentDidMount lifecycle method as will be called as soon as rendered to dom            
	// render
		// return
			// div simple placeholder text

// define mapStateToProps function to consume application level state
	// return posts: from state.posts

// export default connect mapStateToProps, {fetchPosts} PostsIndex instead of using mapDispatchToProps

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
	componentDidMount(){
		this.props.fetchPosts();
	}
	render(){
		console.log('posts are: ', this.props.posts);
		return(
			<div>Posts Index</div> // comment to clean up syntax highlighting
		);
	}
}

function mapStateToProps(state){
	return {
		posts: state.posts
	};
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);