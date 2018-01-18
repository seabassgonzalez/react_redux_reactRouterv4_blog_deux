// import React and Component from react
// import connect from react-redux
// import fetchPost action creator from actions

// create class PostsShow extending Component
	// use componentDidMount lifecycle method so renders at right time
		// access prop from react-router -- this.props.match.params.id
		// use this.props.fetchPost() to call fetchPost on props
	// render
		// return	
			// div simply saying Post Show

// define mapStateToProps function so we can use post off application level state to be used in component -- called with state object, posts piece of state in particular
	// 

// export default use connect()(PostsShow)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
	componentDidMount(){
		this.props.match.params.id;
		this.props.fetchPost();
	}
	render(){
		return(
			<div>
				Posts Show
			</div>
		);
	}
}

function mapStateToProps({ posts }){

}

export default connect(null, { fetchPost })(PostsShow);