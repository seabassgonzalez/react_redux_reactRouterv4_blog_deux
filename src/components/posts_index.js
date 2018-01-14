// import React and Component from react
// import connect from react-redux
// import fetchPosts action creator from /actions
// import _ from lodash

// class PostsIndex extends Component
	// use componentDidMount lifecycle method as will be called as soon as rendered to dom            
	// renderPosts
		// returns map over object containing posts using lodash, function that takes each post and makes an li for each
			// li className list-group-item key set to reference to post.id
				// reference to post.title
	// render
		// return
			// div 
				// h3 Posts
					// ul
						// call to helper function this.renderPosts()

// define mapStateToProps function to consume application level state
	// return posts: from state.posts

// export default connect mapStateToProps, {fetchPosts} PostsIndex instead of using mapDispatchToProps

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostsIndex extends Component {
	componentDidMount(){
		this.props.fetchPosts();
	}
	renderPosts(){
		return _.map(this.props.posts, post => {
			return(
				<li className="list-group-item" key={post.id}>
					{post.title}
				</li> // comment to clean up syntax highlighting
			);
		});
	}
	render(){
		console.log('posts are: ', this.props.posts);
		return(
			<div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div> // comment to clean up syntax highlighting
		);
	}
}

function mapStateToProps(state){
	return {
		posts: state.posts
	};
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);