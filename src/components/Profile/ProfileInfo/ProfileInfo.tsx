import { ChangeEvent, useRef, useState } from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { profileType } from '../../../redux/profileReducer'
import { required } from '../../../utils/validation'
import { Input, Textarea } from '../../FormsControls/FormsControls'
import ChangeAvatarInput from './ChangeAvatarInput'
import InfoContainerForm, { InfoContainerFormType } from './InfoContainerForm'
import s from './ProfileInfo.module.css'
import { ProfileStatusWithHook } from './ProfileStatusWithHook'

export type ProfileInfoPropsType = {
    profileInfo: profileType | undefined
    status: string
    updateStatusThunk: (text: string) => void
    isOwner: boolean
    changeAvatar: (photo: File) => void
    saveProfile:(formData: InfoContainerFormType)=>Promise<string>
}

function ProfileInfo({ isOwner, status, profileInfo, updateStatusThunk, changeAvatar, saveProfile }: ProfileInfoPropsType) {

    const [editMode, setEditMode] = useState(false)

    const onSubmit = (formData: InfoContainerFormType) => {
        saveProfile(formData).then(()=>{
            setEditMode(false)
        })
       
    }

    return (
        <div>
            <div className={s.contentImg}>
                <img src="https://www.ie.edu/insights/wp-content/uploads/2017/01/Lean-Cities.jpg" alt="" />
            </div>
            <div className={s.usersInformation}>
                <div className={s.statusContainer}>
                    <ProfileStatusWithHook status={status} updateStatusThunk={updateStatusThunk} />
                </div>
                <div className={s.ava}><img src={profileInfo?.photos?.large
                    ? profileInfo?.photos.large
                    : "https://i.pinimg.com/564x/07/24/ac/0724acaf0726777b170d09d3774cdcb0.jpg"} alt="usersPhoto" />
                    {isOwner &&
                        <ChangeAvatarInput changeAvatar={changeAvatar} />
                    }
                </div>
                {editMode
                    ? <InfoContainerForm  onSubmit={onSubmit} initialValues={profileInfo}/>
                    : <InfoContainer profileInfo={profileInfo} turnOnEditMode={setEditMode} isOwner={isOwner}/>}

            </div>
        </div>
    )
}
type ContactsType = {
    contactKey: string
    contactValue: any
}
const ContactsInfo = ({ contactKey, contactValue }: ContactsType) => {
    return (
        <div><b>{contactKey}</b>:{contactValue[contactKey]}</div>
    )
}

type InfoContainerType = {
    profileInfo: profileType | null | undefined
    turnOnEditMode?:(mode:boolean)=>void
    isOwner?:boolean
}

const InfoContainer = ({ profileInfo, turnOnEditMode, isOwner }: InfoContainerType) => {
    return (
        <div className={s.information}>
            <span> <b>Name:</b>  {profileInfo?.fullName}</span>
            <span> <b>About me:</b>  {profileInfo?.aboutMe}</span>
            <span> <b>Work status:</b>  {!profileInfo?.lookingForAJob ? 'looking for job' : ' work now'}</span>
            <span> <b>A job description:</b>   {profileInfo?.lookingForAJobDescription} </span>
            <div> <b>My contacts:</b>
                {Object.keys(profileInfo?.contacts ? profileInfo?.contacts : {}).map(key => <ContactsInfo contactValue={profileInfo?.contacts && profileInfo.contacts} contactKey={key} key={key}/>)}
            </div>
           {isOwner && <button onClick={()=>turnOnEditMode?.(true)} className={s.editFormButton}>Edit</button>}
        </div>
    )
}




// type FormDataType = {
//     contactKey: string
//     contactValue:any
//     handleSubmit?:()=>void
// }

// const ChangeContactsInfo = ({contactKey,handleSubmit}:) =>{
//     return(
//        // <div><b>{contactKey}</b>:{contactValue[contactKey]}</div>
//         <form onSubmit={handleSubmit} className={s.formContainer} >
//             <div>
//                 <Field placeholder={contactKey} name={contactKey} component={Input} validate={[]} />
//             </div>
//             </form>
//     )
// } 
// const ContactsReduxForm = reduxForm<FormDataType>({ form: 'contacts' })(ChangeContactsInfo)

export default ProfileInfo
