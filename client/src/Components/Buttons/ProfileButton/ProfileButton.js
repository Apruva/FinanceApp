import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';
import { Avatar, Button } from '@material-ui/core';
const ProfileButton = () => {
  const { user } = useAuth0();
  const history = useHistory();
  return (
    <Button onClick={() => history.push('/profile')}>
      <Avatar src={user.picture}></Avatar>
    </Button>
  );
};
export default ProfileButton;
