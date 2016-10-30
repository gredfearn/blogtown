import React, {Components} from 'react';
import {Image} from 'react-bootstrap';

export default class Avatar extends React.Component{
  render() {
    return (
      <Image src="/assets/pizza.jpg" responsive />
    )
  }
}
