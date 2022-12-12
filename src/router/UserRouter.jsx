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
const RegisterShop = lazy(() => import('../pages/web/RegisterShop'));
const Checkout = lazy(() => import('../pages/web/Checkout'));
const ChangeAddress = lazy(() => import('../pages/web/ChangeAddress'));
const CreateAddress = lazy(() => import('../pages/web/CreateAddress'))

const routes = [
    {path: '/', exact: true, component: Home},
    {path: '/trang-chu', exact: true, component: Home},
    {path: '/gio-hang', exact: true, component: Cart},
    {path: '/dau-gia', exact: true, component: Auction},
    {path: '/san-pham/:slug', exact: true, component: ProductDetail},
    {path: '/danh-muc', exact: true, component: Categories},
    {path: '/danh-muc/:slug', exact: true, component: Category},
    {path: '/cua-hang/:slug/*', exact: true, component: Shop},
    {path: '/thanh-toan', exact: true, component: Checkout},
    {path: '/thay-doi-dia-chi', exact: true, component: ChangeAddress},
    {path: '/them-dia-chi', exact: true, component: CreateAddress},
]
const authRoutes = [
    {path: '/nguoi-dung/thong-tin', exact: true, component: Profile, replaceTo: '/dang-nhap'},
    {path: '/nguoi-dung/doi-mat-khau', exact: true, component: ChangingPassword, replaceTo: '/dang-nhap'},
    {path: '/nguoi-dung/hoa-don', exact: true, component: SearchingPayment, replaceTo: '/dang-nhap'},
    {path: '/dang-ky-ban-hang', exact: true, component: RegisterShop, replaceTo: '/dang-nhap'},

]
const reverseAuthRoutes = [
    {path: '/dang-nhap', exact: true, component: Login, replaceTo: '/trang-chu'},
    {path: '/dang-ky', exact: true, component: Register, replaceTo: '/trang-chu'},
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
                       element={!user.accessToken ? <route.component/> :
                           <Navigate to={route.replaceTo} replace={true}/>}/>
            ))}

            {authRoutes.map(route => (
                <Route key={route.path} exact={route.exact} path={route.path}
                       element={
                           user.accessToken ?
                               <route.component/> :
                               <Navigate to={route.replaceTo} replace={true}/>
                       }/>
            ))}
        </Routes>
    );
}

export default UserRouter;