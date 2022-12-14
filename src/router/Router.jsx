import React, {lazy, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Loader from "../pages/web/Loader";
import AdminRouter from "./AdminRouter";
import UserRouter from "./UserRouter";
import SellerRouter from "./SellerRouter";
import {useDispatch} from "react-redux";
import {reLogin} from "../redux/actions/userActions";

function Router() {
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetch() {
            const data = JSON.parse(localStorage.getItem("persist:root") || {})
            if (data.accessToken) {
                dispatch(await reLogin())
            }
        }

        fetch();
    }, [])


    return (
        <React.Suspense fallback={<Loader/>}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/*" element={<UserRouter/>}/>
                    <Route exact path="/quan-tri/*" element={<AdminRouter/>}/>
                    <Route exact path="/kenh-ban-hang/*" element={<SellerRouter/>}/>
                </Routes>
            </BrowserRouter>
        </React.Suspense>
    );
}

export default Router;