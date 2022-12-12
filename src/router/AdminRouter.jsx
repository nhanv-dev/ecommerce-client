import {Navigate, Route, Routes} from "react-router-dom";
import {lazy} from "react";
import {useSelector} from "react-redux";

const Home = lazy(() => import('../pages/admin/Home'));
const Report = lazy(() => import('../pages/admin/Report'));

const routes = [
    {path: '/', exact: true, component: Home, replaceTo: '/dang-nhap'},
    {path: '/trang-chu', exact: true, component: Home, replaceTo: '/dang-nhap'},
    {path: '/bao-cao', exact: true, component: Report, replaceTo: '/dang-nhap'},
];

function AdminRouter() {
    const user = useSelector(state => state.user)

    return (
        <Routes>
            {routes.map(route => (
                <Route key={route.path} exact={route.exact} path={route.path}
                       element={
                           user.accessToken && user?.info?.isAdmin ?
                               <route.component/> : <Navigate to={route.replaceTo} replace={true}/>
                       }
                />
            ))}
        </Routes>
    );
}

export default AdminRouter;