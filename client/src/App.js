import './App.css';
import Nav from './Components/Nav/Nav';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Paper, CssBaseline } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './Components/Auth0/ProtectedRoute';
import Dashboard from './Components/Dashboard/Dashboard';
import PageDontExist from './Components/PageDontExist/PageDontExist';
import Landing from './Components/Landing/Landing';
import Profile from './Components/Profile/Profile';

import './App.css';
function App() {
  const themeFromState = useSelector((state) => state.themeReducer);
  const theme = createMuiTheme(themeFromState);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ backgroundColor: theme.palette.background.default }}>
        <Nav />
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/landing' exact component={Landing} />
          <ProtectedRoute path='/dashboard' exact component={Dashboard} />
          <ProtectedRoute path='/profile' exact component={Profile} />
          <Route path='*' component={PageDontExist} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
