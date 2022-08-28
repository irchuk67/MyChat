import React from "react";
import accountPhoto from '../../icons/user.jpg';
import {CheckCircleOutline} from '@mui/icons-material';
import GoogleAuth from '../LogIn/GoogleAuth';
import './Account.scss';

const Account = () => {
    return(
        <div className={'account'}>
            <div className={'account__user'}>
                <img alt={'Current user'}
                     src={accountPhoto}
                     className={'img'}
                />
                <CheckCircleOutline className={'is-active'}/>
            </div>
            <div className={'account__sign-out'}>
                <GoogleAuth/>
            </div>
        </div>

    )
}

export default Account;