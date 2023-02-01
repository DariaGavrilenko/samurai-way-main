import { NavLink } from 'react-router-dom'
import { sidebarDataPropsType} from '../../App'
import s from './Nav.module.css'


const Navbar =(props:sidebarDataPropsType)=>{
    return(
        <nav className={s.nav}>
        <div><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></div>
        <div><NavLink to="/dialogs" activeClassName={s.active}>Message</NavLink></div>
        <div><NavLink to='/users' activeClassName={s.active}>Followers</NavLink></div>
        <div><NavLink to="/news" activeClassName={s.active}>News</NavLink></div>
        <div><NavLink to="/music" activeClassName={s.active}>Music</NavLink></div>
        <div><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></div>
        <div className={s.sidebar}><span className={s.friendsTeg}>Friends</span>{props.sidebarData.map((e,index)=><div className={s.navImg} key={index}><img src={e.img} alt="" />{e.name}</div>)}</div>
      </nav>
    )
}
export default Navbar