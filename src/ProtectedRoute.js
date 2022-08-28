import React from 'react';
import {connect} from "react-redux";
import Sidebar from "./Components/Sidebar/Sidebar";
import Chat from "./Components/Chat/Chat";
import {Route} from "react-router-dom";

const ProtectedRoute = (props, path) => {
    if(props.signedUser.isSignedIn){
        return(
            <Route path={path}>
                <React.Fragment>
                    <Sidebar />
                    <Chat/>
                </React.Fragment>
            </Route>

        )
    }else {
        return null
    }
}

const mapStateToProps = (state) => {
    return {
        signedUser: state.signedUser
    }
}
export default connect(mapStateToProps)(ProtectedRoute);