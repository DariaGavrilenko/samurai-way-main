
import {ActionsTypes, statePropsType} from '../../App'
import { addMessageAC, updateMessageTextAC } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'


type DialogsType = {
    state: statePropsType
    dispatch:(action:ActionsTypes)=>void

}


function DialogsContainer(props:DialogsType) {

    const sentMessage = () => {
            // props.addMessage()
            props.dispatch(addMessageAC())
        }

   const updateMessageText =(text:string)=>{
        // props.updateMessageText(dialogMessageRef.current?.value)
        props.dispatch(updateMessageTextAC(text))
   } 


   
    return (
        <Dialogs state={props.state.dialogs} addMessage={sentMessage} updateMessageText={updateMessageText}/>
    )
}


export default DialogsContainer