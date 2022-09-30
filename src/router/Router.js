import React, {lazy} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Loader from "../pages/Loader";

const Home = lazy(() => import('../pages/Home'))
const Login = lazy(() => import('../pages/Login'))
const Register = lazy(() => import('../pages/Register'))
const Categories = lazy(() => import('../pages/Categories'))
const Category = lazy(() => import('../pages/Category'))
const ProductDetail = lazy(() => import('../pages/ProductDetail'))

const routes = [
    {path: '/', exact: true, component: Home},
    {path: '/trang-chu', exact: true, component: Home},
    {path: '/dang-nhap', exact: true, component: Login},
    {path: '/dang-ky', exact: true, component: Register},
    {path: '/danh-muc', exact: true, component: Categories},
    {path: '/danh-muc/:slug', exact: true, component: Category},
    {path: '/san-pham/:slug', exact: true, component: ProductDetail},
];

function Router() {
    return (
        <React.Suspense fallback={<Loader/>}>
            <BrowserRouter>
                <Routes>
                    {routes.map(route => (
                        <Route key={route.path} exact={route.exact} path={route.path} element={<route.component/>}/>
                    ))}
                </Routes>
            </BrowserRouter>
        </React.Suspense>
    );
}

export default Router;