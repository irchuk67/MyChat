import {SELECT_CHAT} from "../types";

export default (state = {}, action) => {
    if(action.type === SELECT_CHAT){
        return action.payload
    }
    return state
}