import React, {Component, Fragment} from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layouts/Alert";

import About from "./components/pages/About";



import axios from 'axios';

import './App.css';

class App extends Component{

    state = {
      users : [],
      loading : false,
        alert :null
    };

    // async componentDidMount() {
    //     this.setState({loading : true});
    //     const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    //     this.setState({users : res.data,loading : false});
    // }


    //search Github Users
    searchUsers = async text => {
        this.setState({loading : true});
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({users : res.data.items,loading : false});
    };

    //clear github user
    clearUsers =  () =>{
        this.setState({users : [],loading : false});
    };
    //set alert
    setAlert= (msg, type) => {
            this.setState({alert : {msg , type}});
          setTimeout(() => this.setState({alert : null}),5000);
    };


    render(){

        const {loading, users} = this.state;
    return (
        <Router>
        <div className="App">
         <Navbar title="Github Finder" icon="fab fa-github"></Navbar>
            <div className="container">
                <Alert alert={this.state.alert}></Alert>
                <Switch>
                    <Route exact path='/' render={props => (
                        <Fragment>
                            <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true : false} setAlert={this.setAlert}></Search>
                            <Users loading={loading} users={users}></Users>
                        </Fragment>
                    )}/>
                    <Route exact path='/about' component={About}/>
                </Switch>

            </div>
        </div>
        </Router>
    );
  }
}

export default App;
