import React from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [location, setLocation] = React.useState("");
  const [data, setData] = React.useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9a7b778b6f0304584be3e67e7ea31a12&units=metric`;

  const getInformation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((res) => {
        console.log(res.data);
        setData(res.data);
      });

      setLocation("");
    }
  };

  return (
    <div className="App">
      <div className="search">
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={getInformation}
        />
      </div>
      {data.name !== undefined && (
        <div className="container">
          <div className="top">
            <div>
              <p>{data.name}</p>
              {data.main ? <h1>{data.main.temp.toFixed()} °C</h1> : null}
            </div>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
          <div className="bottom">
            <div>
              {data.main ? <h3>{data.main.feels_like.toFixed()} °C</h3> : null}
              <p>Feels Like</p>
            </div>
            <div>
              {data.main ? <h3>{data.main.humidity} %</h3> : null}
              <p>Humidity</p>
            </div>
            <div>
              {data.wind ? <h3>{data.wind.speed.toFixed()} m/s</h3> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
