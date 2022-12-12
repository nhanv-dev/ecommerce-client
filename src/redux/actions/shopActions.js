import * as types from '../constants/ActionTypes'
import {protectedRequest} from "../../utils/requestMethods";

export const login = async (payload) => {
    const res = await protectedRequest.post("/shop/detail", payload);
    console.log(res)
    if (res.status !== 200) return {type: types.SHOP_LOGIN_FAILED}
    return {
        type: types.SHOP_LOGIN_SUCCESS,
        payload: {shop: res.data.shop}
    }
}
export const logout = async () => {
    return {
        type: types.SHOP_LOGOUT,
    }
}

