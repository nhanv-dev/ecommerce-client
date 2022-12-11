import {Link} from "react-router-dom";
import UserComponent from "./UserComponent";
import * as Icon from "@iconscout/react-unicons";
import {useSelector} from "react-redux";

function Header() {
    const user = useSelector(state => state.user)
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
                <div className="flex justify-end items-center flex-wrap flex-1">
                    <div className="flex items-center justify-start gap-8">
                        <UserComponent user={user}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;