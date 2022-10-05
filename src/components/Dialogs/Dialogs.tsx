
import React from 'react'
import {dialogPropsType} from '../../App'
import s from './Dialogs.module.css'
import DialogsMessage from './DialogsMessage/DialogMessage'
import DialogsNames from './DialogsName/DialogName'


function Dialogs(props:dialogPropsType) {
   let dialogMessageRef = React.createRef<HTMLTextAreaElement>()
   const sentMessage = () => alert(dialogMessageRef.current?.value)
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
                        <textarea ref={dialogMessageRef} ></textarea>
                        <button className={s.addPostButton} onClick={sentMessage}>Sent</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dialogs