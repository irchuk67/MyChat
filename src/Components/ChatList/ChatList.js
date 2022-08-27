import React, {useEffect} from "react";
import './ChatList.scss';
import {connect} from "react-redux";
import {selectChat, loadChats} from "../../redux/actions";
import ChatItem from "../ChatItem/ChatItem";


const ChatList = (props) => {

    useEffect(()=> {
        props.loadChats()
    }, [props.sentMessages]);

    const onSelect = async (chat) => {
        props.selectChat(chat);
    }

    const chats = props.chats.map(chat => {
        return (
            <ChatItem chat={chat} key={chat.chatId} onSelect={() => onSelect(chat)}/>
        )
    })

    return(
        <div className={'chats'}>
            <h5>Chats</h5>
            {chats}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        chats: state.chats,
        selectedChat: state.selectedChat,
        sentMessages: state.sentMessages
    }
}

export default connect(mapStateToProps, {selectChat, loadChats
})(ChatList);