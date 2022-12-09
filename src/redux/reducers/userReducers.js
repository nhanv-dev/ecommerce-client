import * as types from "../constants/ActionTypes";
import {protectedRequest} from "../../utils/requestMethods";
import {reLogin} from "../actions/userActions";

const initialState = () => {
    const data = JSON.parse(localStorage.getItem("persist:root"));
    const state = {...data}
    if (data) {
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
    switch (action.type) {
        case types.USER_LOGIN:
            if (action.payload.accessToken) {
                action.payload.logged = true
                localStorage.setItem("persist:root", JSON.stringify(action.payload))
            }
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default userReducers;