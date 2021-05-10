import { React } from 'react';
import { Container } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';
import AuthenticatedLanding from './AuthenticatedLanding';
import UnauthenticatedLanding from './UnauthenticatedLanding';
import Info from './Info';
const Landing = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Container>
      {isAuthenticated ? <AuthenticatedLanding /> : <UnauthenticatedLanding />}
      <Info />
    </Container>
  );
};

export default Landing;
