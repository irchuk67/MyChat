import React, {useEffect, useRef} from 'react';
import {CheckCircleOutlined} from "@mui/icons-material";
import './ChatItem.scss'
import {connect} from "react-redux";
import soundReceived from '../../audio/mixkit-correct-answer-tone-2870.wav';

const dateToNecessaryFormat = (currentDate) => {
    let date = new Date(currentDate);
    const longEnUSFormatter = new Intl.DateTimeFormat('en-US', {
        year:  'numeric',
        month: 'long',
        day:   'numeric',
    });
    return longEnUSFormatter.format(date);
}


const ChatItem = ({chat, onSelect, selectedChat, sentMessages}) => {
    const prewNumberOfSentMessages = useRef(0);

    console.log(prewNumberOfSentMessages.current);
    console.log(sentMessages)
    useEffect(()=>{
        prewNumberOfSentMessages.current = sentMessages;
    }, [sentMessages]);

    const hasNewMessage = () => {
        if (selectedChat.chatId !== chat.chatId){
            if(chat.latestMessage.isNewMessage){
                return 'newMessage'
            }
        }else{
            let chats = JSON.parse(window.sessionStorage.getItem('chatList'));
            for (let i = 0; i < chats.length; i++) {
                if(chats[i].chatId === chat.chatId){
                    chats[i].latestMessage.isNewMessage = false
                }
            }
            window.sessionStorage.setItem('chatList', JSON.stringify(chats));
        }
    }

    const sound = () => {
        if(chat.latestMessage.isNewMessage){
            return soundReceived
        }else {
            return null
        }
    }

    return(
        <div className={`chat-item ${hasNewMessage()}`}
             onClick={onSelect}
        >
            {prewNumberOfSentMessages.current < sentMessages ? <audio autoPlay={true} src={sound()}/> : null }
            <div>
                <img src={chat.companionImage} alt="Companion image" className="img"/>
                {chat.companionIsActive ? <CheckCircleOutlined className={'is-active'}/> : null}
            </div>
            <div className="chat-item__content">
                <p className="chat-item__content--user-name">
                    {chat.companionName}
                </p>
                <p className="chat-item__content--last-message">
                    {chat.latestMessage.text}
                </p>
            </div>
            <p className={'chat-item__last-date'}>
                {dateToNecessaryFormat(chat.latestMessage.date)}
            </p>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        selectedChat: state.selectedChat,
        sentMessages: state.sentMessages
    }
}
export default connect(mapStateToProps)(ChatItem);