import React from "react";
import {Search} from "@mui/icons-material";
import './SearchBar.scss';

const SearchBar = () => {
    return(
        <div className={'search-bar'}>
            <Search className={'search-bar__search'}/>
            <input className={'search-bar__input'} type={"text"} placeholder={'Search or start new chat'}/>
        </div>
    )
}

export default SearchBar;