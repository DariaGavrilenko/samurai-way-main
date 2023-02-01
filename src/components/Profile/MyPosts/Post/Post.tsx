import s from './Post.module.css'

type PostPropsType = {
    message: string
    likes: number
}

const Post = ({ message, likes }: PostPropsType) => {
    return (
        <div className={s.post}>
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQGXsVq61uEnTb-ylmMlE09xA8iLpM-JYGF6ByM04RiJaCaAR1W" alt="" />
            <div className={s.messageArea}>{message}
                <div className={s.likesArea}>{likes}</div>
            </div>
        </div>
    )
}
export default Post