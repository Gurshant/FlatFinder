import React from 'react'

import HotelIcon from '@material-ui/icons/Hotel';
import BathtubIcon from '@material-ui/icons/Bathtub';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import MultipleImageHandler from './MultipleImageHandler.js'


const useStyles = makeStyles(theme => ({

  paper: {
    padding: theme.spacing(6, 4),
    backgroundColor: '#F7F8F9 '
  },
}));

function ListingImageContact(props) {
  const classes = useStyles();

  return (
    <Grid container component={Paper} elevation={0} className={classes.paper}>
      <CssBaseline />
      <Grid item component="section" xs={12} sm={12} md={7}  >
        <MultipleImageHandler props={props} />
      </Grid>
      <Grid item component="section" xs={12} sm={12} md={5} className='center_horizontal'>
        <Typography component="h1" variant='h4'>
          Contact Property Manager
        </Typography>
        <Typography component="h1" variant='h5' className='contact'>
          <PhoneIcon className='icon' /> {props.manager.phone.split('').map((num, i) => (i === 0 ? `(${num}` : (i === 2 ? `${num}) ` : (i === 5 ? `${num} - ` : num))))}
        </Typography>
        <Typography component="h1" variant='h5' className='contact'>
          <EmailIcon className='icon' /> {props.manager.email}
        </Typography>
      </Grid>
    </Grid >
  )
}

export default ListingImageContact