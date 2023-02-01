import { ChangeEvent, useRef } from 'react'
import s from './ProfileInfo.module.css'


export type ProfileInputPropsType = {
    changeAvatar: (photo:File)=>void
}

function ChangeAvatarInput({ changeAvatar }: ProfileInputPropsType) {
   
    const onPhotoChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
       if( e.target.files){
        changeAvatar(e.target.files[0])
       }

    }
    const inputRef = useRef<HTMLInputElement>(null)

    const selectFileHandler = () => {
        inputRef && inputRef.current?.click();
    };


    return (
                    <div className={s.changeAvatarButtonContainer}>
                        <button onClick={selectFileHandler} className={s.changeAvatarButton}>Change avatar</button>
                        <input
                        style={{display: 'none'}}
                        ref={inputRef}
                        type="file" onChange={onPhotoChangeHandler}/>
                    </div> 
    )
}


export default ChangeAvatarInput
