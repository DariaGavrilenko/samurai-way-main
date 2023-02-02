import React from 'react'
import { connect } from 'react-redux'
import { compose, Dispatch } from 'redux'
import { reset } from 'redux-form'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'
import { addMessageAC } from '../../redux/dialogsReducer'
import { AppStoreType } from '../../redux/storeRedux'
import Dialogs from './Dialogs'


type mapDispatchType = {
    addMessage: (text: string) => void
    resetForm:()=>void
}

const mapStateToProps = (state: AppStoreType) => {
    return {
        state: state.dialogs
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchType => {
    return {
        addMessage: (text: string) => dispatch(addMessageAC(text)),
        resetForm:()=>dispatch(reset('messageForm'))
    }

}

const DialogsContainer = compose<React.ComponentType>(WithAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(Dialogs)



export default DialogsContainer