import {Navigate, Route, Routes} from "react-router-dom";
import {lazy, useEffect} from "react";
import {useSelector} from "react-redux";

const Home = lazy(() => import('../pages/seller/Home'));
const Category = lazy(() => import('../pages/seller/Category'));
const Product = lazy(() => import('../pages/seller/Product'));
const CreatingProduct = lazy(() => import('../pages/seller/CreatingProduct'));
const Order = lazy(() => import('../pages/seller/Order'));
const Info = lazy(() => import('../pages/seller/Info'))
const Statistical = lazy(() => import('../pages/seller/Statistical'));

const routes = [
    {path: '/', exact: true, component: Home, replaceTo: '/dang-ky-ban-hang'},
    {path: '/trang-chu', exact: true, component: Home, replaceTo: '/dang-ky-ban-hang'},
    {path: '/danh-muc', exact: true, component: Category, replaceTo: '/dang-ky-ban-hang'},
    {path: '/san-pham/:slug', exact: true, component: Product, replaceTo: '/dang-ky-ban-hang'},
    {path: '/dang-ban', exact: true, component: CreatingProduct, replaceTo: '/dang-ky-ban-hang'},
    {path: '/thong-tin', exact: true, component: Info, replaceTo: '/dang-ky-ban-hang'},
    {path: '/don-dat-hang', exact: true, component: Order, replaceTo: '/dang-ky-ban-hang'},
    {path: '/thong-ke', exact: true, component: Statistical, replaceTo: '/dang-ky-ban-hang'},
];

function SellerRouter() {
    const user = useSelector(state => state.user)

    return (
        <Routes>
            {routes.map(route => (
                <Route key={route.path} exact={route.exact} path={route.path}
                       element={user?.accessToken && user?.info?.isShop ?
                           <route.component/> : <Navigate to={route.replaceTo} replace={true}/>
                       }
                />
            ))}
        </Routes>
    );
}

export default SellerRouter;