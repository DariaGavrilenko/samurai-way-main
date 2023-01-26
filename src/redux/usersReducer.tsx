import { ThunkDispatch } from "redux-thunk"
import { usersAPI } from "../API/API"

export type usersPageType = initialStateType 
export type initialStateType = {
    users: usersType[]
    pageSize:number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean,
    followingProgress:number[]
}
type usersType = {
    id: number
    name: string
    img: string
    photos: {
        small: string | null
        large: string | null
    },
    status: string | null
    followed: boolean
    location: locationType
}


type locationType = {
    city: string
    country: string
}

const initialState = {
    users: [
        // { id: 1, name: 'Lily', img: lily, isFollowing: true, status: 'Life is good', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 2, name: 'Sam', img: sam, isFollowing: true, status: 'Love cat', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 3, name: 'Mark', img: mark, isFollowing: true, status: 'Tomorrow will be better', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 4, name: 'Dafna', img: dafna, isFollowing: false, status: "I'm fine. Thanks", location: { city: 'London', country: 'The UK' } }
    ],
    pageSize:100,
    totalUsersCount: 0,
    currentPage:1,
    isLoading: true,
    followingProgress:[]
}

export const userReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'FOLLOW': return { ...state, users: state.users.map(u => u.id === action.userId ? { ...u, followed: true } : u) }
        case 'UNFOLLOW': return { ...state, users: state.users.map(u => u.id === action.userId ? { ...u, followed: false } : u) }
        case 'SET_USERS': return { ...state, users: action.users}
        case 'SET_CURRENT_PAGE': return { ...state, currentPage: action.page }
        case 'SET_TOTAL_USERS_COUNT': return { ...state, totalUsersCount: action.count }
        case 'CHANGE_LOADING_STATUS': return {...state, isLoading: action.isLoading}
        case 'CHANGE_FOLLOWING_PROGRESS': return action.isLoading ? {...state, followingProgress: [...state.followingProgress, action.userId]} : {...state, followingProgress: state.followingProgress.filter(id=> id !== action.userId)}
        default: return state
    }
}


type ActionType = setFollowAC | setUnfollowAC |setUsersAC| setTotalUsersCountAC | setCurrentPageAC | changeLoadingStatusAC |changeFollowingProgresAC
type setFollowAC = ReturnType <typeof setFollow>
export const setFollow = (userId:number) => {
    return {
        type: "FOLLOW",
        userId
    } as const
}
type setUnfollowAC = ReturnType <typeof setUnfollow>
export const setUnfollow = (userId:number) => {
    return {
        type: "UNFOLLOW",
        userId
    } as const
}
type setUsersAC = ReturnType <typeof setUsers>
export const setUsers = (users:usersType[]) => {
    return {
        type: "SET_USERS",
       users
    } as const
}
type setTotalUsersCountAC = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (count: number) => {
    return {
        type: "SET_TOTAL_USERS_COUNT",
        count
    } as const
}

type setCurrentPageAC = ReturnType<typeof setCurrentPage >
export const setCurrentPage = (page: number) => {
    return {
        type: "SET_CURRENT_PAGE",
        page
    } as const
}

type changeLoadingStatusAC = ReturnType<typeof changeLoadingStatus  >
export const changeLoadingStatus  = (isLoading:boolean) => {
    return {
        type: "CHANGE_LOADING_STATUS",
        isLoading
    } as const
}

type changeFollowingProgresAC = ReturnType<typeof changeFollowingProgres  >
export const changeFollowingProgres  = (isLoading:boolean, userId:number) => {
    return {
        type: "CHANGE_FOLLOWING_PROGRESS",
        isLoading, 
        userId
    } as const
}

export const getUsersThunk = (page:number,pageSize:number) => {
    return (dispath:ThunkDispatch<initialStateType,unknown,ActionType>)=>{
       dispath(changeLoadingStatus(true))
        usersAPI.getUsers(page,pageSize).then(data => {
            dispath(changeLoadingStatus(false))
           dispath(setUsers(data.items))
           dispath(setTotalUsersCount(data.totalCount))//not needed in pagination
        })
    }
}

export const unFollowThunk = (id:number) => {
    return (dispath:ThunkDispatch<initialStateType,unknown,ActionType>)=>{
        dispath(changeFollowingProgres(true,id))
        usersAPI.unFollow(id).then(response => {
            if (response.data.resultCode === 0) {
                dispath(setUnfollow(id));
            }
            dispath(changeFollowingProgres(false,id))
        })
    }
}
export const followThunk = (id:number) => {
    return (dispatch:ThunkDispatch<initialStateType,unknown,ActionType>)=>{
        dispatch(changeFollowingProgres(true,id))
        usersAPI.follow(id).then(response => {
            if (response.data.resultCode === 0) {
               dispatch(setFollow(id))
            }
            dispatch(changeFollowingProgres(false,id))
        })
    }
}