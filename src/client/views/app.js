import React, {Component} from 'react';
import Paragraph from '../components/blurbs/paragraph';
import Navbar from '../components/navigation/navbar';
import MainHeader from '../components/headers/main';
// import Avatar from '../images/avatar';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar one="Home" two="Blog" three="About" active="1" />
        <MainHeader head="Grant Redfearn" subtext="Software Developer"/>
        <p>"This is the first bit of stuff"</p>
        <p>"This could be used to make another paragraph"</p>
      </div>
    );
  }
}


