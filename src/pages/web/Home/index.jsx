import {useState, useEffect, useContext} from 'react';
import {SocketContext} from "../../../service/socket";
import Helmet from "../../../components/web/Helmet";
import {BuyerLayout} from "../../../components/web/Layouts";
import "./style.scss";


function Home() {
    const socket = useContext(SocketContext);

    useEffect(() => {
    }, [socket])

    return (
        <BuyerLayout>
            <Helmet title="Trang chủ">
                <div className="container">
                    Trang chu
                </div>
            </Helmet>
        </BuyerLayout>
    );
}

export default Home;