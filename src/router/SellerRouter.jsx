import {Route, Routes} from "react-router-dom";
import {lazy} from "react";

const Home = lazy(() => import('../pages/seller/Home'));

const routes = [
    {path: '/', exact: true, component: Home},
    {path: '/trang-chu', exact: true, component: Home},
];

function SellerRouter() {
    return (
        <Routes>
            {routes.map(route => (
                <Route key={route.path} exact={route.exact} path={route.path} element={<route.component/>}/>
            ))}
        </Routes>
    );
}

export default SellerRouter;