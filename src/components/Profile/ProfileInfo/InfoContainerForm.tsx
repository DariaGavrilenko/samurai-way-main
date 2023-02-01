import { OmitProps } from "antd/lib/transfer/ListBody"
import { spawn } from "child_process"
import { ReactNode } from "react"
import { Field, InjectedFormProps, reduxForm } from "redux-form"
import { profileType } from "../../../redux/profileReducer"
import { required } from "../../../utils/validation"
import { Input, Textarea } from "../../FormsControls/FormsControls"
import s from './ProfileInfo.module.css'

export type InfoContainerFormType = {
    fullName:string
    lookingForAJob: boolean
    lookingForAJobDescription:string
    aboutMe:string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
}

const InfoContainerForm = ({handleSubmit, initialValues, error}:InjectedFormProps<InfoContainerFormType>) => {
    console.log(error);
    
    return (
        <form className={s.informationForm} onSubmit={handleSubmit}>
            {error && <span className={s.formError}>{error}</span>}
        <span>Name: 
        <Field placeholder="Full name" name="fullName" component={Input} validate={[required]} className={s.profileInput} />
        </span>
        <span>About me: 
        <Field placeholder="About me" name="aboutMe" component={'textarea'} validate={[]} className={s.formInput} />
         </span>
        <span>Work status: 
        <Field type={'checkbox'} name='lookingForAJob' component={'input'} /> Work now
        </span>
        <span>A job description: 
        <Field placeholder="A job description" name="lookingForAJobDescription" component={'textarea'} validate={[]} className={s.formInput} />
         </span>
        <div><span className={s.contactsTitle}> My contacts:</span>  
            {Object.keys(initialValues.contacts ? initialValues.contacts : {}).map(key =>{
                return <div className={s.contactsInput}><b className={s.contactsName}>{key}:</b>
                <Field placeholder={key} name={`contacts.${key}`} component={Input} validate={[]} className={s.profileInput} />
                </div>
            })}
        </div>
        <button className={s.sentFormButton}>Save</button>
    </form>
    )
}
const InfoContainerFormReduxForm = reduxForm<InfoContainerFormType>({ form: 'edit-profile' })(InfoContainerForm)
export default InfoContainerFormReduxForm