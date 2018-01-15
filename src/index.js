// import React and Component from react
// import ReactDOM from react-dom
// import Provider from react-redux
// import createStore and applyMiddleware from redux
// import BrowserRouter - to decide what aspects of url inform components to render - Route component that provides configuration for url component-connection from react-router-dom, and Switch component to manage collection of routes
// import promise from redux-promise

// import reducers
// import PostsIndex from './components/posts_index'
// import PostsNew from components/posts_new

// create const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

// ReactDOM.render
	// Provider store object - createStoreWithMiddleware(reducers)
		// BrowserRouter component
		  // single div child
		  	// Switch component wrapper to manage routes
		        // route for / showing PostsIndex component
		        // route for new Posts showing PostsNew component
	// at DOM container component

	
	
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	<BrowserRouter>
  		<div>
  			<Switch>
	  			<Route path="/posts/new" component={PostsNew} />
	  			<Route path="/" component={PostsIndex} />
	  		</Switch>
	  	</div>
  	</BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
	