
import React, { ChangeEvent } from 'react'
import { globalType, statePropsType } from '../../../App'
import { addPostAC, updateNewPostTextAC } from '../../../redux/profileReducer'
import StoreContext from '../../../StoreContext'
import MyPosts from './MyPosts'

type MyPostsContainerType = globalType

const MyPostsContainer = () => {
 

  return (
    <StoreContext.Consumer>
      {
        (store) => 
        { const addPost = ()=>{ 
          // props.state.dispatch(addPostAC())}
       store.dispatch(addPostAC())}
       
       
       const updateNewPostText = (text:string) =>{
        store.dispatch(updateNewPostTextAC(text))
       } 
        return <MyPosts state={store.getState().profile} updateNewPostText={updateNewPostText} addPost={addPost} />}
      }
    </StoreContext.Consumer>
  )
}
export default MyPostsContainer