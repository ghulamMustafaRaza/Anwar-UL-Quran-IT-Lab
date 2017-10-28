import React, { Component } from 'react'
import {  } from 'material-ui'

export default class Private extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };
  
  render() {
    return (
      <div>
        <h1>Private</h1>
      </div>
    )
  }
}
