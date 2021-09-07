import './App.css';
import { useState } from "react";

function App() {
  const [place, setPlace] = useState('');
  const [data, setData] = useState({});

  function givePlaceData() {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=c25f2da8f8034704a7b184100211208&q=${place}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setData(data);
      setPlace("");
    });
  }
  return (
    <div className="App">
      <form onSubmit={(e) => {
        e.preventDefault();
        givePlaceData(place);
      }}>
        <input type="text" placeholder="Enter Place" value={place} onChange={(e) => {
          setPlace(e.target.value);
        }} />
        <input type="submit" value="Submit" />
      </form>
      <div className="content">
      {data.location && <h1>{data.location.name}, {data.location.country} <img src={data.current.condition.icon} alt="" /></h1>}
      {data.current !==undefined ? <div>
        
        <ul>
          <li>Temperature : {data.current.temp_c} °C </li>
          <li>Feels Like : {data.current.feelslike_c} °C </li>
          <li>Humidity : {data.current.humidity} % </li>
          <li>Wind speed(kph) : {data.current.wind_kph} % </li>
        </ul>
      </div> : ""}

      {data.forecast && <div>
        <h2>Next Day</h2>
        <div>Min: {data.forecast.forecastday[0].day.mintemp_c} °C</div>
        <div>Max: {data.forecast.forecastday[0].day.maxtemp_c} °C</div>
        </div>}
      </div>
    </div>
  );
}

export default App;