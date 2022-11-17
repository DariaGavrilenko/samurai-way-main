
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addPostAC, updateNewPostTextAC } from '../../../redux/profileReducer'
import { AppStoreType } from '../../../redux/storeRedux'
import MyPosts from './MyPosts'



// const MyPostssContainer = () => {
 

//   return (
//     <StoreContext.Consumer>
//       {
//         (store) => 
//         { const addPost = ()=>{ 
//           // props.state.dispatch(addPostAC())}
//        store.dispatch(addPostAC())}
       
       
//        const updateNewPostText = (text:string) =>{
//         store.dispatch(updateNewPostTextAC(text))
//        } 
//         return <MyPosts state={store.getState().profile} updateNewPostText={updateNewPostText} addPost={addPost} />}
//       }
//     </StoreContext.Consumer>
//   )
// }


type mapDispatchType = {
  addPost: ()=> void
  updateNewPostText: (text:string) => void
}

const mapStateToProps = (state:AppStoreType)=>{
return{
  state: state.profile
}
}
const mapDispatchToProps = (dispatch:Dispatch):mapDispatchType=>{
  return {
      addPost: () => dispatch(addPostAC()),
      updateNewPostText: (text:string) =>dispatch(updateNewPostTextAC(text))
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MyPostsContainer