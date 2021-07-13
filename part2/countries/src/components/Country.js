import React, { useState, useEffect } from "react";
import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

const Country = ({ country }) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const url = `http://api.openweathermap.org/data/2.5/find?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${api_key}&units=metric`;
    axios.get(url).then((response) => setWeather(response.data.list[0]));
  }, []);

  console.log(weather);

  return (
    <div>
      <h2>{country.name}</h2>
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>
      <h2>Languages</h2>
      <ul>
        {country.languages.map((language) => (
          <li>{language.name}</li>
        ))}
      </ul>
      <img
        src={country.flag}
        alt={`flag of ${country.name}`}
        width="500"
        height="500"
      />
      {Object.entries(weather).length === 0 ? (
        <p>Fetching data</p>
      ) : (
        <div>
          <h2>Weather in {weather.name}</h2>
          <p>The temperature is: {weather.main.temp} degrees Celsius</p>
          <p>The sky is {weather.weather[0].main}</p>
          <p>
            The wind is blowing at {weather.wind.speed} m/s at{" "}
            {weather.wind.deg} degrees
          </p>
        </div>
      )}
    </div>
  );
};

export default Country;
