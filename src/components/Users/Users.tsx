import React from "react"
import { NavLink } from "react-router-dom"
import { usersPageType } from "../../redux/usersReducer"
import s from "./Users.module.css"


type UsersPropsType = {
    state: usersPageType
    setFollow: (id: number) => void
    setUnfollow: (id: number) => void
    choosePage:(page:number)=> void
}

export  const Users = (props:UsersPropsType)=>{
    let pageCount =Math.ceil( props.state.totalUsersCount /  props.state.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return (<div className={s.userPageContainer}>
        <div className={s.pageSwitch}>
            {pages.map(p => <span onClick={() => props.choosePage(p)} className={props.state.currentPage === p ? s.selectedPage : ''} > {p} </span>)}
        </div>
        {props.state.users.map(u => <div className={s.usersContainer} key={u.id}> <div>
            <div className={s.foto}>
                <NavLink to={"/profile/" + u.id}>
                <img src={u.photos.small ? u.photos.small : u.followed ? "https://i.pinimg.com/564x/07/24/ac/0724acaf0726777b170d09d3774cdcb0.jpg" : "https://i.pinimg.com/564x/e8/48/4d/e8484d6b06aa3f16206627c023a159fd.jpg"} alt='' />
                </NavLink>
                </div>
            {u.followed ? <button className={s.unfollow} onClick={() => {props.setUnfollow(u.id) }}>Unfollow</button> :
                <button className={s.follow} onClick={() => {props.setFollow(u.id) }}>Follow</button>}
        </div>
            <div className={s.InfoContainer}>
                <div className={s.name}>{u.name}</div>
                <div>My status:
                    <span>{u.status}</span>
                </div>
                <div>My location:
                    {/* <span>{u.location.city}, {u.location.country}</span> */}
                </div>
            </div>
        </div>
        )}
    </div>)

}

