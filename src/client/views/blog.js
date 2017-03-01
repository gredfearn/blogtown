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

  componentDidMount() {
    AppActions.getBlogPosts();
    Store.addChangeListener(this._onChange);
    console.log('THIS.STATE', this.state)
  },

  _onChange() {
    this.setState({blogs: Store.getState().blogs});
  },


  render() {
    console.log('THIS.STATE', this.state);
    // const { blog } = this.state.blog;

    return (
      <div>
        <Navbar one="Home" two="Blog" three="About" active="2"/>
        <h1>Testing, man.</h1>
      </div>
    )
  }
});

module.exports = Blog;


