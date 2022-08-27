import React, {useState} from "react";
import './Chat.scss';
import {connect} from "react-redux";
import {getMessageHistory, sendMessage} from '../../redux/actions'
import {CheckCircleOutlined, Send} from "@mui/icons-material";
import Messages from "../Messages/Messages";
import {randomJoke} from "../../api/chucknorisAPI";

const transformDate = (date) => {
    const howToWriteNumber = (number) => {
        return number < 10 ? `0${number}` : number
    }
    return howToWriteNumber(date.getMonth() + 1)
        + '/'
        + howToWriteNumber(date.getDay())
        + '/'
        + howToWriteNumber(date.getFullYear())
        + ' '
        + howToWriteNumber(date.getHours())
        + ':'
        + howToWriteNumber(date.getMinutes())
        + ':'
        + howToWriteNumber(date.getSeconds())
}

const sendMessageFunc = (sendNewMessage, messageText, chatId, isMyMessage) => {
    const date = new Date();
    const formattedDate = transformDate(date);

    const newMyMessage = {
        text: messageText,
        sendDatetime: formattedDate,
        isMyMessage: isMyMessage
    }

    window.sessionStorage.setItem(chatId, JSON.stringify([...JSON.parse(window.sessionStorage.getItem(chatId)), newMyMessage]))
    sendNewMessage();
}

const Chat = props => {
    const [messageText, setMessageText] = useState('');

    const onMessageChange = (event) => {
        setMessageText(event.target.value);
    }

    const onMessageSend = (e) => {
        e.preventDefault();

        if(messageText){
            sendMessageFunc(props.sendMessage, messageText, props.selectedChat.chatId, true);
            setMessageText('')
        }


        setTimeout(() => randomJoke().then(res => {
            if (res.value){
                sendMessageFunc(props.sendMessage, res.value, props.selectedChat.chatId, false)
            }


        }), Math.random()*5000 + 10000)
    }

    if(props.selectedChat.chatId){
        const {companionName, companionImage, companionIsActive} = props.selectedChat;
        return(
            <div className={'chat'}>
                <div className={'user'}>
                    <div>
                        <img src={companionImage} alt="Companion image" className="img"/>
                        {companionIsActive ? <CheckCircleOutlined className={'is-active'}/> : null}
                    </div>
                    <p className="user__name">
                        {companionName}
                    </p>
                </div>
                <div className={"messages"}>
                    <Messages/>
                </div>
                <div className="write-field">
                    <form onSubmit={(e) => onMessageSend(e)}>
                        <input placeholder={'Type your message'}
                               value={messageText}
                               onChange={event => onMessageChange(event)}
                        />
                        <Send className={'send'}/>
                    </form>

                </div>
            </div>
        )
    }

    return <div className={'chat'}/>

}

const mapStateToProps = (state) => {
    return {
        selectedChat: state.selectedChat,
        messages: state.messages
    }
}
export default connect(mapStateToProps, {getMessageHistory, sendMessage})(Chat);