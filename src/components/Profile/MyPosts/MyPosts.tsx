
import { type } from '@testing-library/user-event/dist/type'
import React, { ChangeEvent } from 'react'
import { profilePropsType} from '../../../App'
import { addPostAC, updateNewPostTextAC } from '../../../redux/profileReducer'
import { ProfileType } from '../Profile'
import s from './MyPosts.module.css'
import Post from './Post/Post'

type MyPostsType = ProfileType

const MyPosts = (props:ProfileType) => {
 let postMessageRef = React.createRef<HTMLTextAreaElement>()
 const addMessage = ()=>{ 
    if(postMessageRef.current?.value){
    // props.addPost()
    props.dispatch(addPostAC())
}}
const updateNewPostText = (e:ChangeEvent<HTMLTextAreaElement>) =>{
//  props.updateNewPostText(postMessageRef.current?.value ? postMessageRef.current.value : '' )
// let text = postMessageRef.current?.value ? postMessageRef.current.value : '' 
 props.dispatch(updateNewPostTextAC(postMessageRef.current?.value ? postMessageRef.current.value : ''))
} 

    const postRendering = props.ProfileData.PostsData.map(post => <Post  message={post.message} likes={post.likes}/>)
    return (
        <div className={s.posts}>
            my post
            <div className={s.addPostArea}>
                <textarea  ref={postMessageRef} placeholder='Your message...' value={props.ProfileData.newPostText} onChange={updateNewPostText} ></textarea>
                <button className={s.addPostButton} onClick={addMessage}>add posts</button>
            </div>
            <div>new post
                {postRendering}
            </div>
        </div>
    )
}
export default MyPosts