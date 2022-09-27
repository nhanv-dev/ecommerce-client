import {useState, useEffect, useContext} from 'react';
import {SocketContext} from "../../service/socket";
import Helmet from "../../components/Helmet";
import Layout from "../../components/Layout";
import "./style.scss";
import Constants from "../../common/Constants";


function Home(props) {
    const socket = useContext(SocketContext);

    return (
        <Layout type='customer'>
            <Helmet title="Trang chủ">
            </Helmet>
        </Layout>
    );
}

export default Home;