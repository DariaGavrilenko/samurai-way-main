
import { profilePropsType} from '../../../App'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props:profilePropsType) => {
 
    const postRendering = props.PostsData?.map(post => <Post  message={post.message} likes={post.likes}/>)
    return (
        <div className={s.posts}>
            my post
            <div className={s.addPostArea}>
                <textarea placeholder='Your message...'></textarea>
                <button className={s.addPostButton}>add posts</button>
            </div>
            <div>new post
                {postRendering}
            </div>
        </div>
    )
}
export default MyPosts