import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TitleText from "./TitleText";
import Renderer from "./Renderer";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Renderer />
        <TitleText subtitle="Oops I did it again" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
