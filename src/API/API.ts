import axios from "axios"
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
    logIn(){
        return instance.get(`auth/me`)
    }
}

export const profileAPI = {
    getProfileInf(userID:number|string){
      return instance.get(`profile/` + userID)
    }  
}