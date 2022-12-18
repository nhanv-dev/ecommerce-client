import * as types from '../constants/ActionTypes';

export const buy = (cartItem)=>{
    return{
        type: types.BUY_PRODUCT,
        payload: cartItem
    }
}
export const deleteProductCart =(item) => {
    return{
        type: types.DELETE_PRODUCT_CART,
        payload: item,
    }
}
export const update = (item, quantity)=>{
    return{
        type: types.UPDATE_QUANTITY,
        payload: {item,quantity}
    }
}
