import { ThunkDispatch } from "redux-thunk"
import { authorization } from "../API/API"

export type loginDataType = initialStateType
export type initialStateType = {
    data: {
        id: number | null
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


export const authRsducer = (state = initialState,action:ActionsTypes):initialStateType=>{
    switch(action.type){
        case 'SET_AUTH_DATA': console.log({...state,  data: {...state.data, ...action.data}})
        return {...state,  data: {...state.data, ...action.data}, isAuth: true}
        default: return state
    }
}
export type ActionsTypes = setAuthorisationData
export type setAuthorisationData = ReturnType<typeof setAuthorisationData>
export const setAuthorisationData = (id: number, email: string, login: string) => {
    return {
        type: 'SET_AUTH_DATA',
        data: {
           id,
            email,
            login
        }
    } as const
}

export const accessThunk = ()=>{
    return (dispatch:ThunkDispatch<initialStateType, unknown, ActionsTypes>)=>{
        authorization.logIn().then(response => {
            if(response.data.resultCode === 0){let {id, email, login} = response.data.data
            dispatch(setAuthorisationData(id, email, login))}
          })
    }
}