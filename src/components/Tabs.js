import React, { Component } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import Public from './Public'
import Private from './Private'

export default class Tabss extends Component {
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
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Public" value="a">
          <Public/>
        </Tab>
        <Tab label="Private" value="b">
          <Private/>
        </Tab>
      </Tabs>
    )
  }
}
