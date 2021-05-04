import React from 'react';
import {
  Container,
  Paper,
  Typography,
  makeStyles,
  Divider,
  useTheme,
} from '@material-ui/core';

const Landing = () => {
  // const theme = useTheme();
  // const classes = useStyles();
  return (
    <Container>
      <Paper>
        <Typography variant='h3'>Welcome to this page!</Typography>
        <Typography paragraph={true}>Please sign in!</Typography>
      </Paper>
    </Container>
  );
};
export default Landing;
