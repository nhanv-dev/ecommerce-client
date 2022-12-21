import React from 'react';
import Logo from "../../../assets/img/logo-white.svg";
import {Link} from "react-router-dom";
function Header() {
    return (
        <div className="bg-primary " >
            <div className="container">
                <div className="flex items-center justify-between z-50 h-[20px] w-full p-10">
                    <div className="flex items-center">
                        <Link to="/trang-chu" className="block w-[120px]">
                            <img className="w-full h-auto" src={Logo} alt="logo"/>
                        </Link>
                        <h1 className="ml-3 text-white text-2xl">Đăng nhập</h1>
                    </div>
                    <p className="text-white cursor-pointer">Bạn cần giúp đỡ?</p>
                </div>
            </div>
        </div>
    );
}

export default Header;