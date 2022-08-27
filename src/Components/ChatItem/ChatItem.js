import React from 'react';
import {CheckCircleOutlined} from "@mui/icons-material";
import _ from 'lodash';
import './ChatItem.scss'
import {connect} from "react-redux";

const dateToNecessaryFormat = (currentDate) => {
    let date = new Date(currentDate);
    const longEnUSFormatter = new Intl.DateTimeFormat('en-US', {
        year:  'numeric',
        month: 'long',
        day:   'numeric',
    });
    return longEnUSFormatter.format(date);
}


const ChatItem = ({chat, onSelect}) => {
    const messages = window.sessionStorage.getItem(chat.chatId);
    console.log('last message sessionStorage: ' + messages)

    let lastNotification = chat.latestMessage;

    if (messages !== null){
        console.log(_.isEmpty(messages))
        lastNotification = JSON.parse(messages).slice(-1)[0];
    }

    return(
        <div className={'chat-item'}
             onClick={onSelect}
        >
            <div>
                <img src={chat.companionImage} alt="Companion image" className="img"/>
                {chat.companionIsActive ? <CheckCircleOutlined className={'is-active'}/> : null}
            </div>
            <div className="chat-item__content">
                <p className="chat-item__content--user-name">
                    {chat.companionName}
                </p>
                <p className="chat-item__content--last-message">
                    {lastNotification.text}
                </p>
            </div>
            <p className={'chat-item__last-date'}>
                {dateToNecessaryFormat(!_.isEmpty(messages) ? lastNotification.sendDatetime : lastNotification.date)}
            </p>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        sendMessages: state.sendMessages
    }
}
export default connect(mapStateToProps)(ChatItem);