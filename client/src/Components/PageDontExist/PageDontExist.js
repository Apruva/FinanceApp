import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Paper, Typography } from '@material-ui/core';
const PageDontExist = () => {
  const history = useHistory();
  return (
    <Paper>
      <Typography>PAGE DONT EXIST</Typography>
      <Button onClick={() => history.push('/')}>Return to home</Button>
    </Paper>
  );
};
export default PageDontExist;
