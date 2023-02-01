import s from './Preload.module.css'

export const Preload = ()=>{
    return (
        <div className={s.preloadContainer}>
            <img src='https://i.pinimg.com/originals/97/e9/42/97e942ce7fc4e9d4ea6d844a382f251f.gif' alt="loading" />
        </div>
    )
}