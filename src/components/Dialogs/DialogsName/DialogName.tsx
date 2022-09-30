import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'

type DialogsNamesPropsType = {
    name: string
    id: number
    img: string
}

function DialogsNames({ name, id , img}: DialogsNamesPropsType) {
    return (
        <NavLink to={'/dialogs/' + id} className={s.dialogName} activeClassName={s.dialogNamesActive}>
            <div className={s.dialogImg}> <img src={img} alt="" /> </div>
            {name}</NavLink>
    )
}

export default DialogsNames