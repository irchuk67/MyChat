import {combineReducers} from "redux";
import ChatReducer from "./ChatReducer";
import LoadChats from "./LoadChats";
import MessageReducer from "./MessageReducer";
import SendMessageReducer from "./SendMessageReducer";

export default combineReducers({
    selectedChat: ChatReducer,
    chats: LoadChats,
    messages: MessageReducer,
    sentMessages: SendMessageReducer
})

