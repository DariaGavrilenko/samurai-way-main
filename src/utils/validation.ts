export const required = (value:string)=>{
    if(value){return undefined}
return "Field is required"

}

export const maxLenghtCreator = (length:number) => (value:string)=>{
    if(value.length > length){return `Max length is ${length} sumbols`}
    return undefined

}