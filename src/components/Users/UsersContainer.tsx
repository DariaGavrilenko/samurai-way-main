import { connect } from "react-redux";
import { AppStoreType } from "../../redux/storeRedux";
import { changeLoadingStatus, setFollow, setCurrentPage, setTotalUsersCount, setUsers, setUnfollow } from "../../redux/usersReducer";
import React from "react"
import { usersPageType } from "../../redux/usersReducer"
import axios from "axios"
import { Users } from "./Users";
import { Preload } from "../Preloade/Preloade";


type UsersPropsType = {
    state: usersPageType
    setFollow: (id: number) => void
    setUnfollow: (id: number) => void
    setUsers: (users: any) => void
    setTotalUsersCount: (count: number) => void
    setCurrentPage: (page: number) => void
    changeLoadingStatus: (isLoading: boolean) => void
}

export class UsersAPIContainer  extends React.Component<UsersPropsType> {
    componentDidMount(): void {
        this.props.changeLoadingStatus(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.pageSize}`).then(response => {
            this.props.changeLoadingStatus(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    choosePage = (page: number) =>{ this.props.setCurrentPage(page)
        this.props.changeLoadingStatus(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.state.pageSize}`).then(response => {
            this.props.changeLoadingStatus(false)
            this.props.setUsers(response.data.items)
        })}
    render() {
        return (
            <>
                {this.props.state.isLoading ? <Preload /> :
                    <Users state={this.props.state}
                        setFollow={this.props.setFollow}
                        setUnfollow={this.props.setUnfollow}
                        choosePage={this.choosePage} />}

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
    { setUnfollow, setFollow, setUsers, setTotalUsersCount, setCurrentPage, changeLoadingStatus, })(UsersAPIContainer)