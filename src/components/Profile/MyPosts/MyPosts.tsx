
import React, { ChangeEvent } from 'react'
import { Field, Form, InjectedFormProps, reduxForm } from 'redux-form'
import { profilesPropsType } from '../../../redux/profileReducer'
import { maxLenghtCreator, required } from '../../../utils/validation'
import { Textarea } from '../../FormsControls/FormsControls'
import s from './MyPosts.module.css'
import Post from './Post/Post'

type MyPostsType = {
    addPost:(text:string)=>void
    // updateNewPostText:(text:string)=>void
    state: profilesPropsType
}

const MyPosts = (props:MyPostsType ) => {
//  let postMessageRef = React.createRef<HTMLTextAreaElement>()
//  const onClickHandler = ()=>{ 
//     if(postMessageRef.current?.value){
//     props.addPost()
// }}
const onClickHandler = (formData:MyPostFormType)=>{ 
    props.addPost(formData.myPostForm)
}

// const onChangehandler = (e:ChangeEvent<HTMLTextAreaElement>) =>{
//  props.updateNewPostText(postMessageRef.current?.value ? postMessageRef.current.value : '' )
// } 

    const postRendering = props.state.PostsData.map((post,index) => <Post key={index} message={post.message} likes={post.likes}/>)
    return (
        <div className={s.posts}>
            my post
            <div className={s.addPostArea}>
              <MyPostFormRedux onSubmit={onClickHandler}/>
            </div>
            <div>new post
                {postRendering}
            </div>
        </div>
    )
}
type MyPostFormType = {
    myPostForm: string
}



let maxLength10 = maxLenghtCreator(10)
const MyPostForm = (props:InjectedFormProps<MyPostFormType> ) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <Field name='myPostForm' placeholder='Your message...' component={Textarea} validate={[required, maxLength10]}/>
            <button className={s.addPostButton}>add posts</button>
        </Form>
    )
}

const MyPostFormRedux = reduxForm<MyPostFormType>({form:'myPostForm'})(MyPostForm)
export default MyPosts