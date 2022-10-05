import {PostsDataPropsType} from '../../App'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

export type ProfileType = {
    PostsData:Array<PostsDataPropsType>
    addPost:(text:string)=>void
}

const Profile = (props:ProfileType) => {
    return (

        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts PostsData={props.PostsData} addPost={props.addPost}/>
        </div>
    )
}
export default Profile