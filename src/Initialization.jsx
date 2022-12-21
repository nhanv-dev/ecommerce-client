import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {protectedRequest} from "./utils/requestMethods";
import * as types from "./redux/constants/ActionTypes";
import {CHECK_TOKEN_FAILED} from "./redux/constants/ActionTypes";

function Initialization({children}) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const cart = useSelector(state => state.cart);


    useEffect(() => {
        if (!user.accessToken) return;
        protectedRequest().post("/auth/check-invalid-token").catch(err => {
            dispatch({type: types.CHECK_TOKEN_FAILED, payload: {}})
        })
    }, [user])

    useEffect(() => {
        protectedRequest().get("/carts/all-items").then(res => {
            dispatch({type: types.INITIALIZE_CART, payload: {...res.data.cart}})
        }).catch(err => {
            localStorage.removeItem("cart")
        })
    }, [user])

    return (
        <>
            {children}
        </>
    );
}

export default Initialization;
