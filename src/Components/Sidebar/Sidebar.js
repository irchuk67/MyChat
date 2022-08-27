import React from "react";
import './Sidebar.scss';
import SearchBar from "../SearchBar/SearchBar";
import ChatList from "../ChatList/ChatList";
import Account from "../Account/Account";

const Sidebar = () => {
    return(
        <div className={'sidebar'}>
            <Account/>
            <SearchBar/>
            <ChatList/>
        </div>
    )
}

export default Sidebar;