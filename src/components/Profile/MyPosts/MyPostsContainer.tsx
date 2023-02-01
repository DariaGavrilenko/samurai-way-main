
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addPostAC } from '../../../redux/profileReducer'
import { AppStoreType } from '../../../redux/storeRedux'
import MyPosts from './MyPosts'

type mapDispatchType = {
  addPost: (text: string) => void
}

const mapStateToProps = (state: AppStoreType) => {
  return {
    state: state.profile
  }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchType => {
  return {
    addPost: (text: string) => dispatch(addPostAC(text)),
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer