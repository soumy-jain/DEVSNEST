  
import React from 'react';
import { useSelector } from 'react-redux';

const Report = () => {
    const placeData = useSelector((state) => state.placeData);
    
    return (
        <>
        {placeData.location? 
          <div>
            <div className="weather">
              <div className="col2">
                <img src={placeData.current.condition.icon} alt="" />
                <div className="temp">{placeData.forecast.forecastday[0].day.maxtemp_c}°C/{placeData.forecast.forecastday[0].day.mintemp_c}°C</div>
                <div className="desc">{placeData.current.condition.text}</div>
              </div>
              <div className="col1">
                  <span>{placeData.location.name}, </span>
                  <span>{placeData.location.region}<br /></span>
                  <span>{placeData.location.country}</span>
                  
                  <div className="whp">
                    <div className="whp-detail">
                      <span className="title">Wind Now : </span>
                      <span className="data">{placeData.current.wind_kph}Km</span>
                    </div>
                    <div className="whp-detail">
                      <span className="title">Humidity : </span>
                      <span className="data">{placeData.current.humidity}%</span>
                    </div>
                    <div className="whp-detail">
                      <span className="title">Precipitation : </span>
                      <span className="data">{placeData.current.precip_mm}%</span>
                    </div>
                    <div className="whp-detail">
                      <span className="title">Sunrise : </span>
                      <span className="data">{placeData.forecast.forecastday[0].astro.sunrise}</span>
                    </div>
                    <div className="whp-detail">
                      <span className="title">Sunset : </span>
                      <span className="data">{placeData.forecast.forecastday[0].astro.sunset}</span>
                    </div> 
                </div>
              </div>
            </div>
            <div className="forecast">
              <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <div className="forecast-details">
                  <h3>12:00 PM</h3>
                  <img src={placeData.forecast.forecastday[0].hour[12].condition.icon} alt="" /> <br />
                  <span style={{fontSize: '1rem'}}>{placeData.forecast.forecastday[0].hour[12].condition.text}</span>
                  <h3>{placeData.forecast.forecastday[0].hour[12].temp_c}°C</h3>
                </div>
                <div className="forecast-details">
                  <h3>3:00 PM</h3>
                  <img src={placeData.forecast.forecastday[0].hour[15].condition.icon} alt="" /> <br />
                  <span style={{fontSize: '1rem'}}>{placeData.forecast.forecastday[0].hour[15].condition.text}</span>
                  <h3>{placeData.forecast.forecastday[0].hour[15].temp_c}°C</h3>
                </div>
                <div className="forecast-details">
                  <h3>6:00 PM</h3>
                  <img src={placeData.forecast.forecastday[0].hour[18].condition.icon} alt="" /> <br />
                  <span style={{fontSize: '1rem'}}>{placeData.forecast.forecastday[0].hour[18].condition.text}</span>
                  <h3>{placeData.forecast.forecastday[0].hour[18].temp_c}°C</h3>
                </div>
                <div className="forecast-details">
                  <h3>9:00 PM</h3>
                  <img src={placeData.forecast.forecastday[0].hour[21].condition.icon} alt="" /> <br />
                  <span style={{fontSize: '1rem'}}>{placeData.forecast.forecastday[0].hour[21].condition.text}</span>
                  <h3>{placeData.forecast.forecastday[0].hour[21].temp_c}°C</h3>
                </div>
                <div className="forecast-details">
                  <h3>00:00 AM</h3>
                  <img src={placeData.forecast.forecastday[0].hour[0].condition.icon} alt="" /> <br />
                  <span style={{fontSize: '1rem'}}>{placeData.forecast.forecastday[0].hour[0].condition.text}</span>
                  <h3>{placeData.forecast.forecastday[0].hour[0].temp_c}°C</h3>
                </div>
                </div>
              </div>
            </div> : 
            <div className="No"><h1>Place not Found!</h1></div>}
        </>
    )
}

export default Report