
import { type } from '@testing-library/user-event/dist/type'
import React, { ChangeEvent } from 'react'
import { profilePropsType} from '../../../App'
import { addPostAC, updateNewPostTextAC } from '../../../redux/profileReducer'
import { ProfileType } from '../Profile'
import s from './MyPosts.module.css'
import Post from './Post/Post'

type MyPostsType = {
    addPost:()=>void
    updateNewPostText:(text:string)=>void
    state: profilePropsType
}

const MyPosts = (props:MyPostsType ) => {
 let postMessageRef = React.createRef<HTMLTextAreaElement>()


 const onClickHandler = ()=>{ 
    if(postMessageRef.current?.value){
    props.addPost()
}}


const onChangehandler = (e:ChangeEvent<HTMLTextAreaElement>) =>{
 props.updateNewPostText(postMessageRef.current?.value ? postMessageRef.current.value : '' )
} 

    const postRendering = props.state.PostsData.map(post => <Post  message={post.message} likes={post.likes}/>)
    return (
        <div className={s.posts}>
            my post
            <div className={s.addPostArea}>
                <textarea  ref={postMessageRef} placeholder='Your message...' value={props.state.newPostText} onChange={onChangehandler} ></textarea>
                <button className={s.addPostButton} onClick={onClickHandler}>add posts</button>
            </div>
            <div>new post
                {postRendering}
            </div>
        </div>
    )
}
export default MyPosts