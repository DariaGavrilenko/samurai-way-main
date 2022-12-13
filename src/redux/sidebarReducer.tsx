import { sidebarDataPropsType } from "../App"
import lily from './lily.jpeg'
import sam from './sam.jpeg'
import mark from './mark.jpeg'
import dafna from './dafna.jpeg' 
import { AddPostActiveType} from "./profileReducer"
import { AddMessageActiveType, UpdateMessageTextActiveType } from "./dialogsReducer"

type ActionsTypes = AddPostActiveType | UpdateMessageTextActiveType | AddMessageActiveType
export type InitialSideBarStateType = sidebarDataPropsType

const initialState = {
    sidebarData: [
        { id: 1, name: 'Lily', img: lily, },
        { id: 2, name: 'Sam', img: sam },
        { id: 3, name: 'Mark', img: mark },
        { id: 4, name: 'Dafna', img: dafna }]
}


const sidebarReducer =(state:InitialSideBarStateType = initialState,action:ActionsTypes):InitialSideBarStateType =>{
return state
}

export default sidebarReducer