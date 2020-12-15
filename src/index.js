import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login'

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers/rootReducer.js'

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <BrowserRouter>
      <Provider store={store}>

          <Route exact path='/' component={App} />
          <Route exact path='/login' component={Login} />
          
      </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
