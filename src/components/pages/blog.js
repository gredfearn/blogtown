/**
 * Created by Grant on 10/28/16.
 */
import React, {Component} from 'react';
import Paragraph from '../blurbs/paragraph';
import Navbar from '../navigation/navbar';


export default class Blog extends Component {
  render() {
    return (
      <div>
        <Navbar one="Home" two="Blog" three="About" active="2"/>
        <h1>Testing, man.</h1>
        <Paragraph text="This is blog stuff"/>
        <Paragraph text="This is even more blog stuff"/>
      </div>
    );
  }
}


