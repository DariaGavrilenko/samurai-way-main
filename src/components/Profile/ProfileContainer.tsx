import { connect } from "react-redux";
import React from 'react'
import Profile from './Profile'
import { AppStoreType } from "../../redux/storeRedux";
import { changeAvatar, getProfileInfThunk, getStatusThunk, profilesPropsType, profileType, saveProfile, setUserProfileInfo, updateStatusThunk } from "../../redux/profileReducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { loginDataType } from "../../redux/authReducer";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";
import { StaticContext } from "react-router";
import { InfoContainerFormType } from "./ProfileInfo/InfoContainerForm";

export type ProfileContainerPropsType = {
    state: profilesPropsType
    auth: loginDataType
    setUserProfileInfo: (info: profileType) => void
    getProfileInfThunk: (id: string | number | null) => void
    getStatusThunk: (id: string | number | null) => void
    updateStatusThunk: (text: string) => void
    autorisationUserID: number | null
    changeAvatar:(photo:File)=>void
    saveProfile:(formData: InfoContainerFormType)=>Promise<string>
}

export class ProfileContainer extends React.Component<ProfileContainerPropsType & RouteComponentProps<{ userID: string }>> {
    verificationId() {
        let userID = this.props.match.params.userID ? this.props.match.params.userID : 26495
        this.props.getProfileInfThunk(userID)
        this.props.getStatusThunk(userID)
    }

    componentDidMount(): void {
        this.verificationId()
    }
    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType & RouteComponentProps<{ userID: string; }, StaticContext, unknown>>, prevState: Readonly<{}>, snapshot?: any): void {
        if (this.props.match.params.userID !== prevProps.match.params.userID) {
            this.verificationId()
        }
    }

    render() {
        return (
            <>
                <Profile saveProfile={this.props.saveProfile} changeAvatar={this.props.changeAvatar} isOwner={!this.props.match.params.userID} profile={this.props.state.profile} status={this.props.state.status} updateStatusThunk={this.props.updateStatusThunk} />
            </>

        )
    }
}

const mapStatetoProps = (state: AppStoreType) => {
    return {
        state: state.profile,
        autorisationUserID: state.loginData.data.id
    }
}

export const ProfileContainerPro = compose<React.ComponentType>(WithAuthRedirect, connect(mapStatetoProps, { setUserProfileInfo, getProfileInfThunk, getStatusThunk, updateStatusThunk, changeAvatar, saveProfile }), withRouter)(ProfileContainer)