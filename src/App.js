import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import React from 'react';
import store from "./store";
import HomePage from './pages/homePage';

class App extends React.Component  {
  render() {
    return (
      <Provider store={store}>
          <HomePage></HomePage>
      </Provider>
    );
  }
}

export default App;
