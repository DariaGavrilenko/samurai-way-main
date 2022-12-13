import { connect } from "react-redux";
import axios from 'axios'
import React from 'react'
import { Preload } from '../Preloade/Preloade'
import Profile from './Profile'
import { AppStoreType } from "../../redux/storeRedux";
import { getProfileInfThunk, getStatusThunk, profilesPropsType, profileType, setUserProfileInfo, updateStatusThunk } from "../../redux/profileReducer";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import { profileAPI } from "../../API/API";
import { loginDataType } from "../../redux/authReducer";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

export type ProfileContainerPropsType = {
    state: profilesPropsType
    auth:loginDataType 
    setUserProfileInfo:(info:profileType)=>void
    getProfileInfThunk: (id:string | number)=>void
    getStatusThunk:(id:string | number)=>void
    updateStatusThunk:(text:string)=>void
}

export class ProfileContainer extends React.Component<ProfileContainerPropsType & RouteComponentProps<{userID:string}> > {
    componentDidMount(): void {
        let userID = this.props.match.params.userID ? this.props.match.params.userID :  26495
       this.props.getProfileInfThunk(userID)
       this.props.getStatusThunk(userID)
    }
    render() {
        return (
            <>
                {!this.props.state.profile ? <Preload /> :
                    <Profile profile={this.props.state.profile} status={this.props.state.status} updateStatusThunk={this.props.updateStatusThunk}/>}

            </>

        )
    }
}

const mapStatetoProps=(state:AppStoreType)=>{
return {
    state: state.profile
}
}

export const ProfileContainerPro = compose<React.ComponentType>(WithAuthRedirect,connect(mapStatetoProps,{setUserProfileInfo, getProfileInfThunk,getStatusThunk,updateStatusThunk }),withRouter)(ProfileContainer)