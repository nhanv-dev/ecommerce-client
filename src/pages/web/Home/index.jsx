import {useState, useEffect, useContext} from 'react';
import {SocketContext} from "../../../service/socket";
import Helmet from "../../../components/web/Helmet";
import {UserLayout} from "../../../components/common/Layouts";
import "./style.scss";
import {useSelector} from "react-redux";


function Home() {
    // const socket = useContext(SocketContext);
    const user = useSelector(state => state.user)
    useEffect(() => {
        console.log(user.accessToken)
        console.log(JSON.parse(localStorage.getItem("persist:root"))?.accessToken)
    }, [user])

    return (
        <UserLayout>
            <Helmet title="Trang chủ">
                <div className="container">
                    Trang chu
                </div>
            </Helmet>
        </UserLayout>
    );
}

export default Home;