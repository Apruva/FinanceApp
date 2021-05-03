import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProviderWithHistory from './Components/Auth0/AuthProviderWithHistory';

ReactDOM.render(
  <Router>
    <AuthProviderWithHistory>
      <Provider store={store}>
        <App className='App.css' />
      </Provider>
    </AuthProviderWithHistory>
  </Router>,

  document.getElementById('root')
);
