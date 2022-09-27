import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Category from "../pages/Category";
import Categories from "../pages/Categories";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/trang-chu" element={<Home/>}/>
                <Route path="/danh-muc/:slug" element={<Category/>}/>
                <Route exact path="/danh-muc" element={<Categories/>}/>
                <Route exact path="/dang-nhap" element={<Login/>}/>
                <Route exact path="/dang-ky" element={<Register/>}/>
                <Route exact path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;