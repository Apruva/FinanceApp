import { React } from 'react';
import { Container, Typography, makeStyles, Divider } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';

const AuthenticatedLanding = () => {
  const classes = useStyles();
  const { user } = useAuth0();

  return (
    <Container className={classes.container}>
      <Typography className={classes.text} variant='h3'>
        Welcome {user.name}!
      </Typography>
      <Typography paragraph={true}>You can now use the API!</Typography>
      <Divider />
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },

  text: {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
}));
export default AuthenticatedLanding;
