import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
const HomeButton = () => {
  const history = useHistory();
  return (
    <Button onClick={() => history.push('/')} startIcon={<HomeIcon />}></Button>
  );
};
export default HomeButton;
