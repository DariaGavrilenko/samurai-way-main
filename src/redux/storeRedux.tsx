import { combineReducers, createStore } from "redux";
import { ActionsTypes, statePropsType } from "../App";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import { userReducer } from "./usersReducer";

// export type StoreType = {
//     _state: statePropsType
//     _callSubscriber:()=>void
//     getState:() => statePropsType
//     subscribe: (callback: () => void) => void
//     dispatch:(action:ActionsTypes)=>void
// }

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: userReducer
})

export let store = createStore(reducers);
export type AppStoreType =  ReturnType<typeof reducers>