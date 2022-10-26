
import React, { ChangeEvent } from 'react'
import { dialogPropsType} from '../../App'
import s from './Dialogs.module.css'
import DialogsMessage from './DialogsMessage/DialogMessage'
import DialogsNames from './DialogsName/DialogName'

type DialogsType = {
  state: dialogPropsType
  addMessage:()=>void
  updateMessageText:(text:string)=>void
}


function Dialogs(props:DialogsType) {
//    let dialogMessageRef = React.createRef<HTMLTextAreaElement>()

    const onClickHandler = () => {
     props.addMessage()
            
        }


   const onChangeHandler =(e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.updateMessageText(e.currentTarget.value)

    
   } 

    const DialogsNamesRendering = props.state.DialogNamesData?.map(dn => <DialogsNames img={dn.img} name={dn.name} id={dn.id} />)
    const DialogMessagesRendering = props.state.DialogMessagesData?.map(dm => <DialogsMessage message={dm.message} id={dm.id} img={dm.img} />)
    return (
        <div>
            <div className={s.dialogsContainer}>
                <div className={s.dialogsNames} >
                    {DialogsNamesRendering}
                </div>
                <div className={s.dialogsMessages}>
                    {DialogMessagesRendering}
                    <div className={s.dialogsTextarea}>
                        <textarea  value={props.state.DialogMessageText} onChange={onChangeHandler} placeholder='Your message...' ></textarea>
                        <button className={s.addPostButton} onClick={onClickHandler}>Sent</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dialogs