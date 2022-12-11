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
const Checkout =lazy(()=> import('../pages/web/Checkout'));
const ChangeAddress =lazy(()=> import('../pages/web/ChangeAddress'));
const CreateAddress = lazy(()=> import('../pages/web/CreateAddress'))
const routes = [
    {path: '/', exact: true, component: Home},
    {path: '/trang-chu', exact: true, component: Home},
    {path: '/dang-nhap', exact: true, component: Login},
    {path: '/dang-ky', exact: true, component: Register},
    {path: '/dau-gia', exact: true, component: Auction},
    {path: '/danh-muc', exact: true, component: Categories},
    {path: '/danh-muc/:slug', exact: true, component: Category},
    {path: '/san-pham/:slug', exact: true, component: ProductDetail},
    {path: '/cua-hang/:slug/*', exact: true, component: Shop},
    {path: '/thanh-toan', exact: true, component: Checkout},
    {path: '/thay-doi-dia-chi', exact: true, component: ChangeAddress},
    {path: '/them-dia-chi', exact: true, component: CreateAddress},
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