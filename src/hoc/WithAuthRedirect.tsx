import { ComponentType } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { AppStoreType } from "../redux/storeRedux"


type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStoreType): MapStatePropsType => {
    return {
        isAuth: state.loginData.isAuth
    }
}

export function WithAuthRedirect<T extends JSX.IntrinsicAttributes>(Component: ComponentType<T>) {
    console.log('WITHAUTHREDIRECT');

    let RedirectComponent = (props: MapStatePropsType) => {
        let { isAuth, ...restProps } = props
        console.log(isAuth, 'tyt');
        if (!isAuth) return <Redirect to={'/Login'} />
        return <Component {...restProps as T} />
    }
    let ConnectRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectRedirectComponent
}