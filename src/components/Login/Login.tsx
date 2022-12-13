import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { Field, InjectedFormProps, reduxForm } from "redux-form"
import { logINThunk, logOUTThunk } from "../../redux/authReducer"
import { AppStoreType } from "../../redux/storeRedux"
import { required } from "../../utils/validation"
import { Input } from "../FormsControls/FormsControls"
import style from './../FormsControls/FormsControls.module.css'


export const Login = (props:any) => {
const onSubmit = (formData:FormDataType)=>{
    props.logINThunk(formData.email,formData.password,formData.rememberMe)
}
if (props.isAuth){
return <Redirect to={'/profile'} />}
    return (<div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>


    )
}

const mapStatetoProps=(state: AppStoreType)=>({
isAuth: state.loginData.isAuth
})

export const LoginContainer = connect(mapStatetoProps, {logOUTThunk, logINThunk})(Login)


type FormDataType = {
    email: string
    password:string
    rememberMe:boolean
}

export const LoginForm = (props:InjectedFormProps<FormDataType>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Login" name="email" component={Input}  validate={[required]}/>
            </div>
            <div>
                <Field placeholder="Passsword" name="password" component={Input}  validate={[required]} type={'password'}/>
            </div>
            <div>
                <Field type={'checkbox'} name='rememberMe' component={'input'}/> remember me
            </div>
            {props.error && <div className={style.commonError}>
                {props.error}
            </div>}
            
            <div>
                <button>log in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form:'login'})(LoginForm)