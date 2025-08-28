import { useState, useEffect } from 'react'
import './App.css'
import { Weather } from './components/weather'

const TOKEN = '8c6f2125e29b4ab8bc944406252708'

export const App = () => {
  const [message, setMessage] = useState('')
  const [city, setCity] = useState('')
  const [weatherCity, setWeatherCity] = useState(null)
  const [loading, setLoading] = useState(false)
  const [coords, setCoords] = useState(null)

  useEffect(() => {
    if (!navigator.geolocation) {
      setMessage('Geolocation is not supported by your browser')
      return
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      setCoords(`${latitude},${longitude}`)
    })
  }, [])

  useEffect(() => {
    setMessage('')
    if (!city.trim() && !coords) {
      setWeatherCity(null)
    } else {
      setLoading(true)

      fetch(`http://api.weatherapi.com/v1/current.json?key=${TOKEN}&q=${city || coords}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Данные не найдены')
          }
          setMessage('')
          return res.json()
        })
        .then((data) => {
          setWeatherCity(data)
          setMessage('')
        })
        .catch((err) => setMessage(err.message))
        .finally(() => {
          setLoading(false)
        })
    }
  }, [city, coords])

  return (
    <div className="app">
      <div className="widget-container">
        <div className="weather-card-container">
          <h1 className="app-title">Weather Widget</h1>
          <div className="search-container">
            <input type="text" value={city} placeholder="Enter city name" className="search-input" onChange={({ target }) => setCity(target.value)} />
          </div>
        </div>
        {loading && <div>Загрузка...</div>}
        {message && <div>{message}</div>}
        {!loading && !message && weatherCity && <Weather weather={weatherCity} />}
      </div>
    </div>
  )
}
