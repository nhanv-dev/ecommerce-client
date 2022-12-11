import {Link} from "react-router-dom";
import Avatar from "./Avatar";

function Header() {
    return (
        <div className="fixed left-0 top-0 right-0 bg-white h-[76px] shadow-md z-50">
            <div className="w-full h-full px-4 py-1 flex items-center gap-10">
                <Link to="/trang-chu">
                    <img className="h-[32px]" alt="logo"
                         src="https://demo2wpopal.b-cdn.net/shopio/wp-content/uploads/2021/12/logo.svg"/>
                    <div className="font-bold capitalize text-md text-primary-hover">
                        <span className="leading-[22px]">Trang Quản trị</span>
                    </div>
                </Link>
                <div className="flex justify-between flex-wrap flex-1">
                    <div className="flex items-center justify-start gap-8">

                    </div>
                    <div className="flex items-center justify-start gap-8">
                        <Avatar/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;