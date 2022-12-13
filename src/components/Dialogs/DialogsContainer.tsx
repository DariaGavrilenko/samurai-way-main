
import React from 'react'
import { connect } from 'react-redux'
import { compose, Dispatch } from 'redux'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'
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
    addMessage: (text:string)=> void
    // updateMessageText: (text:string) => void
}

const mapStateToProps =(state:AppStoreType)=>{
return{
    state: state.dialogs
}
}
const mapDispatchToProps = (dispatch:Dispatch):mapDispatchType=>{
    return{
        addMessage: (text:string) => dispatch(addMessageAC(text))
        // updateMessageText: (text:string) => dispatch(updateMessageTextAC(text))
    }

}

const DialogsContainer = compose<React.ComponentType>(WithAuthRedirect,connect(mapStateToProps,mapDispatchToProps))(Dialogs)



export default DialogsContainer