import { profileType } from '../../../redux/profileReducer'
import s from './ProfileInfo.module.css'
import { ProfileStatus } from './ProfileStatus'
import { ProfileStatusWithHook } from './ProfileStatusWithHook'

export type ProfileInfoPropsType ={
    profileInfo: profileType | null
    status: string
    updateStatusThunk:(text:string)=>void
}

function ProfileInfo(props: ProfileInfoPropsType) {
    return (
        <div>
            <div className={s.contentImg}>
                <img src="https://www.ie.edu/insights/wp-content/uploads/2017/01/Lean-Cities.jpg" alt="" />
            </div>
            <div className={s.usersInformation}>
            <div className={s.statusContainer}>
                    <ProfileStatusWithHook status={props.status} updateStatusThunk={props.updateStatusThunk}/>
                </div>
                <div className={s.ava}><img src={props.profileInfo?.photos.large ? props.profileInfo?.photos.large : "https://i.pinimg.com/564x/07/24/ac/0724acaf0726777b170d09d3774cdcb0.jpg"} alt="usersPhoto" /></div>
                <div className={s.information}>
                    <span>Work status: {props.profileInfo?.lookingForAJob ? 'looking for job' : ' work now'}</span>
                    <span>A job description: {props.profileInfo?.lookingForAJobDescription} </span>
                    <ul>My contacts:
                        <li>github: {props.profileInfo?.contacts.github}</li>
                        <li>vk: {props.profileInfo?.contacts.vk}</li>
                        <li>facebook: {props.profileInfo?.contacts.facebook}</li>
                        <li>instagram: {props.profileInfo?.contacts.instagram}</li>
                        <li>twitter: {props.profileInfo?.contacts.twitter}</li>
                        <li>website: {props.profileInfo?.contacts.website}</li>
                        <li>youtube: {props.profileInfo?.contacts.youtube}</li>
                        <li>mainLink: {props.profileInfo?.contacts.mainLink}</li>
                    </ul>
                </div>
            
            </div>
        </div>
    )
}


export default ProfileInfo
