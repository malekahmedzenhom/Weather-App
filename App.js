

import React from 'react';
import './App.css';

function App() {
  const [search, setSearch] = React.useState("");
  const [weather, setWeather] = React.useState({});

  const api = {
    key: "276c90d0e08f9584505653463c376ee9",
    base: "https://api.openweathermap.org/data/2.5/"
  };

  const searchLocation = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  };

  return (
    <div className="app">
      <header className="App-header">
      <h1>Weather app</h1>
      <div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter the Location"
          className="input"
          type="text"
        />
        <button onClick={searchLocation}>Search</button>
      </div>

      {weather && weather.main ? (
        <div>
          <p>{weather.name}</p>
          <p>{weather.main.temp}°C</p>
          <p>{weather.weather[0].main}</p>
          <p>{weather.weather[0].description}</p>
        </div>
      ) : weather && weather.cod !== 200 ? (
        <p>City not found</p>
      ) : null}
      </header>
    </div>
  );
}

export default App;
