import * as types from "../constants/ActionTypes";
import shopExample, {shopExample2} from "../../common/ShopExample";
var data = JSON.parse(localStorage.getItem("cartItem"))
var initialState = data ? data : [];
const cartReducers = (state=initialState, action)=>{
    switch (action.type) {
        case types.BUY_PRODUCT:
            let product = null
            let idSt =[];
            let item=undefined;
            action.payload.items.forEach((pro)=> {
                product={...pro}
                console.log("pro: ",product)
            })
            if(state.length>0){
            state[0].items.forEach((s)=>{
                idSt.push({...s})
            })
                item = idSt.find((p) => p.id === product.id);
            }
            if(item == undefined){
                if(state.length<=0){
                    state.push(action.payload)
                }else{
                    state[0].items.push(product)
                }
            }
            else{
                let newCart = state;
                let index = state.findIndex((p) => p.id === action.payload.id);
                newCart[index].items.forEach((item)=>{
                item.quantity = item.quantity + 1;
                })
                state={...newCart};
            }
            localStorage.setItem("cartItem", JSON.stringify(state))
            return [...state]
            break;
        default:
            return state
    }
}
export default cartReducers;