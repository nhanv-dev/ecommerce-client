import * as types from "../constants/ActionTypes";
import {protectedRequest} from "../../utils/requestMethods";

const handleReLogin = async (accessToken) => {
    const response = await protectedRequest.post("/auth/re-login")
    if (response.status === 200) return {accessToken: response.data.accessToken, user: response.data.user}
}
const initialState = () => {
    const state = JSON.parse(localStorage.getItem("persist:root"))
    handleReLogin().then(res => {
        if (res) {
            state.accessToken = res.accessToken
            state.user = res.user
        } else {
            state.accessToken = null
            state.user = null
            localStorage.removeItem("persist:root")
        }
    })
    return {...state}
}

const userReducers = (state = initialState(), action) => {
    switch (action.type) {
        case types.USER_LOGIN:
            localStorage.setItem("persist:root", JSON.stringify(action.payload))
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default userReducers;