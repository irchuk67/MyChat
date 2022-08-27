import {SEARCH_CHAT} from "../types";

export default (state='', action) => {
    if (action.type === SEARCH_CHAT){
        return action.payload
    }
    return state
}