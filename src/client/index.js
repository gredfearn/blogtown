import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './views/app';
import Blog from './views/blog';
import About from './views/about';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/blog" component={Blog}/>
    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('app'));

