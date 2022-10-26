import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";


let reducers = combineReducers({
    profile:profileReducer,
    dialogs:dialogsReducer,
    sidebar:sidebarReducer})

export let store = createStore(reducers)