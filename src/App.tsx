import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import Music from './components/Music/Music';
import { NavbarContainer } from './components/Nav/NavbarContainer';
import News from './components/News/News';
import { ProfileContainerPro } from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import { UsersContainer } from './components/Users/UsersContainer';
import { AddMessageActiveType, DialogNamesDataPropsType, dialogPropsType, UpdateMessageTextActiveType } from './redux/dialogsReducer';
import { AddPostActiveType, profilesPropsType, UpdateNewPostTextActiveType } from './redux/profileReducer';



export type ActionsTypes = AddPostActiveType | UpdateNewPostTextActiveType | UpdateMessageTextActiveType | AddMessageActiveType

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
// export type profilePropsType = {
//   PostsData:Array<PostsDataPropsType>
//   newPostText:string
// }
// export type PostsDataPropsType = {
//   id:number
//   message:string
//   likes:number
// }
// export type dialogPropsType={
//   DialogNamesData: Array<DialogNamesDataPropsType>
//   DialogMessagesData: Array<DialogMessagesDataPropsType >
//   DialogMessageText:string
// }
// export type DialogNamesDataPropsType = {
//   id: number
//   name:string
//   img:string
// } 
// export type DialogMessagesDataPropsType = {
//   id:number
//   message:string
//  img:string 
// }

const App = () => {
  return (
    <BrowserRouter>
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
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;


//props:globalType
//sidebarData={props.state.sidebar.sidebarData}
//dispatch={props.dispatch}
 // state={props.state} 
//state={props.state} dispatch={props.dispatch}