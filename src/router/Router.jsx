import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Loader from "../pages/web/Loader";
import AdminRouter from "./AdminRouter";
import UserRouter from "./UserRouter";
import SellerRouter from "./SellerRouter";
import {useSelector} from "react-redux";
import ScrollToTop from "../components/common/ScrollToTop/ScrollToTop";

function Router() {
    const user = useSelector(state => state.user);


    useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <React.Suspense fallback={<Loader/>}>
            <BrowserRouter>
                <ScrollToTop/>
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