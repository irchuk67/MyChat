import React, { useEffect, useRef} from "react";
import Message from "../Message/Message";
import {getMessageHistory} from "../../redux/actions";
import {connect} from "react-redux";

const Messages = (props) => {
    const prevMessages = useRef(props.messages);
    useEffect(() => {
        prevMessages.current = props.messages
    })


    const {chatId, companionImage} = props.selectedChat;

    if((window.sessionStorage.getItem(props.selectedChat.chatId) === null) ||  prevMessages.current !== props.messages){
        props.getMessageHistory(props.selectedChat.chatId);
        console.log(window.sessionStorage);
        window.sessionStorage.setItem(props.selectedChat.chatId, JSON.stringify(props.messages));
    }

    const messages = JSON.parse(window.sessionStorage.getItem(chatId));
    console.log(messages)

    return messages.map(message => {
        const MyMessage = () => {
            return(
                <div className={'my-message'}>
                    <Message message={message} />
                </div>)
        }
        const CompanionMessage = () => {
            return(
                <div className={'not-my-message'}>
                    <Message message={message}  companion={companionImage}/>
                </div>
            )
        }

        return (
            message.isMyMessage ?  <MyMessage key={message.sendDateTime}/> : <CompanionMessage key={message.sendDateTime}/>
        )
    });


}

const mapStateToProps = (state) => {
    return {
        selectedChat: state.selectedChat,
        messages: state.messages,
        sentMessages: state.sentMessages
    }
}

export default connect(mapStateToProps, {getMessageHistory})(Messages);