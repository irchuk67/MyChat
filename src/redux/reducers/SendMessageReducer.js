import {ADD_MESSAGE} from "../types";

export default (state = 0, action) => {
    switch (action.type){
        case ADD_MESSAGE:
            return state + action.payload;
        default:
            return state;
    }
}