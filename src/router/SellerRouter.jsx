import {Navigate, Route, Routes} from "react-router-dom";
import {lazy} from "react";
import {useSelector} from "react-redux";

const Home = lazy(() => import('../pages/seller/Home'));
const Category = lazy(() => import('../pages/seller/Category'));

const routes = [
    {path: '/', exact: true, component: Home, replaceTo: '/dang-nhap'},
    {path: '/trang-chu', exact: true, component: Home, replaceTo: '/dang-nhap'},
    {path: '/danh-muc', exact: true, component: Category, replaceTo: '/dang-nhap'},
];

function SellerRouter() {
    const user = useSelector(state => state.user)

    return (
        <Routes>
            {routes.map(route => (
                <Route key={route.path} exact={route.exact} path={route.path}
                       element={user.accessToken && user.logged ?
                           <route.component/> :
                           <Navigate to={route.replaceTo} replace={true}/>
                       }
                />
            ))}
        </Routes>
    );
}

export default SellerRouter;