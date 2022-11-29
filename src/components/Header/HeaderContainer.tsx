import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { authorization } from '../../API/API'
import { accessThunk, loginDataType, setAuthorisationData } from '../../redux/authReducer'
import { AppStoreType } from '../../redux/storeRedux'
import Header from './Header'

export type HeaderAPIContainerType = {
  state: loginDataType
  setAuthorisationData: (userId: number, email: string, login: string) => void
  accessThunk: () => void
}


export class HeaderAPIContainer extends React.Component<HeaderAPIContainerType>{
  componentDidMount(): void {
     this.props.accessThunk()
  }
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

export const HeaderContainer = connect(mapStatetoProps, { setAuthorisationData, accessThunk })(HeaderAPIContainer)