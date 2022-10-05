import lily from './lily.jpeg'
import sam from './sam.jpeg'
import mark from './mark.jpeg'
import dafna from './dafna.jpeg' 
import main from './main.jpeg'
import { statePropsType } from '../App'
import rerenderEntireTree from '../render'

const state: statePropsType = {
    profile: {
        PostsData: [
            { id: 1, message: 'Hi, how are you?', likes: 12 },
            { id: 1, message: "It's my first post", likes: 23 }
        ]
    },
    dialogs: {
        DialogNamesData: [
            { id: 1, name: 'Lily',img: lily,},
            { id: 2, name: 'Sam',img: sam },
            { id: 3, name: 'Mark', img: mark },
            { id: 4, name: 'Dafna', img:dafna }],
        DialogMessagesData: [
            {img:lily, id: 1, message: 'Boo' },
            {img:main,  id: 2, message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.`},
            { img:lily, id: 1, message: 'OMG' },
            { img:main, id: 2, message: 'Hi' }
        ]
    },
    sidebar: {
        sidebarData: [
            { id: 1, name: 'Lily', img: lily, },
            { id: 2, name: 'Sam', img: sam },
            { id: 3, name: 'Mark', img: mark },
            { id: 4, name: 'Dafna', img: dafna }]
    }
    
}
export const addPost =(text:string)=>{
    debugger
    let newPost = {id:5,message:text,likes:0}
    state.profile.PostsData.push(newPost)
    rerenderEntireTree(state)
    console.log(state.profile.PostsData)
}
export default state
