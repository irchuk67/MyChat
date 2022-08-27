import React, {useEffect, useState} from "react";
import {Search} from "@mui/icons-material";
import {searchChat} from '../../redux/actions/index'
import './SearchBar.scss';
import {connect} from "react-redux";

const SearchBar = (props) => {
    const [term, setTerm] = useState('');

    useEffect(() => {
        props.searchChat(term)
    }, [term])

    const onSearchChange = (event) => {
        setTerm(event.target.value);
    }


    return(
        <div className={'search-bar'}>
            <Search className={'search-bar__search'}/>
            <input className={'search-bar__input'}
                   type={"text"}
                   placeholder={'Search or start new chat'}
                   value={term}
                   onChange={event => onSearchChange(event)}/>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        searchTerm: state.searchTerm
    }
}

export default connect(mapStateToProps, {searchChat})(SearchBar);