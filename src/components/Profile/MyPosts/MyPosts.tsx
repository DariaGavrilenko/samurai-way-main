
import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { profilePropsType} from '../../../App'
import { ProfileType } from '../Profile'
import s from './MyPosts.module.css'
import Post from './Post/Post'

type MyPostsType = ProfileType

const MyPosts = (props:ProfileType) => {
 let postMessageRef = React.createRef<HTMLTextAreaElement>()
 const addMessage = ()=>{ 
    debugger
    if(postMessageRef.current?.value){
    props.addPost(postMessageRef.current?.value)
    postMessageRef.current.value = " "
}}

    const postRendering = props.PostsData.map(post => <Post  message={post.message} likes={post.likes}/>)
    return (
        <div className={s.posts}>
            my post
            <div className={s.addPostArea}>
                <textarea  ref={postMessageRef} placeholder='Your message...' ></textarea>
                <button className={s.addPostButton} onClick={addMessage}>add posts</button>
            </div>
            <div>new post
                {postRendering}
            </div>
        </div>
    )
}
export default MyPosts