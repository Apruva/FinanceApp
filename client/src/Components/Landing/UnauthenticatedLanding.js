import { React } from 'react';
import { Container, Typography, makeStyles, Divider } from '@material-ui/core';

const UnauthenticatedLanding = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography className={classes.text} variant='h3'>
        Sign in to use this API
      </Typography>

      <Divider className={classes.divider} />
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  paper: {
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
  },
  text: {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  listItemText: {
    listStyleType: 'circle',
    listStyle: 'circle',
  },
  divider: {
    background: theme.palette.tertiary.main,
  },
}));
export default UnauthenticatedLanding;
