import { connect } from "react-redux";
import axios from 'axios'
import React from 'react'
import { Preload } from '../Preloade/Preloade'
import Profile from './Profile'
import { AppStoreType } from "../../redux/storeRedux";
import { getProfileInfThunk, profilesPropsType, profileType, setUserProfileInfo } from "../../redux/profileReducer";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import { profileAPI } from "../../API/API";
import { loginDataType } from "../../redux/authReducer";

export type ProfileContainerPropsType = {
    state: profilesPropsType
    auth:loginDataType 
    setUserProfileInfo:(info:profileType)=>void
    getProfileInfThunk: (id:string | number)=>void
}

export class ProfileContainer extends React.Component<ProfileContainerPropsType & RouteComponentProps<{userID:string}> > {
    componentDidMount(): void {
        let userID = this.props.match.params.userID ? this.props.match.params.userID : 2
       this.props.getProfileInfThunk(userID)
    }
    render() {
        if(!this.props.auth.isAuth) return <Redirect to={'/Login'}/>
        return (
            <>
                {!this.props.state.profile ? <Preload /> :
                    <Profile profile={this.props.state.profile}/>}

            </>

        )
    }
}

const mapStatetoProps=(state:AppStoreType)=>{
return {
    state: state.profile,
    auth:state.loginData
}
}

export const ProfileContainerWithRoute = withRouter(ProfileContainer)
export const ProfileContainerPro = connect(mapStatetoProps,{setUserProfileInfo, getProfileInfThunk })(ProfileContainerWithRoute)