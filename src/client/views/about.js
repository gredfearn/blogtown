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
        <h2> text="ABOUT ME!"</h2>
        <h2> text="This is ALL ABOUT ME"</h2>
      </div>
    );
  }
}
