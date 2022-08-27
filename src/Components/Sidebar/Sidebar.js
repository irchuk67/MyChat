import React from "react";
import './Sidebar.scss';
import SearchBar from "../SearchBar/SearchBar";
import ChatList from "../ChatList/ChatList";
import Account from "../Account/Account";
import {connect} from "react-redux";

const Sidebar = (props) => {
    return(
        <div className={`sidebar ${!props.isOpen ? 'invisible' : ''}`}>
            <Account/>
            <SearchBar/>
            <ChatList/>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        selectedChat: state.selectedChat,
        isOpen: state.isOpenSidebar
    }
}

export default connect(mapStateToProps)(Sidebar);