import React, { Component } from "react";
import "./App.css";
import SvgDefs from "./components/SvgDefs";
import SpacesList from "./components/SpacesList";
import Main from './components/Main';
import 'list.js';

class App extends Component {
  
  
  render() {
    return (
      <div>
        <SvgDefs />
        <div className="container">
          <Main />
          <SpacesList />
        </div>
      </div>
    );
  }
}

export default App;
