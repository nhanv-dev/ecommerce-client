import {Route, Routes} from "react-router-dom";
import {lazy} from "react";

const Home = lazy(() => import('../pages/web/Home'));
const Login = lazy(() => import('../pages/web/Login'));
const Register = lazy(() => import('../pages/web/Register'));
const Auction = lazy(() => import('../pages/web/Auction'));
const Categories = lazy(() => import('../pages/web/Categories'));
const Category = lazy(() => import('../pages/web/Category'));
const ProductDetail = lazy(() => import('../pages/web/ProductDetail'));
const Shop = lazy(() => import('../pages/web/Shop'));

const routes = [
    {path: '/', exact: true, component: Home},
    {path: '/trang-chu', exact: true, component: Home},
    {path: '/dang-nhap', exact: true, component: Login},
    {path: '/dang-ky', exact: true, component: Register},
    {path: '/dau-gia', exact: true, component: Auction},
    {path: '/danh-muc', exact: true, component: Categories},
    {path: '/danh-muc/:slug', exact: true, component: Category},
    {path: '/san-pham/:slug', exact: true, component: ProductDetail},
    {path: '/shop/:slug/*', exact: true, component: Shop},
];

function BuyerRouter() {
    return (
        <Routes>
            {routes.map(route => (
                <Route key={route.path} exact={route.exact} path={route.path} element={<route.component/>}/>
            ))}
        </Routes>
    );
}

export default BuyerRouter;