import * as types from '../constants/ActionTypes'
import {publicRequest} from "../../utils/requestMethods";

export const login = async (payload) => {
    const res = await publicRequest.post("/auth/login", payload);
    return {
        type: types.USER_LOGIN,
        payload: {
            accessToken: res.data.accessToken,
            info: res.data.user
        }
    }
}
export const register = async (payload) => {
    const res = await publicRequest.post("/auth/register", payload);
    return {
        type: types.USER_LOGIN, payload
    }
}

export const logout = async (payload) => ({
    type: types.USER_LOGOUT, payload
})