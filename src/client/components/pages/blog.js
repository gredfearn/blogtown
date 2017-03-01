/**
 * Created by Grant on 10/28/16.
 */
import React, {Component} from 'react';
import Paragraph from '../blurbs/paragraph';
import Navbar from '../navigation/navbar';
import request from 'superagent';
// import config from '../../../config';

export default class Blog extends Component {
  componentDidMount() {
      request
        .get('http://localhost:8000/blog/getBlogs')
        .query({db:'test'})
        .end((err, result) => {
          if(err) {
            return console.log('ERROR!', err);
          }
          console.log('RESULT>DATA', result.body.data)

          return result;
        })
        .then( result => {
          this.setState({
            blog: result.body.data[0]
          })
        })
  }

  render() {
    const { blog } = this.state.blog;

    return (
      <div>
        <Navbar one="Home" two="Blog" three="About" active="2"/>
        <h1>Testing, man.</h1>
        <Paragraph text={blog.title}/>
        <Paragraph text={blog.author}/>
      </div>
    );
  }
}


