
import React, { ChangeEvent } from 'react'
import { globalType, statePropsType } from '../../../App'
import { addPostAC, updateNewPostTextAC } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'

type MyPostsContainerType = globalType

const MyPostsContainer = (props:MyPostsContainerType) => {
 
 const addPost = ()=>{ 
   // props.state.dispatch(addPostAC())}
 props.dispatch(addPostAC())}


const updateNewPostText = (text:string) =>{
 props.dispatch(updateNewPostTextAC(text))
} 
    return (

        <MyPosts state={props.state.profile} updateNewPostText={updateNewPostText} addPost={addPost}/>
    )
}
export default MyPostsContainer