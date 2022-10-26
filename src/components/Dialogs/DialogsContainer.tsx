
import {ActionsTypes, statePropsType} from '../../App'
import { addMessageAC, updateMessageTextAC } from '../../redux/dialogsReducer'
import StoreContext from '../../StoreContext'
import Dialogs from './Dialogs'


type DialogsType = {
    state: statePropsType
    dispatch:(action:ActionsTypes)=>void

}


function DialogsContainer() {





    return (
        <StoreContext.Consumer>
            {(store) => {
                const sentMessage = () => {
                    // props.addMessage()
                    store.dispatch(addMessageAC())
                }

                const updateMessageText = (text: string) => {
                    // props.updateMessageText(dialogMessageRef.current?.value)
                    store.dispatch(updateMessageTextAC(text))
                }
                return <Dialogs state={store.getState().dialogs} addMessage={sentMessage} updateMessageText={updateMessageText} />
            }}
        </StoreContext.Consumer>
    )
}


export default DialogsContainer