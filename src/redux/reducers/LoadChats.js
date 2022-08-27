import {LOAD_CHATS} from "../types";

export default (state = [], action) => {
    if(action.type === LOAD_CHATS){
        return action.payload
    }
    return state
}