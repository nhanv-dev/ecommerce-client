import React, {lazy} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Loader from "../pages/web/Loader";
import AdminRouter from "./AdminRouter";
import UserRouter from "./UserRouter";
import SellerRouter from "./SellerRouter";


function Router() {
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