import {globalType, PostsDataPropsType, profilePropsType, statePropsType} from '../../App'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

export type ProfileType = globalType

const Profile = () => {
    return (

        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile
