import { MESSAGE_HISTORY} from "../types";

export default (state = [], action) => {
    switch (action.type){
        case MESSAGE_HISTORY:
            return action.payload;
        default:
            return state;
    }
}