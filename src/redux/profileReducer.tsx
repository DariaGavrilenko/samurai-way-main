import { profilePropsType } from "../App"
import { ActionsTypes } from "./state"

export type AddPostActiveType = ReturnType <typeof addPostAC>
export type UpdateNewPostTextActiveType = ReturnType <typeof updateNewPostTextAC>


export const addPostAC = ()=>({type:"ADD-POST"} as const) 
export const updateNewPostTextAC = (text:string)=>({type:"UPDATE-NEW-POST-TEXT", text:text}as const)

const profileReducer =(state:profilePropsType,action:ActionsTypes)=>{
    switch (action.type) {
        case "ADD-POST":
            let newPost = { id: 5, message: state.newPostText, likes: 0 }
            state.PostsData.push(newPost)
            state.newPostText = ''
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.text
            return state;
        default:
            return state;
    }
}

export default profileReducer