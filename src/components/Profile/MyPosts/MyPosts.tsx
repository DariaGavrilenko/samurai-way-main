import React from 'react'
import { Field, Form, InjectedFormProps, reduxForm, reset } from 'redux-form'
import { profilesPropsType } from '../../../redux/profileReducer'
import { maxLenghtCreator, required } from '../../../utils/validation'
import { Textarea } from '../../FormsControls/FormsControls'
import s from './MyPosts.module.css'
import Post from './Post/Post'

type MyPostsType = {
    addPost: (text: string) => void
    state: profilesPropsType
    resetForm:()=>void
}

const MyPosts = ({ state, addPost, resetForm }: MyPostsType) => {

    const onClickHandler = (formData: MyPostFormType) => {
        addPost(formData.myPostForm)
        resetForm()
    }


    const postRendering = state.PostsData.map((post, index) => <Post key={index} message={post.message} likes={post.likes} />)
    return (
        <div className={s.posts}>

            <div className={s.addPostArea}>
                <MyPostFormRedux onSubmit={onClickHandler} />
            </div>
            <div>
                {postRendering}
            </div>
        </div>
    )
}
type MyPostFormType = {
    myPostForm: string
}



let maxLength10 = maxLenghtCreator(10)
const MyPostForm = (props: InjectedFormProps<MyPostFormType>) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <Field name='myPostForm' placeholder='Your message...' component={Textarea} validate={[required, maxLength10]} />
            <button className={s.addPostButton}>add posts</button>
        </Form>
    )
}

const MyPostFormRedux = reduxForm<MyPostFormType>({ form: 'myPostForm' })(MyPostForm)
export default MyPosts