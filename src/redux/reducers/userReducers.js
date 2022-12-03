import * as types from "../constants/ActionTypes";

const initialState = () => {
    const state = JSON.parse(localStorage.getItem("persist:root"))
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