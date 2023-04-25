import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="search">
        <input type="text" placeholder="Enter Location" />
      </div>
      <div className="container">
        <div className="top">
          <div>
            <p>Moscow</p>
            <h1>15 °C </h1>
          </div>
          <p>Clouds</p>
        </div>
        <div className="bottom">
          <div>
            <h3 className="bold">12 °C</h3>
            <p>Feels Like</p>
          </div>
          <div>
            <h3>12 %</h3>
            <p>Humidity</p>
          </div>
          <div>
            <h3>3 m/s</h3>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
