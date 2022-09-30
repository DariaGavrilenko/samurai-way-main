import {profilePropsType} from '../../App'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props:profilePropsType) => {
    return (

        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts PostsData={props.PostsData}/>
        </div>
    )
}
export default Profile