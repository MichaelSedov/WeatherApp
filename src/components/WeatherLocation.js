import React, { Component } from 'react';

class WeatherLocation extends React.Component {
  constructor(props) {
    super(props);

  };

  getDate(date) {
		let d = new Date(date * 1000);
		return d.toDateString().slice(0, 10);
	}

  render() {
    var {location, country, date} = this.props;
    return (
      <div className="content__location content-location">
        <div className="content-location__icon"></div>
        <div className="content-location__city">{location}, {country}</div>
        <div className="content-location__time">{this.getDate(date)}</div>
      </div>
    );
  }
}

module.exports = WeatherLocation;
