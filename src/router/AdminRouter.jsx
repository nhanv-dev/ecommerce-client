import {Route, Routes} from "react-router-dom";
import {lazy} from "react";

const Home = lazy(() => import('../pages/admin/Home'));
const Report = lazy(() => import('../pages/admin/Report'));

const routes = [
    {path: '/', exact: true, component: Home},
    {path: '/trang-chu', exact: true, component: Home},
    {path: '/bao-cao', exact: true, component: Report},
];

function AdminRouter() {
    return (
        <Routes>
            {routes.map(route => (
                <Route key={route.path} exact={route.exact} path={route.path} element={<route.component/>}/>
            ))}
        </Routes>
    );
}

export default AdminRouter;