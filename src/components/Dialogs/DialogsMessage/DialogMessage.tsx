import { DialogMessagesDataPropsType } from '../../../App'
import s from './../Dialogs.module.css'


function DialogsMessage({ message, id,img }: DialogMessagesDataPropsType) {
    const choisId = () => id === 1 ? s.dialogMessage1 : s.dialogMessage2
    return (
        <div className={choisId()}> <div className={id===1? s.chatImg1:s.chatImg2 }><img src={img} alt="" /></div>{message}</div>
    )
}
export default DialogsMessage