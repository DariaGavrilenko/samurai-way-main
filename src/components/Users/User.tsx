import React from "react"
import { NavLink } from "react-router-dom"
import { usersPageType, usersType } from "../../redux/usersReducer"
import s from "./Users.module.css"


type UsersPropsType = {
    state: usersPageType
    user: usersType
    followThunk: (id: number) => void
    unFollowThunk: (id: number) => void

}

export const User = ({ state, user, followThunk, unFollowThunk }: UsersPropsType) => {


    const setFollowCallBack = (id: number) => {
        followThunk(id)
    }

    const setUnfollowCallBack = (id: number) => {
        unFollowThunk(id)

    }

    return (
        <div className={s.usersContainer}> <div>
            <div className={s.foto}>
                <NavLink to={"/profile/" + user.id}>
                    <img src={user.photos.small ? user.photos.small : user.followed
                        ? "https://i.pinimg.com/564x/07/24/ac/0724acaf0726777b170d09d3774cdcb0.jpg"
                        : "https://i.pinimg.com/564x/e8/48/4d/e8484d6b06aa3f16206627c023a159fd.jpg"} alt='' />
                </NavLink>
            </div>
            {user.followed ? <button disabled={state.followingProgress.some(id => id === user.id)}
                className={s.unfollow} onClick={() => { setUnfollowCallBack(user.id) }}>Unfollow</button> :
                <button disabled={state.followingProgress.some(id => id === user.id)}
                    className={s.follow} onClick={() => { setFollowCallBack(user.id) }}>Follow</button>}
        </div>
            <div className={s.InfoContainer}>
                <div className={s.name}>{user.name}</div>
                <div>My status:
                    <span>{user.status}</span>
                </div>
                <div>My location:
                    {/* <span>{u.location.city}, {u.location.country}</span> */}
                </div>
            </div>
        </div>
    )
}


