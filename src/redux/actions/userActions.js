import * as types from '../constants/ActionTypes'
import {protectedRequest, publicRequest} from "../../utils/requestMethods";
import {USER_RE_LOGIN} from "../constants/ActionTypes";

export const login = async (payload) => {
    const res = await publicRequest.post("/auth/login", payload);
    return {
        type: types.USER_LOGIN,
        payload: {
            accessToken: res.data.accessToken,
            info: res.data.user,
            logged: !!res.data.accessToken
        }
    }
}
export const logout = async () => {
    return {
        type: types.USER_LOGOUT,
        payload: {logged: false}
    }
}

export const register = async (payload) => {
    const res = await publicRequest.post("/auth/register", payload);
    console.log(res)
    return {
        type: types.USER_REGISTER, payload
    }
}

export const reLogin = async () => {
    const response = await protectedRequest.post("/auth/re-login")
    if (response.status === 200) return {
        type: USER_RE_LOGIN,
        accessToken: response.data.accessToken,
        user: response.data.user
    }
}
