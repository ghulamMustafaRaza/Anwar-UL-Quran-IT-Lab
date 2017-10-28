import React,{Component} from 'react'

import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from './NavBar';
import Signin from './Signin';
import Signup from './Signup';
import User from './User';
import Tabs from './Tabs';

export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return(
            <Router>
                <div>
                    <NavBar/>
                    <Route exact path="/" component={Tabs} />
                    <Route path="/signin" component={Signin} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/user" component={User} />
                </div>
            </Router>
        )
    }
} 