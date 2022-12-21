import * as types from "../constants/ActionTypes";

const initialState = () => {
    return {items: []};
}

const cartReducers = (state = initialState(), action) => {
    let newState = {...state};

    switch (action.type) {
        case types.INITIALIZE_CART:
            return {...state, ...action.payload};
        case types.ADD_TO_CART:
            const newItem = {...action.payload.item};
            const index = newState.items.findIndex((item) => {
                return item.combination?.combinationString === newItem.combination?.combinationString && item.product._id === newItem.product._id
            });
            if (index !== -1) newState.items[index].quantity += newItem.quantity
            else newState.items.push(newItem)
            return {...newState}
        case types.DELETE_PRODUCT_CART:
            const deleteItem = action.payload.item;
            newState.items = [...newState.items].filter((item) => {
                return item.product?._id !== deleteItem.product?._id || item.combination?.combinationString !== deleteItem.combination?.combinationString
            });
            return {...newState}
        case types.UPDATE_QUANTITY_SUCCESS:
            const updateItem = action.payload.item;
            newState.items = [...newState.items].map((item) => {
                if (item.combinationId === updateItem.combinationId && item.productId === updateItem.productId)
                    return {...item, quantity: updateItem.quantity}
                return {...item}
            });
            return {...newState}
        case types.CHOOSE_CART_ITEM:
            const chooseItem = action.payload.item
            newState.items = newState.items.map(item => {
                if (item.product._id === chooseItem.product._id && item.combination.combinationString === chooseItem.combination.combinationString)
                    return {...item, checked: true}
                return {...item}
            })
            return {...newState}
        case types.UN_CHOOSE_CART_ITEM:
            const unChooseItem = action.payload.item
            newState.items = newState.items.map(item => {
                if (item.product._id === unChooseItem.product._id && item.combination.combinationString === unChooseItem.combination.combinationString)
                    return {...item, checked: false}
                return {...item}
            })
            return {...newState}
        case types.USER_LOGOUT:
            localStorage.removeItem("persist:root")
            localStorage.removeItem("cart")
            return {}
        default:
            return state
    }
}


export default cartReducers;