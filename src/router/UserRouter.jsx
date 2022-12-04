import {Route, Routes, Navigate} from "react-router-dom";
import {lazy, useEffect} from "react";
import {useSelector} from "react-redux";

const Auction = lazy(() => import('../pages/web/Auction'));
const Cart = lazy(() => import('../pages/web/Cart'));
const Category = lazy(() => import('../pages/web/Category'));
const Categories = lazy(() => import('../pages/web/Categories'));
const ChangingPassword = lazy(() => import('../pages/web/ChangingPassword'));
const Profile = lazy(() => import('../pages/web/Profile'));
const ProductDetail = lazy(() => import('../pages/web/ProductDetail'));
const Login = lazy(() => import('../pages/web/Login'));
const Home = lazy(() => import('../pages/web/Home'));
const Shop = lazy(() => import('../pages/web/Shop'));
const SearchingPayment = lazy(() => import('../pages/web/SearchingPayment'));
const Register = lazy(() => import('../pages/web/Register'));

const routes = [
    {path: '/', exact: true, component: Home},
    {path: '/trang-chu', exact: true, component: Home},
    {path: '/gio-hang', exact: true, component: Cart},
    {path: '/dau-gia', exact: true, component: Auction},
    {path: '/danh-muc', exact: true, component: Categories},
    {path: '/danh-muc/:slug', exact: true, component: Category},
    {path: '/san-pham/:slug', exact: true, component: ProductDetail},
    {path: '/cua-hang/:slug/*', exact: true, component: Shop},
]
const authRoutes = [
    {path: '/nguoi-dung/thong-tin', exact: true, component: Profile, replace: Login},
    {path: '/nguoi-dung/doi-mat-khau', exact: true, component: ChangingPassword, replace: Login},
    {path: '/nguoi-dung/hoa-don', exact: true, component: SearchingPayment, replace: Login},
]
const reverseAuthRoutes = [
    {path: '/dang-nhap', exact: true, component: Login, replace: Home},
    {path: '/dang-ky', exact: true, component: Register, replace: Home}
]

function UserRouter() {
    const user = useSelector(state => state.user)

    return (
        <Routes>
            {routes.map(route => (
                <Route key={route.path} exact={route.exact} path={route.path} element={<route.component/>}/>
            ))}

            {reverseAuthRoutes.map(route => (
                <Route key={route.path} exact={route.exact} path={route.path}
                       element={user.accessToken ? <route.replace/> : <route.component/>}/>
            ))}

            {authRoutes.map(route => (
                <Route key={route.path} exact={route.exact} path={route.path}
                       element={user.accessToken ? <route.component/> : <route.replace/>}/>
            ))}
        </Routes>
    );
}

export default UserRouter;