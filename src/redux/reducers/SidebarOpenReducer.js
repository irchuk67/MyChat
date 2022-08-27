import {OPEN_SIDEBAR} from "../types";

export default (state = true, action) => {
    if (action.type === OPEN_SIDEBAR){
        return action.payload
    }
    return state;
}