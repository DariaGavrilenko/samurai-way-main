import lily from './lily.jpeg'
import sam from './sam.jpeg'
import mark from './mark.jpeg'
import dafna from './dafna.jpeg'
import main from './main.jpeg'



type ActionsTypes = UpdateMessageTextActiveType | AddMessageActiveType
export type UpdateMessageTextActiveType = ReturnType<typeof updateMessageTextAC>
export type AddMessageActiveType = ReturnType<typeof addMessageAC>
export type dialogPropsType = {
    DialogNamesData: Array<DialogNamesDataPropsType>
    DialogMessagesData: Array<DialogMessagesDataPropsType>
}
export type DialogNamesDataPropsType = {
    id: number
    name: string
    img: string
}
export type DialogMessagesDataPropsType = {
    id: number
    message: string
    img: string
}
type InitialDialogsStateType = dialogPropsType




export const addMessageAC = (text: string) => ({ type: "ADD-MESSAGE", text } as const)
export const updateMessageTextAC = (text: string) => ({ type: 'UPDATE-MESSAGE-TEXT', text: text } as const)

const initialState = {
    DialogNamesData: [
        { id: 1, name: 'Lily', img: lily, },
        { id: 2, name: 'Sam', img: sam },
        { id: 3, name: 'Mark', img: mark },
        { id: 4, name: 'Dafna', img: dafna }],
    DialogMessagesData: [
        { img: lily, id: 1, message: 'Boo' },
        {
            img: main, id: 2, message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.`},
        { img: lily, id: 1, message: 'OMG' },
        { img: main, id: 2, message: 'Hi' }
    ],
    DialogMessageText: ''
}
const dialogsReducer = (state: InitialDialogsStateType = initialState, action: ActionsTypes): InitialDialogsStateType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            let message = { img: lily, id: 1, message: action.text }
            return { ...state, DialogMessagesData: [...state.DialogMessagesData, message] }
        default:
            return state
    }
}

export default dialogsReducer