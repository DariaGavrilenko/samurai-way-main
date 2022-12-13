import { ThunkDispatch } from "redux-thunk"
import { profileAPI } from "../API/API"

type ActionsTypes = AddPostActiveType | setUserProfileInfoType | getStatusACType 


export type AddPostActiveType = ReturnType <typeof addPostAC>
// export type UpdateNewPostTextActiveType = ReturnType <typeof updateNewPostTextAC>
export type setUserProfileInfoType = ReturnType <typeof setUserProfileInfo>
export type getStatusACType = ReturnType <typeof getStatusAC>


export const setUserProfileInfo = (info:profileType )=>({type:"SET_USER_PROFILE_INFO", info}as const)
export const addPostAC = (text:string)=>({type:"ADD-POST",text} as const) 
// export const updateNewPostTextAC = (text:string)=>({type:"UPDATE-NEW-POST-TEXT", text:text}as const)
export const getStatusAC = (text:string)=>({type:"GET_STATUS", text:text}as const)



export type PostsDataPropsType = {
    id:number
    message:string
    likes:number
  }
export type profilesPropsType = {
    PostsData:Array<PostsDataPropsType>
    // newPostText:string,
    profile: profileType | null
    status: string
  }
export type profileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts:{
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
    }
    photos:{
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
    // newPostText: '',
    profile: null,
    status: ''
}

const profileReducer =(state:InitialProfileStateType = initialState,action:ActionsTypes):InitialProfileStateType =>{
    switch (action.type) {
        case "ADD-POST":
            let newPost = { id: 5, message: action.text, likes: 0 }
            // state.PostsData.push(newPost)
            // state.newPostText = ''
            // return state;
return {...state,PostsData: [newPost,...state.PostsData]}
        // case "UPDATE-NEW-POST-TEXT":
        //     // state.newPostText = action.text
        //     return {...state, newPostText: action.text}
            case 'SET_USER_PROFILE_INFO': return {...state, profile : action.info}
            case 'GET_STATUS': return {...state, status: action.text}
        default:
            return state;
    }
}


export const getProfileInfThunk = (userID:number|string) => {
return (dispatch:ThunkDispatch<InitialProfileStateType, unknown, ActionsTypes>) =>{
    profileAPI.getProfileInf(userID).then(response => {
        dispatch(setUserProfileInfo (response.data))
     
    })
}
}

export const getStatusThunk = (userID: number | string) => {
    return (dispatch: ThunkDispatch<InitialProfileStateType, unknown, ActionsTypes>) => {
        profileAPI.getStatus(userID).then(response => {
            dispatch(getStatusAC(response.data))
        })
    }
}

export const updateStatusThunk = (status:string) => {
    return (dispatch: ThunkDispatch<InitialProfileStateType, unknown, ActionsTypes>) => {
        profileAPI.updateStatus(status).then(response =>{
             if(response.data.resultCode === 0){
            dispatch(getStatusAC(status))
        }})
    }
}



export default profileReducer