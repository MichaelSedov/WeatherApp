import React, { Component } from 'react';

class WeatherInfo extends React.Component {
  constructor(props) {
    super(props);

  };

  render() {
    var {temp, location} = this.props;
    return (
        <div className="weather__info-current-temperature current-temperature">
          <div className="current-temperature__wrap">
            <span className="current-temperature__number">
              {temp} °C
            </span>
            <span className="current-temperature__day">
              current weather
            </span>
          </div>
        </div>
    );
  }
}

module.exports = WeatherInfo;
