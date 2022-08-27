import {combineReducers} from "redux";
import ChatReducer from "./ChatReducer";
import LoadChats from "./LoadChats";
import MessageReducer from "./MessageReducer";
import SendMessageReducer from "./SendMessageReducer";
import SearchReducer from "./SearchReducer";
import SidebarOpenReducer from "./SidebarOpenReducer";

export default combineReducers({
    selectedChat: ChatReducer,
    chats: LoadChats,
    messages: MessageReducer,
    sentMessages: SendMessageReducer,
    searchTerm: SearchReducer,
    isOpenSidebar: SidebarOpenReducer
})

