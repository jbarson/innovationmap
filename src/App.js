import React, { Component } from 'react';
import './App.css';
import SvgDefs from './components/SvgDefs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SvgDefs />
        <div className="surroundings">
					<img className="surroundings__map" src="img/surroundings.svg" alt="Surroundings" />
				</div>
      </div>
    );
  }
}

export default App;
