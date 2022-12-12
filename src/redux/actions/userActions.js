import * as types from '../constants/ActionTypes'
import {protectedRequest, publicRequest} from "../../utils/requestMethods";
import {SHOP_LOGIN_FAILED, SHOP_LOGIN_SUCCESS} from "../constants/ActionTypes";
import axios from "axios";

export const login = async (payload) => {
    const res = await publicRequest.post("/auth/login", payload);
    if (res.status !== 200) return {type: types.USER_LOGIN_FAILED};
    const data = {accessToken: res.data.accessToken, info: res.data.user};
    const shopRes = await axios.create({
        baseURL: "http://localhost:8080/api/v1/",
        headers: {token: `Bearer ${data.accessToken}`},
    }).get("/shops/detail")
    data.shop = {...shopRes.data.shop}
    console.log(data)
    return {
        type: types.USER_LOGIN_SUCCESS,
        payload: {...data}
    }
}
export const logout = async () => {
    return {
        type: types.USER_LOGOUT,
    }
}

export const register = async (payload) => {
    const res = await publicRequest.post("/auth/register", payload);
    return {
        type: types.USER_REGISTER, payload, res
    }
}

export const reLogin = async () => {
    const res = await protectedRequest.post("/auth/re-login")
    if (res.status === 200) return {
        type: types.USER_RE_LOGIN,
        accessToken: res.data.accessToken,
        user: res.data.user,
        shop: res.data.shop,
    }
}
