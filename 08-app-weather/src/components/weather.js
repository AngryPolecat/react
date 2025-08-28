export const Weather = ({ weather }) => {
  return (
    <div className="weather-card">
      <h2>
        {weather?.location?.name}, {weather?.location?.country}
      </h2>
      <img src={weather?.current?.condition.icon} alt="icon" className="weather-icon" />
      <p className="temperature">{weather?.current?.temp_c}</p>
      <p className="condition">{weather?.current?.condition.text}</p>
      <div className="weather-details">
        <p>Humidity: {weather?.current?.humidity}%</p>
        <p>Wind: {weather?.current?.wind_kph} km/h</p>
      </div>
    </div>
  )
}
