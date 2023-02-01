import { connect } from "react-redux";
import { AppStoreType } from "../../redux/storeRedux";
import { changeLoadingStatus, setFollow, setCurrentPage, setTotalUsersCount, setUsers, setUnfollow, changeFollowingProgres, getUsersThunk, followThunk, unFollowThunk } from "../../redux/usersReducer";
import React from "react"
import { usersPageType } from "../../redux/usersReducer"
import { Users } from "./Users";
import { Preload } from "../Preloade/Preloade";
import { catchUsers } from "../../redux/selectors";


type UsersPropsType = {
    state: usersPageType
    setFollow: (id: number) => void
    setUnfollow: (id: number) => void
    setUsers: (users: any) => void
    setTotalUsersCount: (count: number) => void
    setCurrentPage: (page: number) => void
    changeLoadingStatus: (isLoading: boolean) => void
    changeFollowingProgres: (isLoading: boolean, id: number) => void
    getUsersThunk: (page: number, pageSize: number) => void
    followThunk: (id: number) => void
    unFollowThunk: (id: number) => void
}

export class UsersAPIContainer extends React.Component<UsersPropsType> {
    componentDidMount(): void {
        this.props.getUsersThunk(this.props.state.currentPage, this.props.state.pageSize)
    }

    choosePage = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.getUsersThunk(page, this.props.state.pageSize)
    }

    render() {
        return (
            <>
                {this.props.state.isLoading ? <Preload /> :
                    <Users state={this.props.state}
                        choosePage={this.choosePage}
                        followThunk={this.props.followThunk}
                        unFollowThunk={this.props.unFollowThunk} />}
            </>

        )
    }
}



const mapStatetoProps = (state: AppStoreType) => {
    return {
        state: catchUsers(state)
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
    { setUnfollow, setFollow, setUsers, setTotalUsersCount, setCurrentPage, changeLoadingStatus, changeFollowingProgres, getUsersThunk, followThunk, unFollowThunk })(UsersAPIContainer)