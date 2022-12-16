import * as types from '../constants/ActionTypes';

export const buy = (cartItem)=>{
    return{
        type: types.BUY_PRODUCT,
        payload: cartItem
    }


}