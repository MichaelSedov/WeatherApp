const axios = require("axios");

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=79b79f497fec8dfe42a69949f5849046&units=metric';
const GET_IP = 'http://ip-api.com/json';
const IMAGE_URL = 'https://api.datamarket.azure.com/Bing/Search/v1/Composite?Sources=%27image%27&$top=50&$format=json&Query=';

// 79b79f497fec8dfe42a69949f5849046

module.exports = {
  getImageBackground(location) {
    let encodedLocation = encodeURIComponent(location);
    let requestUrl = `${IMAGE_URL}%27${encodedLocation}%27`;
    var config = {
      headers: {"Authorization": "Basic " + btoa(':c4ILV6NKx8CZ7eX8vjxecrPeIpSiEAs/nzsnHlCRfr0=')}
    };
    return axios.get(requestUrl, config).then(function(data) {
      return data.data.d.results[0].Image[0].MediaUrl
    })
    .catch(function (error) {
      console.log(error);
    });
  },

  getInitialLocation() {
    return axios.get(GET_IP).then(function(result) {
      return result;
    })
    .catch(function (error) {
      console.log(error);
    });
  },

  getTemp(location) {
    let encodedLocation = encodeURIComponent(location);
    let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestUrl).then(function (res){
      if (res.data.cod && res.data.message) {
        var temp = res.data.list[0].main.temp;
        var date = res.data.list[0].dt;
        var city = res.data.city.name;
        var icon = res.data.list[0].weather[0].icon;
        var data = res.data;
        var country = res.data.city.country;
        return [temp, city, date, icon, data, country];
      } else {
        throw new Error(res.data.message);
      }
    }, function(res){
      throw new Error(res.data.message)
    });
  }
}
