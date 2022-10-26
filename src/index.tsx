import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './redux/storeRedux';
import StoreContext, { Provider } from './StoreContext';

const rerenderEntireTree = () => {
  console.log(store)
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree) 

  //dispatch={store.dispatch.bind(store)}
  //state = {store.getState()}
  //state = {store.getState()} dispatch = {store.dispatch.bind(store)}