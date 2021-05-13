import { React, useEffect } from 'react';
import { Container, Typography, makeStyles, Divider } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchHelseforetak } from '../FetchApi/FetchHelseforetak';
import { setToken } from '../../Redux/actions/userActions';

const AuthenticatedLanding = () => {
  const classes = useStyles();
  const { user, getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.apiReducer.error);
  const success = useSelector((state) => state.apiReducer.success);
  const fetching = useSelector((state) => state.apiReducer.fetching);
  const info = useSelector((state) => state.apiReducer.info);
  const _accessToken = useSelector((state) => state.userReducer.accessToken);

  useEffect(async () => {
    const accessToken = await getAccessTokenSilently();
    dispatch(setToken(accessToken));
    dispatch(FetchHelseforetak('/helseforetak?info=info', accessToken));
  }, []);

  return (
    <Container className={classes.container}>
      <Typography className={classes.text} variant='h3'>
        Welcome {user.name}!
      </Typography>
      <Typography paragraph={true}>You can now use the API!</Typography>
      <Divider />

      {error && <h1>{error}</h1>}
      {fetching && <h1>{fetching}</h1>}
      {success && <h1>{success}</h1>}
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
