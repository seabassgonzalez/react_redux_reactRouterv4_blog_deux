// import React and Component from react
// import connect from react-redux
// import fetchPost action creator from actions

// create class PostsShow extending Component
	// render
		// return	
			// div simply saying Post Show

// export default use connect()(PostsShow)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
	render(){
		return(
			<div>
				Posts Show
			</div>
		);
	}
}

export default connect(null, { fetchPost })(PostsShow);