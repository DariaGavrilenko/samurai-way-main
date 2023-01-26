import React, { ChangeEvent, useEffect, useState } from "react";

type ProfileStatusType = {
    status: string
    updateStatusThunk: (text: string) => void
}

export const ProfileStatusWithHook = (props: ProfileStatusType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)


    const activateEditMode = () => {
        setEditMode(true)
    }
    const diactivateEditMode = () => {
        setEditMode(false)
        props.updateStatusThunk(status)
    }
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        editMode ? <input autoFocus onBlur={diactivateEditMode} value={status} onChange={onChangeHandler} /> :
            <div onDoubleClick={activateEditMode}>{status ? status : 'click here twice to change status'}</div>

    )
}



