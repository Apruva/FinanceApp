import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import ThemeButton from '../Buttons/ThemeButton/ThemeButton';
import './Nav.css';
const Nav = () => {
  return (
    <AppBar className='AppBar'>
      <Toolbar>
        <ThemeButton />
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
