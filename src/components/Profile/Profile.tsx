import {globalType, PostsDataPropsType, profilePropsType, statePropsType} from '../../App'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

export type ProfileType = globalType

const Profile = (props:ProfileType) => {
    return (

        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile
