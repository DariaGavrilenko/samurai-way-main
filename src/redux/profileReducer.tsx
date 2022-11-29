import { ThunkDispatch } from "redux-thunk"
import { profileAPI } from "../API/API"

type ActionsTypes = AddPostActiveType | UpdateNewPostTextActiveType | setUserProfileInfoType  

export type AddPostActiveType = ReturnType <typeof addPostAC>
export type UpdateNewPostTextActiveType = ReturnType <typeof updateNewPostTextAC>
export type setUserProfileInfoType = ReturnType <typeof setUserProfileInfo>

export const setUserProfileInfo = (info:profileType )=>({type:"SET_USER_PROFILE_INFO", info}as const)
export const addPostAC = ()=>({type:"ADD-POST"} as const) 
export const updateNewPostTextAC = (text:string)=>({type:"UPDATE-NEW-POST-TEXT", text:text}as const)
export type PostsDataPropsType = {
    id:number
    message:string
    likes:number
  }
export type profilesPropsType = {
    PostsData:Array<PostsDataPropsType>
    newPostText:string,
    profile: profileType | null
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
    newPostText: '',
    profile: null
}

const profileReducer =(state:InitialProfileStateType = initialState,action:ActionsTypes):InitialProfileStateType =>{
    switch (action.type) {
        case "ADD-POST":
            let newPost = { id: 5, message: state.newPostText, likes: 0 }
            // state.PostsData.push(newPost)
            // state.newPostText = ''
            // return state;
return {...state,PostsData: [newPost,...state.PostsData], newPostText: ''}
        case "UPDATE-NEW-POST-TEXT":
            // state.newPostText = action.text
            return {...state, newPostText: action.text}
            case 'SET_USER_PROFILE_INFO': return {...state, profile : action.info}
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




export default profileReducer