// import React from react
// import ReactDOM from react-dom
// import Provider from react-redux
// import createStore and applyMimddleware from redux
// import BrowserRouter Route from react-router-dom

// import PostsIndex from components/posts_index
// import reducers from reducers

// create const createStoreWithMiddleware set to applyMiddleware() call passing in createStore			

// ReactDOM.render
	// provider component with store property set to object callback to createStoreWithMiddleware passing reducers
		// BrowserRouter component
			// single child div
				// Routes
	// second argument to .render being location to render to

	
	
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import PostIndex from './components/posts_index';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	<BrowserRouter>
  		<div>
  			<Route path="/" component={PostsIndex} />
	  	</div>
  	</BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
	