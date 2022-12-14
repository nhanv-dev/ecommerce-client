import * as types from "../constants/ActionTypes";
import {protectedRequest} from "../../utils/requestMethods";
import {reLogin} from "../actions/userActions";

const initialState = () => {
    const data = JSON.parse(localStorage.getItem("persist:root")) || {};
    const state = {...data}
    return {accessToken: state.accessToken, info: state.info}
}

const userReducers = (state = initialState(), action) => {
    const storage = JSON.parse(localStorage.getItem("persist:root")) || {};
    switch (action.type) {
        case types.USER_LOGIN_SUCCESS:
            if (action.payload.accessToken)
                localStorage.setItem("persist:root", JSON.stringify({...storage, ...action.payload}))
            return {...state, accessToken: action.payload.accessToken, info: action.payload.info}
        case types.USER_LOGIN_FAILED :
            delete storage.accessToken
            delete storage.info
            delete state.accessToken
            delete state.info
            localStorage.setItem("persist:root", JSON.stringify({...storage}))
            return {...state, ...action.payload}
        case types.USER_LOGOUT:
            delete storage.accessToken
            delete storage.info
            delete state.accessToken
            delete state.info
            localStorage.setItem("persist:root", JSON.stringify({...storage}))
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default userReducers;