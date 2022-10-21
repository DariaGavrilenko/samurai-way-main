
import React, { ChangeEvent } from 'react'
import {DialogMessagesDataPropsType, DialogNamesDataPropsType, dialogPropsType} from '../../App'
import { addMessageAC, updateMessageTextAC } from '../../redux/dialogsReducer'
import { ActionsTypes } from '../../redux/state'
import s from './Dialogs.module.css'
import DialogsMessage from './DialogsMessage/DialogMessage'
import DialogsNames from './DialogsName/DialogName'

type DialogsType = {
    DialogNamesData: Array<DialogNamesDataPropsType>
    DialogMessagesData: Array<DialogMessagesDataPropsType >
    DialogMessageText:string
    dispatch:(action:ActionsTypes)=>void
    // addMessage:()=>void
    // updateMessageText:(text:string)=>void
}


function Dialogs(props:DialogsType) {
//    let dialogMessageRef = React.createRef<HTMLTextAreaElement>()

    const sentMessage = () => {
            // props.addMessage()
            props.dispatch(addMessageAC())
        }


   const updateMessageText =(e:ChangeEvent<HTMLTextAreaElement>)=>{
        // props.updateMessageText(dialogMessageRef.current?.value)
        props.dispatch(updateMessageTextAC(e.currentTarget.value ))
    
   } 

    const DialogsNamesRendering = props.DialogNamesData?.map(dn => <DialogsNames img={dn.img} name={dn.name} id={dn.id} />)
    const DialogMessagesRendering = props.DialogMessagesData?.map(dm => <DialogsMessage message={dm.message} id={dm.id} img={dm.img} />)
    return (
        <div>
            <div className={s.dialogsContainer}>
                <div className={s.dialogsNames} >
                    {DialogsNamesRendering}
                </div>
                <div className={s.dialogsMessages}>
                    {DialogMessagesRendering}
                    <div className={s.dialogsTextarea}>
                        <textarea  value={props.DialogMessageText} onChange={updateMessageText} placeholder='Your message...' ></textarea>
                        <button className={s.addPostButton} onClick={sentMessage}>Sent</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dialogs