import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import React, {Component} from 'react';
import NavbarDrop from './navDropdown';
import { Link } from 'react-router'

class Navbar extends Component {

  render() {
    return(
      <Nav bsStyle="tabs" activeKey={this.props.active}>
        <NavItem eventKey="1"><Link to="/">{this.props.one}</Link></NavItem>
        <NavItem eventKey="2"><Link to="/blog">{this.props.two}</Link></NavItem>
        <NavItem eventKey="3"><Link to="/about">{this.props.three}</Link></NavItem>
        <NavbarDrop link1="Twitter" link2="LinkedIn" link3="Soundcloud" link4="Github" />
      </Nav>
      )
  }
}


export default Navbar;
