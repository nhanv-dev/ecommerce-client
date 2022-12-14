import {combineReducers} from 'redux'
import chatReducers from "./chatReducers";
import notificationReducers from "./notificationReducers";
import socketReducers from "./socketReducers";
import userReducers from "./userReducers";
import shopReducers from "./shopReducers";
import firebaseReducers from "./firebaseReducers";

const rootReducer = combineReducers({
    chat: chatReducers,
    notification: notificationReducers,
    socket: socketReducers,
    user: userReducers,
    shop: shopReducers,
    firebase: firebaseReducers,
})

export default rootReducer;
