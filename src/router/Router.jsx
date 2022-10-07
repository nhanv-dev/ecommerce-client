import React, {lazy} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Loader from "../pages/web/Loader";
import AdminRouter from "./AdminRouter";
import BuyerRouter from "./BuyerRouter";
import SellerRouter from "./SellerRouter";


function Router() {
    return (
        <React.Suspense fallback={<Loader/>}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/*" element={<BuyerRouter/>}/>
                    <Route exact path="/admin/*" element={<AdminRouter/>}/>
                    <Route exact path="/seller/*" element={<SellerRouter/>}/>
                </Routes>
            </BrowserRouter>
        </React.Suspense>
    );
}

export default Router;