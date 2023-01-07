import {useState, useEffect, useContext} from 'react';
import Helmet from "../../../components/web/Helmet";
import {UserLayout} from "../../../components/common/Layouts";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import UserSidebar from "../../../components/web/UserSidebar";
import * as Icon from "@iconscout/react-unicons";
import {protectedRequest} from "../../../utils/requestMethods";
import OrderBlock from "./OrderBlock";

function Order() {
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (!user.accessToken) console.log(user);
        protectedRequest().get("/orders/user").then(res => {
            setOrders(res.data.orders)
        }).catch(error => {

        })
    }, [user])

    const reset = () => {
        console.log("reset")
        if (!user.accessToken) console.log(user);
        protectedRequest().get("/orders/user").then(res => {
            setOrders(res.data.orders)
        }).catch(error => {

        })
    }

    return (
        <UserLayout>
            <Helmet title="Thông tin cá nhân">
                <div className="container py-8">
                    <div className="flex items-start gap-5">
                        <UserSidebar/>
                        <div className="flex-1">
                            <div className="mb-5 shadow-md rounded-[5px] bg-white">
                                <div className="flex justify-between items-center">
                                    <Link to=""
                                          className="text-center flex-1 font-medium text-md py-3 hover:text-primary-hover rounded-[5px] transition-all">
                                        Đang xử lý
                                    </Link>
                                    <Link to=""
                                          className="text-center flex-1 font-medium text-md py-3 hover:text-primary-hover rounded-[5px] transition-all">
                                        Chờ thanh toán
                                    </Link>
                                    <Link to=""
                                          className="text-center flex-1 font-medium text-md py-3 hover:text-primary-hover rounded-[5px] transition-all">
                                        Đang giao
                                    </Link>
                                    <Link to=""
                                          className="text-center flex-1 font-medium text-md py-3 hover:text-primary-hover rounded-[5px] transition-all">
                                        Đã hủy
                                    </Link>
                                    <Link to=""
                                          className="text-center flex-1 font-medium text-md py-3 hover:text-primary-hover rounded-[5px] transition-all">
                                        Đã nhận hàng
                                    </Link>
                                    <Link to=""
                                          className="text-center flex-1 font-medium text-md py-3 hover:text-primary-hover rounded-[5px] transition-all">
                                        Trả hàng/Hoàn tiền
                                    </Link>
                                </div>
                            </div>
                            <div className="mb-5 shadow-md rounded-[5px] bg-[#fff] py-3 px-3">
                                <div
                                    className="flex justify-between items-center gap-5 font-medium text-md text-black-1">
                                    <button>
                                        <Icon.UilSearch/>
                                    </button>
                                    <input type="text" className="bg-[#fff] w-full outline-none text-black-1"
                                           placeholder="Bạn có thể tìm kiếm theo tên Shop, ID đơn hàng hoặc Tên sản phẩm"/>
                                </div>
                            </div>
                            <div className="w-full">
                                <OrdersComponent orders={orders} reset={reset}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Helmet>
        </UserLayout>
    );
}

const OrdersComponent = ({orders, reset}) => {
    return (
        <div className="flex flex-col gap-5">
            {orders.map((order, index) => (
                <div key={index} className={`${order.status !== 'Cancel' ? 'bg-white' : 'bg-[#EAEAEA]'} shadow-md rounded-[5px]`}>
                    <OrderBlock order={order} reset={reset}/>
                </div>
            ))}
        </div>
    )
}

export default Order;