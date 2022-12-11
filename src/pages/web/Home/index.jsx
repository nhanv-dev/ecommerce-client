import {useState, useEffect, useContext} from 'react';
import {SocketContext} from "../../../service/socket";
import Helmet from "../../../components/web/Helmet";
import {UserLayout} from "../../../components/common/Layouts";
import "./style.scss";


function Home() {
    const socket = useContext(SocketContext);

    useEffect(() => {
    }, [socket])

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