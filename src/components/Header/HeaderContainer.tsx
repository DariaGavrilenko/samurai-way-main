import React from 'react'
import { connect } from 'react-redux'
import { accessThunk, loginDataType, logOUTThunk, setAuthorisationData } from '../../redux/authReducer'
import { AppStoreType } from '../../redux/storeRedux'
import Header from './Header'

export type HeaderAPIContainerType = {
  state: loginDataType
  setAuthorisationData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => void
  accessThunk: () => void
  logOUTThunk: () => void
}

export class HeaderAPIContainer extends React.Component<HeaderAPIContainerType>{
  render() {
    return (
      <>
        <Header {...this.props} />
      </>
    )
  }
}

const mapStatetoProps = (state: AppStoreType) => {
  return {
    state: state.loginData
  }
}

export const HeaderContainer = connect(mapStatetoProps, { setAuthorisationData, accessThunk, logOUTThunk })(HeaderAPIContainer)