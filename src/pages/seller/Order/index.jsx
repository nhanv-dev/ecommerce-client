import React, {useEffect, useState} from 'react';
import {SellerLayout} from "../../../components/common/Layouts";
import Helmet from "../../../components/web/Helmet";
import * as Icon from "@iconscout/react-unicons";
import {useSelector} from "react-redux";
import OrderItem from "./OrderItem";

function Order() {
    const user = useSelector(state => state.user)
    const [orders, setOrders] = useState([
        {
            user: {fullName: "Trần Thanh Nhân"}, address: {},
            items: [{
                combination: {},
                product: {},
            }]
        }
    ])
    useEffect(() => {

    }, [user])

    return (
        <SellerLayout>
            <Helmet title="Kênh bán hàng - Shopio">
                <div className="container max-w-[1400px] pb-[100px]">
                    <div className="flex gap-6">
                        <div className="flex-1">
                            <div className="p-5 bg-white rounded-[5px] shadow-md">
                                <div className="flex items-center gap-5">
                                    <p className="font-semibold text-base">Đơn đặt hàng</p>
                                </div>
                                {orders.map((order, index) => (
                                    <div key={index} className="">
                                        <OrderItem order={order}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="min-w-[400px]">
                            <div className="p-5 bg-white rounded-[5px] shadow-md">
                                <div className="flex items-center gap-5">
                                    <p className="font-semibold text-base">Vừa cập nhật</p>
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Helmet>
        </SellerLayout>
    );
}

export default Order;