
import React from 'react';
import { connect } from 'react-redux';
import {  Redirect, Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import {  LoginContainer } from './components/Login/Login';
import Music from './components/Music/Music';
import { NavbarContainer } from './components/Nav/NavbarContainer';
import News from './components/News/News';
import { Preload } from './components/Preloade/Preloade';
import { ProfileContainerPro } from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import { UsersContainer } from './components/Users/UsersContainer';
import { initializeThunk } from './redux/appReducer';
import { AddMessageActiveType, DialogNamesDataPropsType, dialogPropsType, UpdateMessageTextActiveType } from './redux/dialogsReducer';
import { AddPostActiveType, profilesPropsType} from './redux/profileReducer';
import { AppStoreType } from './redux/storeRedux';



export type ActionsTypes = AddPostActiveType| UpdateMessageTextActiveType | AddMessageActiveType

export type globalType = {
  state: statePropsType
  dispatch:(action:ActionsTypes)=>void
}
export type statePropsType = {
  profile:profilesPropsType
  dialogs:dialogPropsType
  sidebar:sidebarDataPropsType
}
export type sidebarDataPropsType = {
  sidebarData:Array<DialogNamesDataPropsType>
}

type AppPropsType = {
  isInitialize: boolean
  initializeThunk:()=>void
}

class App extends React.Component<AppPropsType>{
  componentDidMount(): void {
    this.props.initializeThunk()
 }
  render(){
    console.log('APP');
  
    if(!this.props.isInitialize){
      return <Preload/>
    }

    return (
        <div className='app-wrapper'>
          <HeaderContainer/>
          <NavbarContainer/>
          <div className='app-wrapper-content'>
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/profile/:userID?' render={()=><ProfileContainerPro />} />
            <Route path='/users' render={()=><UsersContainer/>}/>
            <Route path='/news' render={()=><News/>} />
            <Route path='/music' render={()=><Music/>} />
            <Route path='/settings' render={()=><Settings/>} />
            <Route path='/Login' render={()=><LoginContainer/>}/>
            <Route path='/' render={()=><LoginContainer/>}/>
        
          </div>
        </div>
      
    )
  }
  
}

const mapStatetoProps = (state:AppStoreType)=>{
  return{
    isInitialize: state.app.isInitialize
  }
}

 export default compose<React.ComponentType>(withRouter,connect(mapStatetoProps, {initializeThunk}))(App);


//props:globalType
//sidebarData={props.state.sidebar.sidebarData}
//dispatch={props.dispatch}
 // state={props.state} 
//state={props.state} dispatch={props.dispatch}