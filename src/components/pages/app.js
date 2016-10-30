import React, {Component} from 'react';
import Paragraph from '../blurbs/paragraph';
import Navbar from '../navigation/navbar';
import MainHeader from '../headers/main';
// import Avatar from '../images/avatar';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar one="Home" two="Blog" three="About" active="1" />
        <MainHeader head="Grant Redfearn" subtext="Software Developer"/>
        <Paragraph text="This is the first bit of stuff"/>
        <Paragraph text="This could be used to make another paragraph"/>
      </div>
    );
  }
}


