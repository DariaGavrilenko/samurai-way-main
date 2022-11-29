
import { profileType } from '../../redux/profileReducer'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

export type ProfilePropsType = {
    profile: profileType | null

}
const Profile = (props:ProfilePropsType) => {
    return (

        <div className={s.content}>
            <ProfileInfo profileInfo={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile
