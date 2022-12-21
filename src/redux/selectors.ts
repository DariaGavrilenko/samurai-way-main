import { createSelector } from "reselect";
import { AppStoreType } from "./storeRedux";

export const catchUsers = (state:AppStoreType)=>{
return state.usersPage
}


// export const usersPrimer = (state:AppStoreType)=>{
//     return state.usersPage.users
// }


// export const catchUsersSuperSelector = createSelector(usersPrimer,(users)=>{
// return users.filter(u=>true)
// }) 