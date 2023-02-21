import {Component} from 'react';

import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor() {
    super();
    
    this.state = {
      monsters: [
      {
        name: 'Mon1'
      },
      {
        name: 'Mon2'
      },
      {
        name: 'Mon3'
      }]
    }
  }
  
  render() {
    return (
      <div className="App">
        React !!
        {
          this.state.monsters.map((monsters) => {
            return <h1>monsters.name</h1>
          })
        }
      </div>
    );
  }
}

export default App;
