import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/pages/app';
import Blog from './components/pages/blog';
import About from './components/pages/About';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/blog" component={Blog}/>
    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('app'));

