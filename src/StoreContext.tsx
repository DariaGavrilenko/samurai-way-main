import React from "react"
import { AppStoreType, StoreType } from "./redux/storeRedux"

const StoreContext = React.createContext({} as AppStoreType)

type ProviderType = {
    store: AppStoreType
    children: any
}

export const Provider = (props:ProviderType)=>{
return <StoreContext.Provider value={props.store}>
    {props.children}
</StoreContext.Provider>
}

export default StoreContext