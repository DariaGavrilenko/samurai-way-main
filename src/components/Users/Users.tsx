import React from "react"
import { usersPageType } from "../../redux/usersReducer"
import { Paginator } from "../Paginator/Paginator"
import { User } from "./User"
import s from "./Users.module.css"


type UsersPropsType = {
    state: usersPageType
    choosePage: (page: number) => void
    followThunk: (id: number) => void
    unFollowThunk: (id: number) => void

}

export const Users = ({ state, choosePage, followThunk, unFollowThunk }: UsersPropsType) => {

    return (<div className={s.userPageContainer}>
        <Paginator totalItemCount={state.totalUsersCount} currentPage={state.currentPage}
            pageSize={state.pageSize} portionSize={10} choosePage={choosePage} />
        {state.users.map(u => <User state={state} user={u} followThunk={followThunk} unFollowThunk={unFollowThunk} key={u.id} />
        )}
    </div>)

}

