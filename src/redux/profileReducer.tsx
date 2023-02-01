import { FormAction, stopSubmit } from "redux-form"
import { ThunkDispatch } from "redux-thunk"
import { profileAPI } from "../API/API"
import { InfoContainerFormType } from "../components/Profile/ProfileInfo/InfoContainerForm"
import { AppStoreType } from "./storeRedux"

type ActionsTypes = AddPostActiveType | setUserProfileInfoType | getStatusACType | changeAvatarACType


export type AddPostActiveType = ReturnType<typeof addPostAC>
export type setUserProfileInfoType = ReturnType<typeof setUserProfileInfo>
export type getStatusACType = ReturnType<typeof getStatusAC>
export type changeAvatarACType = ReturnType<typeof changeAvatarAC>


export const setUserProfileInfo = (info: profileType) => ({ type: "SET_USER_PROFILE_INFO", info } as const)
export const addPostAC = (text: string) => ({ type: "ADD-POST", text } as const)
export const getStatusAC = (text: string) => ({ type: "GET_STATUS", text: text } as const)
export const changeAvatarAC = (photo: {  small: string | null, large: string | null}) => ({ type: "GET_AVATAR", photo: photo } as const)



export type PostsDataPropsType = {
    id: number
    message: string
    likes: number
}
export type profilesPropsType = {
    PostsData: Array<PostsDataPropsType>
    profile: profileType 
    status: string
}
export type profileType = {
    userId?: number | string
    lookingForAJob?: boolean
    aboutMe?:string
    lookingForAJobDescription?: string
    fullName?: string
    contacts?: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos?: {
        small: string | null
        large: string | null
    }
}

type InitialProfileStateType = profilesPropsType

const initialState = {
    PostsData: [
        { id: 1, message: 'Hi, how are you?', likes: 12 },
        { id: 1, message: "It's my first post", likes: 23 }
    ],
    profile: {},
    status: ''
}

const profileReducer = (state: InitialProfileStateType = initialState, action: ActionsTypes): InitialProfileStateType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = { id: 5, message: action.text, likes: 0 }
            return { ...state, PostsData: [newPost, ...state.PostsData] }
        case 'SET_USER_PROFILE_INFO': return { ...state, profile: action.info }
        case 'GET_STATUS': return { ...state, status: action.text }
        case 'GET_AVATAR':
             return {...state, profile:{...state.profile, photos:action.photo}}
        default:
            return state;
    }
}


export const getProfileInfThunk = (userID: number | null) => async (dispatch: ThunkDispatch<InitialProfileStateType, unknown, ActionsTypes>) => {
    const response = await profileAPI.getProfileInf(userID)
    dispatch(setUserProfileInfo(response.data))
}


export const getStatusThunk = (userID: number | string) => async (dispatch: ThunkDispatch<InitialProfileStateType, unknown, ActionsTypes>) => {
    const response = await profileAPI.getStatus(userID)
    dispatch(getStatusAC(response.data))
}

export const updateStatusThunk = (status: string) => async (dispatch: ThunkDispatch<InitialProfileStateType, unknown, ActionsTypes>) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(getStatusAC(status))
    }
}

export const changeAvatar = (file: File) => async (dispatch: ThunkDispatch<InitialProfileStateType, unknown, ActionsTypes>) => {
    const response = await profileAPI.updateAvatar(file)
    if (response.data.resultCode === 0) {
      dispatch(changeAvatarAC(response.data.data.photos))
    }
}

export const saveProfile = (formData: InfoContainerFormType) => async (dispatch: ThunkDispatch<InitialProfileStateType, unknown, ActionsTypes | FormAction> , getState:()=>AppStoreType) => {
   const id = getState().loginData.data.id
    const response = await profileAPI.updateProfile(formData)
    if (response.data.resultCode === 0) {
      dispatch(getProfileInfThunk(id))
    }else{
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit("edit-profile", { _error: message }))
        return Promise.reject(response.data.messages[0])
    }
}

export default profileReducer