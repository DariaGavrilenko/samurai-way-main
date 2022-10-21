import { dialogPropsType } from '../App'
import lily from './lily.jpeg'
import { ActionsTypes } from './state'


export type UpdateMessageTextActiveType = ReturnType <typeof updateMessageTextAC>
export type AddMessageActiveType = ReturnType <typeof addMessageAC>

export const addMessageAC = () =>({type:"ADD-MESSAGE"}as const)
export const updateMessageTextAC = (text:string)=>({type:'UPDATE-MESSAGE-TEXT',text:text}as const)


const dialogsReducer =(state:dialogPropsType, action:ActionsTypes)=>{
    switch (action.type) {
        case "ADD-MESSAGE":
            let message = { img: lily, id: 1, message: state.DialogMessageText }
            state.DialogMessagesData = [...state.DialogMessagesData, message]
            state.DialogMessageText = ''
            return state;
        case "UPDATE-MESSAGE-TEXT":
            state.DialogMessageText = action.text
            return state;
        default:
            return state
    }
}

export default dialogsReducer