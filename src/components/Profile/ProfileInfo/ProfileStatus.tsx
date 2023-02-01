import React, { ChangeEvent } from "react";

type ProfileStatusType = {
    status: string
    updateStatusThunk: (text: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        }
        )
    }
    diactivateEditMode = () => {
        this.setState({
            editMode: false
        }
        )
        this.props.updateStatusThunk(this.state.status)
    }
    componentDidUpdate(prevProps: ProfileStatusType, prevState: Readonly<{}>, snapshot?: any): void {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        }
        )
    }
    render() {
        return (
            this.state.editMode ? <input autoFocus onBlur={this.diactivateEditMode} value={this.state.status} onChange={this.onChangeHandler} /> : <div onDoubleClick={this.activateEditMode}>{this.props.status ? this.props.status : 'click here twice to change status'}</div>

        )
    }
}