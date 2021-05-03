import { useAuth0 } from '@auth0/auth0-react';
import { Typography, Button, Paper, Container } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

const Profile = () => {
  const { user } = useAuth0();
  const history = useHistory();
  return (
    <Container>
      <h1>Welcome, {user.email}</h1>
      <Paper></Paper>
    </Container>
  );
};
export default Profile;
