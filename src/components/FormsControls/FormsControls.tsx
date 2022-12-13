import { WrappedFieldInputProps, WrappedFieldMetaProps } from "redux-form"
import style from './FormsControls.module.css'
type FormControls = {
    input:WrappedFieldInputProps
    meta:WrappedFieldMetaProps
    placeholder: string
}

export const Textarea =({input, meta, ...props}:FormControls)=>{
    return (
        <div className={meta.error && meta.touched ? style.error : ''}>
              <textarea {...input} {...props}/>
              <div>
              {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
        </div>
      
    )
} 

export const Input=({input, meta, ...props}:FormControls)=>{
    return (
        <div className={meta.error && meta.touched ? style.error : ''}>
              <input {...input} {...props}/>
              <div>
              {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
        </div>
      
    )
} 