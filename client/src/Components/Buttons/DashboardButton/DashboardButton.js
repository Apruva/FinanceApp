import React from 'react';
import { Button } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { useHistory } from 'react-router-dom';

const DashboardButton = () => {
  const history = useHistory();
  return (
    <Button
      color='secondary'
      startIcon={<DashboardIcon />}
      onClick={() => history.push('/dashboard')}
    >
      Dashboard
    </Button>
  );
};
export default DashboardButton;
