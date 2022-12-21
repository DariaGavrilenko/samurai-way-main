import { FormAction, stopSubmit } from "redux-form"
import { ThunkDispatch } from "redux-thunk"
import { authorization } from "../API/API"

export type loginDataType = initialStateType
export type initialStateType = {
    data: {
        id:  null | number
        email: null | string
        login: null | string
    },
    isAuth: boolean
}

const initialState = {
    data: {
        id: null,
        email: null,
        login: null
      },
     isAuth: false
}


export const authReducer = (state:initialStateType = initialState,action:ActionsTypes):loginDataType=>{
    console.log(state);
    switch(action.type){
        case 'SET_AUTH_DATA': console.log({...state,  data: {...state.data, ...action.data}, isAuth: action.isAuth})
        return {...state,  data: {...state.data, ...action.data}, isAuth: action.isAuth}
        default: return state
    }
}
export type ActionsTypes = setAuthorisationData
export type setAuthorisationData = ReturnType<typeof setAuthorisationData>
export const setAuthorisationData = (id: number|null, email: string|null, login: string|null, isAuth:boolean) => {
    return {
        type: 'SET_AUTH_DATA',
        data: {
           id,
            email,
            login
        },
        isAuth
    } as const
}

export const accessThunk:any = ()=>{
    return (dispatch:ThunkDispatch<initialStateType, unknown, ActionsTypes>):Promise<any>=>{
     return authorization.me().then(response => {
            if(response.data.resultCode === 0){let {id, email, login} = response.data.data
            dispatch(setAuthorisationData(id, email, login,true))}
          })
    }
}

export const logINThunk = (email:string,password:string,rememberMe:boolean)=>{
    return (dispatch:ThunkDispatch<initialStateType, unknown, ActionsTypes | FormAction>)=>{
        authorization.LogIN(email,password,rememberMe).then(response => {
            if(response.data.resultCode === 0){dispatch(accessThunk())}
            else{
               console.log(response) 
              let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'  
                dispatch(stopSubmit("login",{_error: message}))
            }
          })
    }
}

export const logOUTThunk = ()=>{
    debugger
    return (dispatch:ThunkDispatch<initialStateType, unknown, ActionsTypes>)=>{
        authorization.logOUT().then(response => {
            if(response.data.resultCode === 0){dispatch(setAuthorisationData(null, null, null,false))}
          })
    }
}