import React, { Component } from 'react';
import WeatherInfo from './WeatherInfo';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
