import React, { Component } from 'react';
import {render} from 'react-dom';

class App extends Component {
  render () {
    return <p> Track it out!</p>;
  }
}

render(<App/>, document.getElementById('app'));