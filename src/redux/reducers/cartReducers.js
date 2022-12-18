import * as types from "../constants/ActionTypes";
import shopExample, {shopExample2} from "../../common/ShopExample";
var data = JSON.parse(localStorage.getItem("cartItem"))
var initialState = data ? data : [];
const cartReducers = (state=initialState, action)=>{
    let idSt =[];
    let index=-1;
    let combi=undefined;
    let product = null
    let newCart = state;
    if(state.length>0) {
        state[0].items.forEach((s) => {
            idSt.push({...s})
        })
    }
    switch (action.type) {
        case types.BUY_PRODUCT:
            let item=undefined;
            action.payload.items.forEach((pro)=> {
                product={...pro}
            })
            item = idSt.find((p) => p.id === product.id);
            combi = idSt.find((comb)=> comb.combinationString === product.combinationString)
            if(combi==undefined){
                if(state.length<=0){
                    state.push(action.payload)
                }else{
                    state[0].items.push(product)
                }
            }
            else{
                index = idSt.findIndex((p) => p.combinationString === product.combinationString);
                 newCart[0].items[index].quantity = newCart[0].items[index].quantity + 1;
                state={...newCart};
            }
            localStorage.setItem("cartItem", JSON.stringify(state))
            return [...state]
        case types.DELETE_PRODUCT_CART:

            index = idSt.findIndex((comb)=> comb.combinationString === action.payload.combinationString)
            if(index !== -1){
                state[0].items.splice(index, 1)
            }
            localStorage.setItem("cartItem", JSON.stringify(state))
            return [...state]
        case types.UPDATE_QUANTITY:
            index = idSt.findIndex((comb)=> comb.combinationString === action.payload.item.combinationString)
            if(index !== -1){
                state[0].items[index].quantity = action.payload.quantity
            }
            localStorage.setItem("cartItem", JSON.stringify(state))
            return [...state]
        default:
            return state
    }
}
export default cartReducers;