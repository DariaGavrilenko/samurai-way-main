import { connect } from "react-redux";
import { AppStoreType } from "../../redux/storeRedux";
import { changeLoadingStatus, setFollow, setCurrentPage, setTotalUsersCount, setUsers, setUnfollow, changeFollowingProgres } from "../../redux/usersReducer";
import React from "react"
import { usersPageType } from "../../redux/usersReducer"
import axios from "axios"
import { Users } from "./Users";
import { Preload } from "../Preloade/Preloade";
import { usersAPI } from "../../API/API";


type UsersPropsType = {
    state: usersPageType
    setFollow: (id: number) => void
    setUnfollow: (id: number) => void
    setUsers: (users: any) => void
    setTotalUsersCount: (count: number) => void
    setCurrentPage: (page: number) => void
    changeLoadingStatus: (isLoading: boolean) => void
    changeFollowingProgres: (isLoading: boolean, id:number) => void
}

export class UsersAPIContainer  extends React.Component<UsersPropsType> {
    componentDidMount(): void {
        this.props.changeLoadingStatus(true)
        usersAPI.getUsers(this.props.state.currentPage,this.props.state.pageSize).then(data => {
            this.props.changeLoadingStatus(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }
    choosePage = (page: number) =>{ this.props.setCurrentPage(page)
        this.props.changeLoadingStatus(true)
        usersAPI.getUsers(page,this.props.state.pageSize).then(data => {
            this.props.changeLoadingStatus(false)
            this.props.setUsers(data.items)
        })}
    render() {
        return (
            <>
                {this.props.state.isLoading ? <Preload /> :
                    <Users state={this.props.state}
                        setFollow={this.props.setFollow}
                        setUnfollow={this.props.setUnfollow}
                        choosePage={this.choosePage}
                        changeFollowingProgres={this.props.changeFollowingProgres}  />}

            </>

        )
    }
}



const mapStatetoProps = (state: AppStoreType) => {
    return {
        state: state.usersPage
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         setUnfollow: (id: number) => { dispatch(unfollowAC(id)) },
//         setFollow: (id: number) => { dispatch(followAC(id)) },
//         setUsers: (users: any) => dispatch(setUsersAC(users)),
//         setTotalUsersCount: (count: number) => dispatch(setTotalUsersCountAC(count)),
//         setCurrentPage: (page: number) => dispatch(setCurrentPageAC(page)),
//         changeLoadingStatus:(isLoading:boolean)=> dispatch(changeLoadingStatusAC(isLoading)),
//     }
// }


export const UsersContainer = connect(mapStatetoProps,
    { setUnfollow, setFollow, setUsers, setTotalUsersCount, setCurrentPage, changeLoadingStatus,changeFollowingProgres })(UsersAPIContainer)