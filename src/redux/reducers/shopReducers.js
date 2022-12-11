import * as types from "../constants/ActionTypes";

const initialState = () => {
    const data = JSON.parse(localStorage.getItem("persist:root")) || {};
    const state = {...data, logged: false}
    if (data.accessToken) {
        
    }
    return {...state}
}

const userReducers = (state = initialState(), action) => {
    const storage = JSON.parse(localStorage.getItem("persist:root")) || {}
    switch (action.type) {
        case types.SHOP_LOGIN:
            if (action.payload.accessToken)
                localStorage.setItem("persist:root", JSON.stringify({...storage, ...action.payload}))
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default userReducers;