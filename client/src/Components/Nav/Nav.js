import React from 'react';
import { AppBar, Toolbar, makeStyles, Grid, useTheme } from '@material-ui/core';
import ThemeButton from '../Buttons/ThemeButton/ThemeButton';
import { useAuth0 } from '@auth0/auth0-react';
import AuthButton from '../Auth0/AuthButton';
import DashboardButton from '../Buttons/DashboardButton/DashboardButton';
import HomeButton from '../Buttons/HomeButton/HomeButton';
import ProfileButton from '../Buttons/ProfileButton/ProfileButton';
import './Nav.css';
const Nav = () => {
  const theme = useTheme();
  const classes = useStyles();
  const { isAuthenticated } = useAuth0();
  return (
    <AppBar
      position='static'
      className='AppBar'
      style={{ backgroundColor: theme.palette.fifthiary.main }}
    >
      <Toolbar>
        <Grid item xs={12} sm={6} className={classes.grid}>
          <HomeButton />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.grid}>
          <ThemeButton />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.grid}>
          <AuthButton />
        </Grid>
        {isAuthenticated && (
          <Grid item xs={12} sm={6} className={classes.grid}>
            <DashboardButton />
          </Grid>
        )}
        {isAuthenticated && (
          <Grid item xs={12} sm={6} className={classes.grid}>
            <ProfileButton />
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;

const useStyles = makeStyles(() => ({
  div: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
  },
  grid: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
}));
