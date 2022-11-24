import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import { HeaderAPIContainerType } from './HeaderContainer'

export type HeaderType = HeaderAPIContainerType

const Header = (props:HeaderType) =>{
    return (
        <header className={s.header}>
        <img src="https://www.pngmart.com/files/19/Geometry-Pattern-PNG-Clipart.png" alt="" />
        <div className={s.login}>
          <NavLink to='/loading'>{props.state.isAuth? props.state.data.login : 'Login'}</NavLink>
          </div>  
      </header>
    )
}
export default Header