import {Link} from "react-router-dom";
import ShopComponent from "./ShopComponent";
import * as Icon from "@iconscout/react-unicons";
import {useDispatch, useSelector} from "react-redux";

function Header() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const shop = useSelector(state => state.shop);

    return (
        <div className="fixed left-0 top-0 right-0 bg-white h-[75px] shadow-md z-50">
            <div className="w-full h-full px-5 py-1 flex items-center gap-10">
                <Link to="/kenh-ban-hang/trang-chu">
                    <img className="h-[32px]" alt="logo"
                         src="https://demo2wpopal.b-cdn.net/shopio/wp-content/uploads/2021/12/logo.svg"/>
                    <div className="font-bold capitalize text-md text-primary-hover">
                        <span className="leading-[22px]">Kênh bán hàng</span>
                    </div>
                </Link>
                <div className="flex justify-end items-center gap-10 flex-1 pr-3">
                    <div className="flex items-center justify-center gap-6">
                        <Link to="/kenh-ban-hang/dang-ban"
                              className="flex items-center justify-center gap-1.5 text-black-1 transition-all hover:text-primary-hover text-md font-semibold">
                            <Icon.UilArchive className="w-[20px] h-[20px]"/>
                            Đơn đặt hàng
                        </Link>
                        <Link to="/kenh-ban-hang/dang-ban"
                              className="flex items-center justify-center gap-1.5 text-black-1 transition-all hover:text-primary-hover text-md font-semibold">
                            <Icon.UilEnvelopeCheck className="w-[20px] h-[20px]"/>
                            Đánh giá & Nhận xét
                        </Link>
                        <Link to="/kenh-ban-hang/dang-ban"
                              className="flex items-center justify-center gap-1.5 text-black-1 transition-all hover:text-primary-hover text-md font-semibold">
                            <Icon.UilMessage className="w-[20px] h-[20px]"/>
                            Tin nhắn
                        </Link>
                        <Link to="/kenh-ban-hang/dang-ban"
                              className="flex items-center justify-center gap-1.5 text-black-1 transition-all hover:text-primary-hover text-md font-semibold">
                            <Icon.UilCreateDashboard className="w-[20px] h-[20px]"/>
                            Đăng bán
                        </Link>
                    </div>
                    <ShopComponent user={user}/>
                </div>
            </div>
        </div>
    );
}

export default Header;