import * as types from "../constants/ActionTypes";
import {protectedRequest} from "../../utils/requestMethods";
import {reLogin} from "../actions/userActions";

const initialState = () => {
    const data = JSON.parse(localStorage.getItem("persist:root")) || {};
    const state = {...data, logged: false}
    if (data.accessToken) {
        reLogin().then(res => {
            if (res) {
                state.accessToken = res.accessToken
                state.user = res.user
                state.logged = true
            } else {
                state.accessToken = null
                state.user = null
                state.logged = false
                localStorage.removeItem("persist:root")
            }
        })
    }
    return {...state}
}

const userReducers = (state = initialState(), action) => {
    const storage = JSON.parse(localStorage.getItem("persist:root")) || {}
    switch (action.type) {
        case types.USER_LOGIN:
            if (action.payload.accessToken)
                localStorage.setItem("persist:root", JSON.stringify({...storage, ...action.payload}))
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