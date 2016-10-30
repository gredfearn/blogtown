import {NavDropdown, MenuItem} from 'react-bootstrap';
import React, {Component} from 'react';

class NavbarDrop extends Component {

  render() {
    return(
        <NavDropdown eventKey="4" title="Links" id="nav-dropdown">
          <MenuItem eventKey="4.1" href="https://twitter.com/grantredfearn">{this.props.link1}</MenuItem>
          <MenuItem eventKey="4.2" href="https://www.linkedin.com/in/gredfearn">{this.props.link2}</MenuItem>
          <MenuItem eventKey="4.3" href="https://soundcloud.com/jockabird">{this.props.link3}</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4.4" href="https://github.com/gredfearn">{this.props.link4}</MenuItem>
        </NavDropdown>
    )
  }
}

export default NavbarDrop;
