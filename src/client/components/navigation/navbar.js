import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import React, { Component } from 'react';
import NavbarDrop from './navDropdown';
import { Link } from 'react-router'
import { StyleSheet, css } from 'aphrodite';

class Navbar extends Component {

  render() {

    return(
      <div className={css(styles.containerDiv)}>
        <Nav className={css(styles.nav)} bsStyle="pills" activeKey={this.props.active} >
          <NavItem className={activeOrNot(this.props, 1)} eventKey="1" ><Link to="/">{this.props.one}</Link></NavItem>
          <NavItem className={activeOrNot(this.props, 2)} eventKey="2"><Link to="/blog">{this.props.two}</Link></NavItem>
          <NavItem className={activeOrNot(this.props, 3)} eventKey="3"><Link to="/about">{this.props.three}</Link></NavItem>
          <NavbarDrop className={css(styles.dropDown)} link1="Twitter" link2="LinkedIn" link3="Soundcloud" link4="Github" />
        </Nav>
      </div>
      )
  }
}

function activeOrNot(props, num) {
  return String(props.active) === num ? css(styles.tabActive) : css(styles.tab)
}

const styles = StyleSheet.create({
  '.containerDiv_1hvvrpf': {
    color:'pink',
    backgroundColor: '#2c3e50',
    position: 'fixed',
    top: '0',
    left: '0'

  },
  '#app > div > div.containerDiv_1sjvkvp > ul > li.tab_9qu3n0.active > a': {
    backgroundColor: 'pink',
    textDecoration: 'none !important'
  },
  nav: {
    width:'15%',
    display: 'inline',
    backgroundColor: '#2c3e50'
  },
  '.a':{
    textDecoration: 'none !important'
  },
  '.a:hover': {
    textDecoration: 'none !important'
  },
  containerDiv: {
    color: 'pink',
    width: '100%',
    display:'inline-block',
    fontSize: '25px',
    backgroundColor: '#2c3e50'
  },
  tab: {
    color: 'pink',
    backgroundColor: '#2c3e50'
  },
  tabActive: {
    backgroundColor: '#2c3e50',
    color: 'blue'
  },
  dropDown: {
    float: 'right',
    textAlign: 'right',
    paddingLeft: '50%'
  }
})

export default Navbar;
