import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './redux/state';

const rerenderEntireTree = ()=> {
    ReactDOM.render(
      <App state = {store.getState()} dispatch={store.dispatch.bind(store)}/>,
    document.getElementById('root')
  );
  }
  rerenderEntireTree()
  store.subscribe(rerenderEntireTree) 

  // addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} addMessage={store.addMessage.bind(store)} updateMessageText={store.updateMessageText.bind(store)}