import axios from "axios"
import React from "react"
import { NavLink } from "react-router-dom"
import { usersAPI } from "../../API/API"
import { usersPageType } from "../../redux/usersReducer"
import { Paginator } from "../Paginator/Paginator"
import s from "./Users.module.css"


type UsersPropsType = {
    state: usersPageType
    setFollow: (id: number) => void
    setUnfollow: (id: number) => void
    choosePage:(page:number)=> void
    changeFollowingProgres: (isLoading: boolean, id:number) => void
    followThunk: (id:number)=>void
    unFollowThunk: (id:number)=>void

}

export  const Users = (props:UsersPropsType)=>{
    // let pageCount =Math.ceil( props.state.totalUsersCount /  props.state.pageSize)
    // let pages = []
    // for (let i = 1; i <= pageCount; i++) {
    //     pages.push(i)
    // }

    const setFollowCallBack = (id: number) => {
        props.followThunk(id)
        // props.changeFollowingProgres(true,id)
        // usersAPI.follow(id).then(response => {
        //     if (response.data.resultCode === 0) {
        //         props.setFollow(id);
        //     }
        //     props.changeFollowingProgres(false,id)
        // })
    }

    const setUnfollowCallBack = (id: number) => {
        props.unFollowThunk(id)
        // props.changeFollowingProgres(true,id)
        // usersAPI.unFollow(id).then(response => {
        //     if (response.data.resultCode === 0) {
        //         props.setUnfollow(id);
        //     }
        //     props.changeFollowingProgres(false,id)
        // })
    }

    return (<div className={s.userPageContainer}>
        {/* <div className={s.pageSwitch}>
            {pages.map((p,index) => <span key={index} onClick={() => props.choosePage(p)} className={props.state.currentPage === p ? s.selectedPage : ''} > {p} </span>)}
        </div> */}
        <Paginator totalItemCount={props.state.totalUsersCount} currentPage={props.state.currentPage} pageSize={props.state.pageSize} portionSize={10} choosePage={props.choosePage}/>
        {props.state.users.map(u => <div className={s.usersContainer} key={u.id}> <div>
            <div className={s.foto}>
                <NavLink to={"/profile/" + u.id}>
                <img src={u.photos.small ? u.photos.small : u.followed ? "https://i.pinimg.com/564x/07/24/ac/0724acaf0726777b170d09d3774cdcb0.jpg" : "https://i.pinimg.com/564x/e8/48/4d/e8484d6b06aa3f16206627c023a159fd.jpg"} alt='' />
                </NavLink>
                </div>
            {u.followed ? <button disabled={props.state.followingProgress.some(id=>id === u.id)} className={s.unfollow} onClick={() => {setUnfollowCallBack(u.id) }}>Unfollow</button> :
                <button disabled={props.state.followingProgress.some(id=>id === u.id)} className={s.follow} onClick={() => {setFollowCallBack(u.id) }}>Follow</button>}
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

