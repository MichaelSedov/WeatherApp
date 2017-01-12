import React, { Component } from 'react';

class WeatherForm extends React.Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  };
  onFormSubmit(e) {
    e.preventDefault();

    let location = this.refs.location.value;
    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  }
  render() {
    return (
      <div>
        <form className="weather__form" onSubmit={this.onFormSubmit}>
          <input className="weather-form__input" type="text" placeholder="London" autoFocus ref="location"/>
          <button className="weather-form__btn">Get Weather</button>
        </form>
      </div>
    );
  }
}

module.exports = WeatherForm;
