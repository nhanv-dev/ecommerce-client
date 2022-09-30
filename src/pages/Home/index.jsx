import {useState, useEffect, useContext} from 'react';
import {SocketContext} from "../../service/socket";
import Helmet from "../../components/Helmet";
import {BuyerLayout} from "../../components/Layouts";
import "./style.scss";


function Home(props) {
    const socket = useContext(SocketContext);

    return (
        <BuyerLayout>
            <Helmet title="Trang chủ">
                Trang chu
            </Helmet>
        </BuyerLayout>
    );
}

export default Home;