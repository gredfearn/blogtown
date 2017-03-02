import React, {Component} from 'react';
import Paragraph from '../components/blurbs/paragraph';
import Navbar from '../components/navigation/navbar';
import request from 'superagent';
import AppActions from '../actions/App.actions';
import Store from '../store/App.store';

const Blog = React.createClass({

  getInitialState() {
    return Store.getState();
  },

  componentWillMount() {
    AppActions.getBlogPosts();
    Store.addChangeListener(this._onChange);
  },

  _onChange() {
    this.setState({blogs: this.state.blogs});
  },

  componentWillUnmount() {
    Store.removeChangeListener(this._onChange);
  },


  render() {
    const { blogs } = this.state;
    if(blogs && blogs.length) {
      return (
        <div>
          <Navbar one="Home" two="Blog" three="About" active="2"/>
          <Paragraph blogs={blogs}/>
        </div>
      )
    } else {
      return (
        <div>
          <h1>LOADING</h1>
        </div>
        )
    }
  }
});

module.exports = Blog;
