import React from "react";
import accountPhoto from '../../icons/user.jpg';
import {CheckCircleOutline} from '@mui/icons-material';
import './Account.scss';

const Account = () => {
    return(
        <div className={'account'}>
            <img alt={'Current user'}
                 src={accountPhoto}
                 className={'img'}
            />
            <CheckCircleOutline className={'is-active'}/>

        </div>
    )
}

export default Account;