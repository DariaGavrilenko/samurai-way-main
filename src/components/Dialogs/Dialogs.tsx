
import React from 'react'
import { Field, Form, InjectedFormProps, reduxForm } from 'redux-form'
import { dialogPropsType } from '../../redux/dialogsReducer'
import { maxLenghtCreator, required } from '../../utils/validation'
import { Textarea } from '../FormsControls/FormsControls'
import s from './Dialogs.module.css'
import DialogsMessage from './DialogsMessage/DialogMessage'
import DialogsNames from './DialogsName/DialogName'

type DialogsType = {
    state: dialogPropsType
    addMessage: (text: string) => void

}


function Dialogs({ state, addMessage }: DialogsType) {

    const onClickHandler = (formData: MessageFormType) => {
        addMessage(formData.messageForm)

    }

    const DialogsNamesRendering = state.DialogNamesData?.map((dn, index) => <DialogsNames img={dn.img} name={dn.name} id={dn.id} key={index} />)
    const DialogMessagesRendering = state.DialogMessagesData?.map((dm, index) => <DialogsMessage message={dm.message} id={dm.id} img={dm.img} key={index} />)

    return (
        <div>
            <div className={s.dialogsContainer}>
                <div className={s.dialogsNames} >
                    {DialogsNamesRendering}
                </div>
                <div className={s.dialogsMessages}>
                    {DialogMessagesRendering}
                    <MessageFormRedux onSubmit={onClickHandler} />
                </div>
            </div>
        </div>
    )
}

export type MessageFormType = {
    messageForm: string
}

let maxLength50 = maxLenghtCreator(50)

const MessageForm = (props: InjectedFormProps<MessageFormType>) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <div className={s.dialogsTextarea}>
                <Field component={Textarea} validate={[required, maxLength50]} name='messageForm' placeholder='Your message...' />
                <button className={s.addPostButton}>Sent</button>
            </div>
        </Form>
    )
}
const MessageFormRedux = reduxForm<MessageFormType>({ form: 'messageForm' })(MessageForm)

export default Dialogs