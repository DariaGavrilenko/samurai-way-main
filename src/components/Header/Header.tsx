import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import { HeaderAPIContainerType } from './HeaderContainer'

export type HeaderType = HeaderAPIContainerType

const Header = ({ state, logOUTThunk, ...rest }: HeaderType) => {
  return (
    <header className={s.header}>
      <img src="https://www.pngmart.com/files/19/Geometry-Pattern-PNG-Clipart.png" alt="" />
      <div className={s.login}>
        <NavLink to='/Login'>{state.isAuth ?
          <div>
            {state.data.login}
            <button onClick={logOUTThunk} className={s.logOutButton}>Log Out</button>
          </div> : 'Login'}</NavLink>
      </div>
    </header>
  )
}
export default Header