import React, { useState } from 'react'
import NavBar from './components/navbar'
import { Typography } from '@material-ui/core'
import TravelIcon from '@material-ui/icons/AirplanemodeActive'
import WeatherList from './components/weatherList'
import WeatherForm from './components/weatherForm'

function App() {
  const [profileList, setProfileList] = useState([
    {
      username: 'Michael',
      id: 'afda',
      description: 'Iowa',
      forecast: 'Sunny',
      temperature: 42
    },
    {
      username: '@mtliendo',
      id: 'afdaaa',
      description: 'Twitter',
      forecast: 'Cloudy',
      temperature: 87.4
    },
    {
      username: '@AWSAmplify',
      id: 'afdaff',
      description: 'cool stuff',
      forecast: 'Looking Bright!',
      temperature: 43.5
    }
  ])
  return (
    <div className="App">
      <NavBar />
      <Typography variant="h4" align="center">
        <TravelIcon color="action" />
        Travel Destinations and Current Conditions
      </Typography>
      <WeatherList profileList={profileList} style={{ display: 'flex' }} />
      <WeatherForm addProfile={setProfileList} profileList={profileList} />
    </div>
  )
}

export default App
