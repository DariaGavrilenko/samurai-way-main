import { connect } from "react-redux";
import { InitialSideBarStateType } from "../../redux/sidebarReducer";
import { AppStoreType } from "../../redux/storeRedux";
import Navbar from "./Nav";


const mapStatetoProps = (state:AppStoreType):InitialSideBarStateType=>{
return {
    sidebarData: state.sidebar.sidebarData
}
}
export const NavbarContainer = connect(mapStatetoProps)(Navbar)