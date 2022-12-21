import {Route, Routes, Navigate} from "react-router-dom";
import {lazy, useEffect} from "react";
import {useSelector} from "react-redux";

const Home = lazy(() => import('../pages/web/Home'));
const Category = lazy(() => import('../pages/web/Category'));
const Auction = lazy(() => import('../pages/web/Auction'));
const Searching = lazy(() => import('../pages/web/Searching'));
const Categories = lazy(() => import('../pages/web/Categories'));
const Login = lazy(() => import('../pages/web/Login'));
const Register = lazy(() => import('../pages/web/Register'));
const Shop = lazy(() => import('../pages/web/Shop'));
const ProductDetail = lazy(() => import('../pages/web/ProductDetail'));

const RegisterShop = lazy(() => import('../pages/web/RegisterShop'));
const ChangingAddress = lazy(() => import('../pages/web/ChangingAddress'));
const PasswordRetrieval = lazy(() => import('../pages/web/PasswordRetrieval'));
const Checkout = lazy(() => import('../pages/web/Checkout'));
const SuccessCheckout = lazy(() => import('../pages/web/SuccessCheckout'));
const Cart = lazy(() => import('../pages/web/Cart'));
const Profile = lazy(() => import('../pages/web/Profile'));
const Order = lazy(() => import('../pages/web/Order'));
const UserAddress = lazy(() => import('../pages/web/UserAddress'));
const UserQuestion = lazy(() => import('../pages/web/UserQuestion'));
const ChangingPassword = lazy(() => import('../pages/web/ChangingPassword'));
const SearchingPayment = lazy(() => import('../pages/web/SearchingPayment'));

const routes = [
    {path: '/', exact: true, component: Home},
    {path: '/trang-chu', exact: true, component: Home},
    {path: '/gio-hang', exact: true, component: Cart},
    {path: '/dau-gia', exact: true, component: Auction},
    {path: '/tim-kiem', exact: true, component: Searching},
    {path: '/san-pham/:slug', exact: true, component: ProductDetail},
    {path: '/danh-muc', exact: true, component: Categories},
    {path: '/danh-muc/:slug', exact: true, component: Category},
    {path: '/cua-hang/:slug/*', exact: true, component: Shop},
    {path: '/quen-mat-khau/:slug', exact: true, component: PasswordRetrieval},
]

const authRoutes = [
    {path: '/nguoi-dung/thong-tin', exact: true, component: Profile, replaceTo: '/dang-nhap'},
    {path: '/nguoi-dung/doi-mat-khau', exact: true, component: ChangingPassword, replaceTo: '/dang-nhap'},
    {path: '/nguoi-dung/hoa-don', exact: true, component: SearchingPayment, replaceTo: '/dang-nhap'},
    {path: '/nguoi-dung/don-dat-hang', exact: true, component: Order, replaceTo: '/dang-nhap'},
    {path: '/nguoi-dung/dia-chi', exact: true, component: UserAddress, replaceTo: '/dang-nhap'},
    {path: '/nguoi-dung/cau-hoi', exact: true, component: UserQuestion, replaceTo: '/dang-nhap'},
    {path: '/nguoi-dung/thay-doi-dia-chi', exact: true, component: ChangingAddress, replaceTo: '/dang-nhap'},
    {path: '/dang-ky-ban-hang', exact: true, component: RegisterShop, replaceTo: '/dang-nhap'},
    {path: '/thanh-toan', exact: true, component: Checkout, replaceTo: '/dang-nhap'},
    {path: '/don-hang', exact: true, component: SuccessCheckout, replaceTo: '/dang-nhap'},

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