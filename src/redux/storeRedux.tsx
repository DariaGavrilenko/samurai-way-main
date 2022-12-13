import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { authReducer } from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import { userReducer } from "./usersReducer";
import {reducer as formReducer} from 'redux-form'

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
    usersPage: userReducer,
    loginData: authReducer,
    form:formReducer
})

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export type AppStoreType =  ReturnType<typeof reducers>