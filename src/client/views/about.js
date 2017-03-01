/**
 * Created by Grant on 10/28/16.
 */
import React, {Component} from 'react';
import Paragraph from '../components/blurbs/paragraph';
import Navbar from '../components/navigation/navbar';


export default class About extends Component {
  render() {
    return (
      <div>
        <Navbar one="Home" two="Blog" three="About" active="3"/>
        <h1>Testing, man.</h1>
        <Paragraph text="ABOUT ME!"/>
        <Paragraph text="This is ALL ABOUT ME"/>
      </div>
    );
  }
}
