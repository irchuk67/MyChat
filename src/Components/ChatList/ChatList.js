import React, {useEffect} from "react";
import './ChatList.scss';
import {connect} from "react-redux";
import {selectChat, loadChats, openSidebar} from "../../redux/actions";
import ChatItem from "../ChatItem/ChatItem";
import {useRef} from "react";


const ChatList = (props) => {
    const prevChats = useRef(props.chats);

    const onSelect = async (chat) => {
        props.selectChat(chat);
        props.openSidebar(true)
    }

    useEffect(() => {
        prevChats.current = props.chats;
    })

    if(window.sessionStorage.getItem('chatList') === null || prevChats.current !== props.chats){
        props.loadChats();
        window.sessionStorage.setItem('chatList', JSON.stringify(props.chats))
    }

    const chatList = JSON.parse(window.sessionStorage.getItem('chatList'))
        .sort((a, b) =>  new Date(b.latestMessage.date) - new Date(a.latestMessage.date));

    const filteredList = props.searchTerm === '' ?
        chatList :
        chatList.filter((el) => el.companionName.toLowerCase().search(props.searchTerm.toLowerCase()) !== -1)

    const chats = filteredList
        .map(chat => {
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
        sentMessages: state.sentMessages,
        searchTerm: state.searchTerm
    }
}

export default connect(mapStateToProps, {selectChat, loadChats, openSidebar
})(ChatList);