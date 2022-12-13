
import React, { ChangeEvent } from 'react'
import { Redirect } from 'react-router-dom'
import { Field, Form, InjectedFormProps, reduxForm } from 'redux-form'
import { loginDataType } from '../../redux/authReducer'
import { dialogPropsType } from '../../redux/dialogsReducer'
import { maxLenghtCreator, required } from '../../utils/validation'
import { Textarea } from '../FormsControls/FormsControls'
import s from './Dialogs.module.css'
import DialogsMessage from './DialogsMessage/DialogMessage'
import DialogsNames from './DialogsName/DialogName'

type DialogsType = {
  state: dialogPropsType
  addMessage:(text:string)=>void
//   updateMessageText:(text:string)=>void
}


function Dialogs(props:DialogsType) {
//    let dialogMessageRef = React.createRef<HTMLTextAreaElement>()

    const onClickHandler = (formData:MessageFormType) => {
     props.addMessage(formData.messageForm)
            
        }


//    const onChangeHandler =(e:ChangeEvent<HTMLTextAreaElement>)=>{
//         props.updateMessageText(e.currentTarget.value)

    
//    } 

    const DialogsNamesRendering = props.state.DialogNamesData?.map((dn,index) => <DialogsNames img={dn.img} name={dn.name} id={dn.id} key={index}/>)
    const DialogMessagesRendering = props.state.DialogMessagesData?.map((dm,index) => <DialogsMessage message={dm.message} id={dm.id} img={dm.img} key={index} />)

    
// alert(props.auth.isAuth)

    return (
        <div>
            <div className={s.dialogsContainer}>
                <div className={s.dialogsNames} >
                    {DialogsNamesRendering}
                </div>
                <div className={s.dialogsMessages}>
                    {DialogMessagesRendering}
                   <MessageFormRedux onSubmit={onClickHandler}/>
                </div>
            </div>
        </div>
    )
}

export type MessageFormType ={
    messageForm: string
} 

let maxLength50 = maxLenghtCreator(50)

const MessageForm = (props:InjectedFormProps<MessageFormType>) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <div className={s.dialogsTextarea}>
                <Field component={Textarea}  validate={[required, maxLength50]} name='messageForm'  placeholder='Your message...'/>
                <button className={s.addPostButton}>Sent</button>
            </div>
        </Form>
    )
}
const MessageFormRedux = reduxForm<MessageFormType>({form:'messageForm'})(MessageForm)

export default Dialogs