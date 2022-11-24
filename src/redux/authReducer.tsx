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