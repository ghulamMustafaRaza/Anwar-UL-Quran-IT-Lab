import React, { Component } from 'react';
import {  } from 'firebase'
import { AppBar } from 'material-ui'
import Tabs from './components/Tabs'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <AppBar title="Anwar-UL-Quran-IT-Lab" />
      </div>
    );
  }
}

export default () => (
  <Router>
    <div>
      <App/>
      <Route exact path="/" component={Tabs}/>
    </div>
  </Router>
);
