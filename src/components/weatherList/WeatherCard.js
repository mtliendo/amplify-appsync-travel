import React from 'react'
import PersonIcon from '@material-ui/icons/Person'
import AlarmIcon from '@material-ui/icons/Alarm'
import SunIcon from '@material-ui/icons/WbSunny'
import LocationIcon from '@material-ui/icons/MyLocation'
import CardContent from '@material-ui/core/CardContent'
import { Typography, Card } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  cardStyles: {
    height: 250,
    width: 300,
    margin: 20,
    justifyContent: 'space-around'
  }
}

const WeatherCard = ({
  classes,
  username,
  description,
  forecast,
  temperature
}) => (
  <Card className={classes.cardStyles}>
    <CardContent>
      <CardItem Icon={LocationIcon} text={description} />
      <CardItem Icon={PersonIcon} text={username} />
      <CardItem Icon={AlarmIcon} text={forecast} />
      <CardItem Icon={SunIcon} text={temperature + ' degrees F'} />
    </CardContent>
  </Card>
)

const CardItem = ({ Icon, text }) => (
  <div style={{ display: 'flex', paddingBottom: 20 }}>
    <Icon />
    <Typography style={{ paddingLeft: 20 }} variant="h5">
      {text}
    </Typography>
  </div>
)

export default withStyles(styles)(WeatherCard)
