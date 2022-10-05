import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { statePropsType } from './App';
import state, { addPost } from './redux/state';

const rerenderEntireTree = (state:statePropsType)=>{
  ReactDOM.render(
    <App state = {state} addPost={addPost}/>,
  document.getElementById('root')
);
}
export default rerenderEntireTree