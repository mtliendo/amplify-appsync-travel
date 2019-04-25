import React from 'react'
import WeatherCard from './WeatherCard'

const WeatherList = ({ profileList }) => (
  <div
    style={{
      display: 'flex',
      padding: 20,
      margin: 20,
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}
  >
    {profileList.map(({ username, description, forecast, temperature, id }) => (
      <WeatherCard
        key={id}
        username={username}
        description={description}
        forecast={forecast}
        temperature={temperature}
      />
    ))}
  </div>
)

export default WeatherList
