import React, {Component} from 'react';
import {gapi} from 'gapi-script';
import {connect} from "react-redux";
import {signOut, signIn} from "../../redux/actions";
import {Google, Logout} from '@mui/icons-material';

class GoogleAuth extends Component {
    componentDidMount() {
        const start = () => gapi.client.init({
            clientId: '140681333736-i9tcend2vrmjoggl6dsmk8hpjc743jrn.apps.googleusercontent.com',
            scope: 'email',
            plugin_name: 'MyChat'
        }).then(() => {
            this.auth = gapi.auth2.getAuthInstance();
            this.onAuthChange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onAuthChange)
        });
        gapi.load('client: auth2', start)
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId(), 'google')
        } else {
            this.props.signOut()
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }


    renderButton() {
        if (this.props.signedUser.isSignedIn === null) {
            return null
        } else if (this.props.signedUser.isSignedIn) {
            return (
                <button className={'button-out button'} onClick={this.onSignOutClick}>
                    <Logout/>
                </button>
            )
        } else {
            return (
                <button className={'button-in button'} onClick={this.onSignInClick}>
                    <Google/>
                    Sign In With Google
                </button>
            )
        }
    }

    render() {
        return (
            <div>
                <div>{this.renderButton()}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        signedUser: state.signedUser
    }
}

export default connect(mapStateToProps, {signOut, signIn})(GoogleAuth);