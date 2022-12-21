import React, {useEffect, useState} from 'react';
import {UserLayout} from "../../../components/common/Layouts";
import Helmet from "../../../components/web/Helmet";
import * as Icon from '@iconscout/react-unicons';
import {formatCurrency} from "../../../utils/format";
import Modal from "../../../components/web/Modal/index";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";
import NotFoundImage from "../../../assets/img/image-not-found.jpg";
import {protectedRequest} from "../../../utils/requestMethods";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SuccessCheckout() {
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const [searchParams, setSearchParams] = useSearchParams();

    const [order, setOrder] = useState({});

    useEffect(() => {
        const id = searchParams.get("id")
        if (!id) return navigate("/gio-hang")
        protectedRequest().get(`/orders/id/${id}`).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }, [user])


    return (
        <UserLayout>
            <Helmet title='Đặt hàng thành công - Shopio'>
                <div className="container py-8">
                    <div className="p-5 rounded-[5px] bg-white w-[800px] mx-auto">
                        sad
                    </div>
                </div>
            </Helmet>
        </UserLayout>
    );
}

export default SuccessCheckout;