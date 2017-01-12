import React, { Component } from 'react';

class WeatherCol extends React.Component {
  constructor(props) {
    super(props);

  };

  getDate(date) {
		let d = new Date(date * 1000);
		return d.toDateString().slice(0, 3);
	}

  setImgUrl(icon) {
		return "http://openweathermap.org/img/w/" + icon + ".png";
	}

  convert(temp) {
		let celsius = temp + " °C";
		let fahrenheit = (parseFloat(celsius, 10) * (9 / 5) + 32).toFixed(2) + " °F";
		return celsius + " / " + fahrenheit;
	}

	render() {
		let imgStyle = {
			margin: "0 auto"
		};

		return (
			<div className="days-temperature__item day-item">
				<div className="day-item__txt">
					<div>{this.getDate(this.props.forecastDate)}</div>
				</div>

				<div className="day-item__icon">
					<img src={this.setImgUrl(this.props.forecastIcon)} style={imgStyle} className="img-responsive" alt="forecast-icon"/>
				</div>

				<div className="day-item__number">
					<div className="text-right">{this.convert(this.props.forecastTemp)}</div>
				</div>
			</div>
		);
	}
}

module.exports = WeatherCol;
