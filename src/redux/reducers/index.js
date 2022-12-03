import {combineReducers} from 'redux'
import chatReducers from "./chatReducers";
import notificationReducers from "./notificationReducers";
import socketReducers from "./socketReducers";
import userReducers from "./userReducers";

const rootReducer = combineReducers({
    chat: chatReducers,
    notification: notificationReducers,
    socket: socketReducers,
    user: userReducers
})

export default rootReducer;
