import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LockIcon from '@material-ui/icons/Lock';
import { Button } from '@material-ui/core';

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      color='secondary'
      startIcon={<LockIcon />}
      onClick={() => loginWithRedirect()}
    >
      Login
    </Button>
  );
};

export default Login;
