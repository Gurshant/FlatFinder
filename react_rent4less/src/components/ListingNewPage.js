import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import HomeImage from './images/building.jpg'
import Paper from '@material-ui/core/Paper';
import ListingNewForm from './ListingNewForm';

const useStyles = makeStyles(theme => ({
  root: {
    height: '92vh',
  },
  image: {
    backgroundImage: `url(${HomeImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));

export default function ListingNewPage(props) {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={5} md={7} className={classes.image} />
      <Grid item xs={12} sm={7} md={5} component={Paper} elevation={6} square className='scrollable'>
        <div className='scrollable_child'>
          <ListingNewForm {...props} />
        </div>
      </Grid>
    </Grid>
  );
}
