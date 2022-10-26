import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Action } from 'redux';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Nav/Nav';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import { AddMessageActiveType, UpdateMessageTextActiveType } from './redux/dialogsReducer';
import { AddPostActiveType, UpdateNewPostTextActiveType } from './redux/profileReducer';

export type ActionsTypes = AddPostActiveType | UpdateNewPostTextActiveType | UpdateMessageTextActiveType | AddMessageActiveType


export type globalType = {
  state: statePropsType
  dispatch:(action:ActionsTypes)=>void
}
export type statePropsType = {
  profile:profilePropsType
  dialogs:dialogPropsType
  sidebar:sidebarDataPropsType
}
export type sidebarDataPropsType = {
  sidebarData:Array<DialogNamesDataPropsType>
}
export type profilePropsType = {
  PostsData:Array<PostsDataPropsType>
  newPostText:string
}
export type PostsDataPropsType = {
  id:number
  message:string
  likes:number
}
export type dialogPropsType={
  DialogNamesData: Array<DialogNamesDataPropsType>
  DialogMessagesData: Array<DialogMessagesDataPropsType >
  DialogMessageText:string
}
export type DialogNamesDataPropsType = {
  id: number
  name:string
  img:string
} 
export type DialogMessagesDataPropsType = {
  id:number
  message:string
 img:string 
}

const App = (props:globalType) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar sidebarData={props.state.sidebar.sidebarData}/>
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <DialogsContainer dispatch={props.dispatch}
           state={props.state} />} />
          <Route path='/profile' render={()=><Profile state={props.state} dispatch={props.dispatch}/>} />
          <Route path='/news' render={()=><News/>} />
          <Route path='/music' render={()=><Music/>} />
          <Route path='/settings' render={()=><Settings/>} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
