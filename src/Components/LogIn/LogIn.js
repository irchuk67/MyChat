import React from 'react';
import GoogleAuth from "./GoogleAuth";
import './LogIn.scss';
import {connect} from "react-redux";

const LogIn = (props) => {
    if (!props.signedUser.isSignedIn){
        return (
            <div className={'log-in'}>
                <div className="log-in__content">
                    <p className="log-in__heading">
                        My Chat
                    </p>
                    <GoogleAuth className="log-in__button"/>
                </div>
            </div>
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
export default connect(mapStateToProps)(LogIn);