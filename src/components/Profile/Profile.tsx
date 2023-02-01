import { profileType } from '../../redux/profileReducer'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import s from './Profile.module.css'
import { InfoContainerFormType } from './ProfileInfo/InfoContainerForm'
import ProfileInfo from './ProfileInfo/ProfileInfo'

export type ProfilePropsType = {
    profile: profileType | undefined
    status: string
    updateStatusThunk:(text:string)=>void
    isOwner: boolean
    changeAvatar:(photo:File)=>void
    saveProfile:(formData: InfoContainerFormType)=>Promise<string>

}
const Profile = ({profile,status,updateStatusThunk,isOwner,changeAvatar, saveProfile}:ProfilePropsType) => {
    return (

        <div className={s.content}>
            <ProfileInfo changeAvatar={changeAvatar} saveProfile={saveProfile} isOwner={isOwner} profileInfo={profile} status={status} updateStatusThunk={updateStatusThunk}/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile
