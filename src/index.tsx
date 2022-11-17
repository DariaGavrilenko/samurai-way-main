import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './redux/storeRedux';
import { Provider } from 'react-redux';


  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );




  //dispatch={store.dispatch.bind(store)}
  //state = {store.getState()}
  //state = {store.getState()} dispatch = {store.dispatch.bind(store)}