import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherInfo from './WeatherInfo';
import WeatherLocation from './WeatherLocation';
import openWeatherMap from '../api/openWeatherMap';
//import CitiesAutocomplete from './CitiesAutocomplete';
import WeatherCol from './WeatherCol';


export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: [],
      temp: [],
      country: "",
      date: 'date',
      forecastData: [],
      weatherIcon: "",
      citybg: '',
      isLoading: false
    };
    //this.onChange = (location) => this.setState({ location })
    this.handleSearch = this.handleSearch.bind(this);
  };

  componentDidMount() {
    let _this = this;
    openWeatherMap.getInitialLocation().then(function(result) {
      openWeatherMap.getTemp(result.data.city).then(function(dataweather){
        _this.setState({
          temp: dataweather[0],
          location: dataweather[1],
          date: dataweather[2],
          weatherIcon: "http://openweathermap.org/img/w/" + dataweather[3] + ".png",
          forecastData: dataweather[4],
          country: dataweather[5],
          isLoading: false
        });
      }, function(errorMessage){
        _this.setState({isLoading: false});
        alert(errorMessage);
      });

      openWeatherMap.getImageBackground(result.data.city).then(function(imgresult){
        _this.setState({
           citybg: imgresult
        });
      });

    });
  }

  handleSearch(location) {
    let _this = this;

    _this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function(result){
      _this.setState({
        temp: result[0],
        location: result[1],
        date: result[2],
        weatherIcon: "http://openweathermap.org/img/w/" + result[3] + ".png",
        forecastData: result[4],
        country: result[5],
        isLoading: false
      });
    }, function(errorMessage){
      _this.setState({isLoading: false});
      alert(errorMessage);
    });

    openWeatherMap.getImageBackground(location).then(function(imgresult){
      _this.setState({
         citybg: imgresult
      });
    });
  }

  render() {

    let {isLoading, temp, location, date, weatherIcon, forecastData, country, citybg} = this.state;

    let cityStyle = {
      backgroundImage: `url(${citybg})`
    }

    function renderMessage(){
      if (isLoading) {
        return <div className='uil-ring-css'><div></div></div>;
      }
    }

    if (this.state.forecastData.length === 0) return null;
    let rows = [];
    for (var i = 1; i < 40; i++) {
      if (i%8 === 0) {
        rows.push(
          <WeatherCol
            key={i}
            forecastDate={this.state.forecastData.list[i].dt}
            forecastIcon={this.state.forecastData.list[i].weather[0].icon}
            forecastTemp={this.state.forecastData.list[i].main.temp}
          />
        );
      }
    }

    return (
      <div className="weather">
        <div className="weather__media content" style={cityStyle}>
          <div className="weather__media-wrap">
            <WeatherForm onSearch={this.handleSearch}/>
            {renderMessage()}
          </div>
          <WeatherLocation location={location} date={date} country={country}/>
        </div>
        <div className="weather__info">
          <WeatherInfo temp={temp}/>
          <div className="weather__info-days-temperature days-temperature">
            {rows}
          </div>
        </div>

      </div>
    );
  }
}

module.exports = Weather;
