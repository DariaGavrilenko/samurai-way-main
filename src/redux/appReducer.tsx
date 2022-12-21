import { FormAction, stopSubmit } from "redux-form"
import { ThunkDispatch } from "redux-thunk"
import { authorization } from "../API/API"
import { accessThunk } from "./authReducer"

export type initializeType = initialStateType
export type initialStateType = {
    isInitialize: boolean
}

const initialState = {
     isInitialize: false 
}


export const appReducer = (state:initialStateType = initialState,action:ActionsTypes):initializeType=>{
    switch(action.type){
        case 'INITIALIZE': return {...state, isInitialize:true}
        default: return state
    }
}
export type ActionsTypes = initializeSuccesType 
export type initializeSuccesType = ReturnType<typeof initializeSucces>
export const initializeSucces = () => {
    return {
        type: 'INITIALIZE',   
    } as const
}

export const initializeThunk = ()=>{
    return (dispatch:ThunkDispatch<initialStateType, unknown, ActionsTypes>)=>{ 
      let promise = dispatch(accessThunk())
        Promise.all([promise]).then(()=>{
        dispatch(initializeSucces())}
        )
    }
}

