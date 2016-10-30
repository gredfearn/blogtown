/**
 * Created by Grant on 10/28/16.
 */
import {PageHeader, small} from 'react-bootstrap';
import React, {Component} from 'react';

export default class MainHeader extends React.Component{
  render(){
    return (
      <PageHeader>
        <em>{this.props.head}</em>
        <br/>
        <small>{this.props.subtext}</small>
      </PageHeader>
    )
  }
}
