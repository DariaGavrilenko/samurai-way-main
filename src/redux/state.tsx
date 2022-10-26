// import lily from './lily.jpeg'
// import sam from './sam.jpeg'
// import mark from './mark.jpeg'
// import dafna from './dafna.jpeg' 
// import main from './main.jpeg'
// import { statePropsType } from '../App'
// import profileReducer, { AddPostActiveType, UpdateNewPostTextActiveType } from './profileReducer'
// import dialogsReducer, { AddMessageActiveType, UpdateMessageTextActiveType } from './dialogsReducer'
// import sidebarReducer from './sidebarReducer'


// // let rerenderEntireTree=()=>{}
// // export const subscribe = (observer:()=>void)=>{
// //     rerenderEntireTree = observer
// // }

    
// // }
// // export const addPost =(text:string)=>{
// //     let newPost = {id:5,message:text,likes:0}
// //     state.profile.PostsData.push(newPost)
// //     state.profile.newPostText = ''
// //     rerenderEntireTree()
// //     console.log(state.profile.PostsData)
// // }

// // export const updateNewPostText = (text:string) =>{
// // state.profile.newPostText = text
// // rerenderEntireTree()
// // }

// // export const addMessage=(text:string)=>{
// // let message = { img:lily, id: 1, message: state.dialogs.DialogMessageText }
// // state.dialogs.DialogMessagesData = [...state.dialogs.DialogMessagesData,message]
// // state.dialogs.DialogMessageText = ''
// // rerenderEntireTree()
// // }

// // export const updateMessageText =(text:string)=>{
// //     state.dialogs.DialogMessageText=text
// //     rerenderEntireTree()
// // }
// // export default state
 
// // export const addPostAC = ()=>({type:"ADD-POST"} as const) 
// // export const updateNewPostTextAC = (text:string)=>({type:"UPDATE-NEW-POST-TEXT", text:text}as const)
// // export const addMessageAC = () =>({type:"ADD-MESSAGE"}as const)
// // export const updateMessageTextAC = (text:string)=>({type:'UPDATE-MESSAGE-TEXT',text:text}as const)



// export type StoreType = {
//     _state: statePropsType
//     _callSubscriber:()=>void
//     getState:() => statePropsType
//     subscribe: (callback: () => void) => void
//     dispatch:(action:ActionsTypes)=>void
// }
// export type ActionsTypes = AddPostActiveType | UpdateNewPostTextActiveType | UpdateMessageTextActiveType | AddMessageActiveType

// export const store:StoreType = {

//     _state: {
//         profile: {
//             PostsData: [
//                 { id: 1, message: 'Hi, how are you?', likes: 12 },
//                 { id: 1, message: "It's my first post", likes: 23 }
//             ],
//             newPostText: ''
//         },
//         dialogs: {
//             DialogNamesData: [
//                 { id: 1, name: 'Lily', img: lily, },
//                 { id: 2, name: 'Sam', img: sam },
//                 { id: 3, name: 'Mark', img: mark },
//                 { id: 4, name: 'Dafna', img: dafna }],
//             DialogMessagesData: [
//                 { img: lily, id: 1, message: 'Boo' },
//                 {
//                     img: main, id: 2, message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
//                     when an unknown printer took a galley of type and scrambled it to make a type specimen book.`},
//                 { img: lily, id: 1, message: 'OMG' },
//                 { img: main, id: 2, message: 'Hi' }
//             ],
//             DialogMessageText: ''
//         },
//         sidebar: {
//             sidebarData: [
//                 { id: 1, name: 'Lily', img: lily, },
//                 { id: 2, name: 'Sam', img: sam },
//                 { id: 3, name: 'Mark', img: mark },
//                 { id: 4, name: 'Dafna', img: dafna }]
//         }

//     },
//     _callSubscriber(){},



//     getState(){
//         return this._state
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },

  
//     dispatch(action) {

//         this._state.profile = profileReducer(this._state.profile, action)
//         this._state.dialogs = dialogsReducer(this._state.dialogs, action)
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//         this._callSubscriber()
//     }
// }
const pusto = {}

export default pusto