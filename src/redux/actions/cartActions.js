import * as types from '../constants/ActionTypes';
import {protectedRequest} from "../../utils/requestMethods";

export const addToCart = async (item) => {
    const data = {
        quantity: item.quantity,
        productId: item.product._id,
        combinationId: item.combination?._id,
        price: item.combination?.price || item.product.basePrice
    };
    const action = {};
    await protectedRequest().post("/carts/add-items", {...data}).then(res => {
        action.success = true;
        action.type = types.ADD_TO_CART;
        console.log(res.data)
        action.payload = {item: {...item, ...res.data.cartItem}}
    }).catch(err => {
        action.success = false;
        action.type = types.ADD_TO_CART_FAIL;
        action.payload = {item};
    })
    return {...action}
}
export const deleteProductCart = async (item) => {
    return {
        type: types.DELETE_PRODUCT_CART,
        payload: {item},
    }
}
export const updateQuantity = async (item, quantity) => {
    const action = {type: types.UPDATE_QUANTITY_SUCCESS, payload: {}};
    await protectedRequest().post("/carts/update-quantity", {...item, quantity}).then(res => {
        console.log(res)
        action.success = true;
        action.payload = {...res.data}
    }).catch(err => {
        action.success = false;
        action.type = types.UPDATE_QUANTITY_FAILED
    })
    return {...action}
}
export const chooseCartItem = async (item) => {
    return {
        type: types.CHOOSE_CART_ITEM,
        payload: {item}
    }
}
export const unChooseCartItem = async (item) => {
    return {
        type: types.UN_CHOOSE_CART_ITEM,
        payload: {item}
    }
}