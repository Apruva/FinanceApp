import './App.css';
import Nav from './Components/Nav/Nav';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Paper, CssBaseline, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';

function App() {
  const themeFromState = useSelector((state) => state.themeReducer);
  const theme = createMuiTheme(themeFromState);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper className='App'>
        <Nav />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
