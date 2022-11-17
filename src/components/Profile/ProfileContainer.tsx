import { connect } from "react-redux";
import axios from 'axios'
import React from 'react'
import { Preload } from '../Preloade/Preloade'
import Profile from './Profile'
import { AppStoreType } from "../../redux/storeRedux";
import { profilesPropsType, profileType, setUserProfileInfo } from "../../redux/profileReducer";
import { RouteComponentProps, withRouter } from "react-router-dom";

export type ProfileContainerPropsType = {
    state: profilesPropsType
    setUserProfileInfo:(info:profileType)=>void
}

export class ProfileContainer extends React.Component<ProfileContainerPropsType & RouteComponentProps<{userID:string}> > {
    componentDidMount(): void {
        let userID = this.props.match.params.userID ? this.props.match.params.userID : 2
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID).then(response => {
            this.props.setUserProfileInfo (response.data)
         
        })
    }
    render() {
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
    state: state.profile
}
}

export const ProfileContainerWithRoute = withRouter(ProfileContainer)
export const ProfileContainerPro = connect(mapStatetoProps,{setUserProfileInfo})(ProfileContainerWithRoute)