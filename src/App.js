import React,{Component} from 'react';

import Navbar from "./components/layouts/Navbar";


import './App.css';

class App extends Component{
  render(){
    return (
        <div className="App">
         <Navbar title="Github Finder" icon="fab fa-github"></Navbar>
        </div>
    );
  }
}

export default App;
