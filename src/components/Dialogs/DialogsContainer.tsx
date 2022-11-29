
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addMessageAC, updateMessageTextAC } from '../../redux/dialogsReducer'
import { AppStoreType } from '../../redux/storeRedux'
import Dialogs from './Dialogs'





// function DialogssContainer() {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 const sentMessage = () => {
//                     // props.addMessage()
//                     store.dispatch(addMessageAC())
//                 }

//                 const updateMessageText = (text: string) => {
//                     // props.updateMessageText(dialogMessageRef.current?.value)
//                     store.dispatch(updateMessageTextAC(text))
//                 }
//                 return <Dialogs state={store.getState().dialogs} addMessage={sentMessage} updateMessageText={updateMessageText} />
//             }}
//         </StoreContext.Consumer>
//     )
// }

type mapDispatchType = {
    addMessage: ()=> void
    updateMessageText: (text:string) => void
}

const mapStateToProps =(state:AppStoreType)=>{
return{
    state: state.dialogs,
    auth: state.loginData
}
}
const mapDispatchToProps = (dispatch:Dispatch):mapDispatchType=>{
    return{
        addMessage: () => dispatch(addMessageAC()),
        updateMessageText: (text:string) => dispatch(updateMessageTextAC(text))
    }

}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer