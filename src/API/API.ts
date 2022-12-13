import axios from "axios"
import { Login } from "../components/Login/Login"
const instance = axios.create({
    withCredentials:true,
    headers: {
        'API-KEY': '5734bb8c-7021-4aba-a4ad-3920f5296fd9'
    },
    baseURL:'https://social-network.samuraijs.com/api/1.0/'

})

export  const usersAPI = {
    getUsers(currentPage:number,pageSize:number){
       return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(responce=>responce.data)
    },
    follow(id:number){
        return instance.post(`follow/${id}`)},

    unFollow(id:number){
        return instance.delete(`follow/${id}`)}
}

export const authorization = {
    me(){
        return instance.get(`auth/me`)
    },
    LogIN(email:string,password:string,rememberMe:boolean = false){
        return instance.post(`auth/login`,{email,password,rememberMe})
    },
    logOUT(){
        return instance.delete(`auth/login`)
    }
}

export const profileAPI = {
    getProfileInf(userID:number|string){
      return instance.get(`profile/` + userID)
    },
    getStatus(userID:number|string){
        return instance.get(`profile/status/` + userID)
    },
    updateStatus(status:string){
        return instance.put(`profile/status/` , {status:status})
    } 
}