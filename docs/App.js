import React, { Component } from 'react';
import timezones from '../src';

class App extends Component {
  render() {
    return (
      <div>
        {JSON.stringify(timezones)}
      </div>
    );
  }
}

export default App;
