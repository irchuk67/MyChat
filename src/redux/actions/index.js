import {ADD_MESSAGE, LOAD_CHATS, MESSAGE_HISTORY, SEARCH_CHAT, SELECT_CHAT} from "../types";
import chats from '../../chats.json';
import userChats from '../../userChats.json';

const selectChat  = (chatData) => {
    return{
        type: SELECT_CHAT,
        payload: chatData
    }
}

const loadChats = () =>  {
    return{
        type: LOAD_CHATS,
        payload: userChats.chats
    }
}

const getMessageHistory = (id) => async dispatch => {
    const messages =  id ? await chats.chats.filter(el => {
        return id === el.chatId
    }) : null;

    dispatch(
        {
            type: MESSAGE_HISTORY,
            payload: messages[0].messages
        }
    )
}

const sendMessage = () => {
    return {
        type: ADD_MESSAGE,
        payload: 1
    }
}

const searchChat = (term) => {
    return{
        type: SEARCH_CHAT,
        payload: term
    }
}
export {selectChat, loadChats, getMessageHistory, sendMessage, searchChat}