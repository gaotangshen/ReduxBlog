import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import BlogIndex from './containers/blog-index';
import BlogNew from './containers/blog-new';
import BlogShow from './containers/blog-show';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/post/new" component={BlogNew} />
        <Route path="/post/:id" component={BlogShow} />
        <Route path="/" component={ BlogIndex }/>
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
