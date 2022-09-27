import {combineReducers} from 'redux'
import chat from "./chat";
import notification from "./notification";
import socket from "./socket";

const rootReducer = combineReducers({
    chat, notification, socket
})

export default rootReducer;
