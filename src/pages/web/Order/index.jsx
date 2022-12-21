import {useState, useEffect, useContext} from 'react';
import Helmet from "../../../components/web/Helmet";
import {UserLayout} from "../../../components/common/Layouts";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import UserSidebar from "../../../components/web/UserSidebar";
import * as Icon from "@iconscout/react-unicons";

function Order() {
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (!user.accessToken) console.log(user)
    }, [user])

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
                            <div className="mb-5 shadow-md rounded-[5px] bg-[#eaeaea] py-3 px-3">
                                <div
                                    className="flex justify-between items-center gap-5 font-medium text-md text-black-1">
                                    <button>
                                        <Icon.UilSearch/>
                                    </button>
                                    <input type="text" className="bg-[#eaeaea] w-full outline-none text-black-1"
                                           placeholder="Bạn có thể tìm kiếm theo tên Shop, ID đơn hàng hoặc Tên sản phẩm"/>
                                </div>
                            </div>
                            <div className="shadow-md rounded-[5px] bg-white p-5">
                                <div
                                    className="flex justify-between items-center gap-5 font-medium text-md text-black-1">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Helmet>
        </UserLayout>
    );
}


export default Order;