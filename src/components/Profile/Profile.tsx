
import { profileType } from '../../redux/profileReducer'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

export type ProfilePropsType = {
    profile: profileType | null
    status: string
    updateStatusThunk:(text:string)=>void

}
const Profile = (props:ProfilePropsType) => {
    return (

        <div className={s.content}>
            <ProfileInfo profileInfo={props.profile} status={props.status} updateStatusThunk={props.updateStatusThunk}/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile
