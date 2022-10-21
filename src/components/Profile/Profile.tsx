import {PostsDataPropsType, profilePropsType} from '../../App'
import { ActionsTypes } from '../../redux/state'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

export type ProfileType = {
    ProfileData:profilePropsType
    // PostsData:Array<PostsDataPropsType>
    // addPost:()=>void
    // updateNewPostText:(text:string)=>void
    dispatch:(action:ActionsTypes)=>void
}

const Profile = (props:ProfileType) => {
    return (

        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts ProfileData={props.ProfileData} dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile
//addPost={props.addPost} updateNewPostText={props.updateNewPostText}