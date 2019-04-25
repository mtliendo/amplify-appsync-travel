import React, { useState } from 'react'
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  button: {
    display: 'flex',
    margin: theme.spacing.unit
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
})

const WeatherForm = ({ classes, addProfile, profileList }) => {
  const [description, setDescription] = useState('')
  const [username, setUsername] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')

  return (
    <div>
      <FormGroup className={classes.container}>
        <TextField
          required
          placeholder="Disney World"
          id="standard-name"
          label="Description"
          className={classes.textField}
          value={description}
          margin="normal"
          onChange={e => {
            setDescription(e.target.value)
          }}
        />
        <TextField
          required
          placeholder="mtliendo"
          id="standard-name"
          label="Username"
          className={classes.textField}
          value={username}
          margin="normal"
          onChange={e => {
            setUsername(e.target.value)
          }}
        />
      </FormGroup>
      <FormGroup className={classes.container}>
        <TextField
          placeholder="Orlando"
          id="standard-name"
          label="City"
          className={classes.textField}
          value={city}
          margin="normal"
          onChange={e => {
            setCity(e.target.value)
          }}
        />
        <TextField
          id="standard-name"
          placeholder="Florida"
          label="State"
          className={classes.textField}
          value={state}
          margin="normal"
          onChange={e => {
            setState(e.target.value)
          }}
        />
        <TextField
          id="standard-name"
          required
          placeholder="32830"
          label="Zip"
          className={classes.textField}
          value={zipCode}
          margin="normal"
          onChange={e => {
            setZipCode(e.target.value)
          }}
        />
      </FormGroup>
      <FormGroup>
        <Button
          color="primary"
          className={classes.button}
          onClick={() =>
            handleFormSubmission(profileList, addProfile, {
              username,
              description,
              city,
              state,
              zipCode
            })
          }
        >
          Enter
        </Button>
      </FormGroup>
    </div>
  )
}

const handleFormSubmission = async (profileList, addProfile, newProfile) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${
    newProfile.zipCode
  }&units=imperial&APPID=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`

  const now = new Date()
  const res = await fetch(url)
  const weatherInfo = await res.json()

  addProfile([
    ...profileList,
    {
      username: newProfile.username,
      id: newProfile.username + now.getTime(),
      description: newProfile.description,
      forecast: weatherInfo.weather[0].description,
      temperature: weatherInfo.main.temp
    }
  ])
}

export default withStyles(styles)(WeatherForm)
