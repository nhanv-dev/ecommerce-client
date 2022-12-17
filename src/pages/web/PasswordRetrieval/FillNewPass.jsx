import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../../../assets/img/logo-white.svg";
import * as Icon from "@iconscout/react-unicons";

function FillNewPass({num}) {
    return (
        <div
            className={`${num==="3" ? '':'hidden'} min-h-[100vh] bg-cover bg-[#f4f4f4] bg-center relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-[#000] after:z-10 after:opacity-40`}
            style={{backgroundImage: `url(https://auth.services.adobe.com/img/canvas/Fotolia_134829797_XL.jpg)`}}
        >
            <div
                className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-20 bg-white rounded-2xl shadow bg-cover bg-left-bottom p-2 w-[400px] h-[250px] after:rounded-2xl after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-[#000] after:z-10 after:opacity-30"
                style={{backgroundImage: 'url(https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bf884ad570b50659c5fa2dc2cfb20ecf&auto=format&fit=crop&w=1000&q=100)'}}>
                <div className="absolute left-[50%] top-[42%] translate-x-[-50%] translate-y-[-50%] z-30">
                    <Link to="/" className="block w-[130px] mx-auto mb-6">
                        <img src={Logo} alt="logo" className="w-full"/>
                    </Link>
                    <Link to='/quen-mat-khau/1'>
                        <Icon.UilCornerUpLeftAlt className="absolute text-white w-[35px] h-[35px] font-bold  top-0 left-0"/>
                    </Link>
                    {/*<h1 className="text-2xl text-white text-bold text-center pb-4">Đặt lại mật khẩu</h1>*/}
                    <form className="w-[300px]">
                        <div
                            className="flex items-center justify-start gap-3 bg-white w-full mb-5 rounded-xl p-3">
                            <Icon.UilLock className="text-[#6f787e] w-24px h-24px"/>
                            <input
                                className="text-[#6f787e] font-medium text-md w-full outline-none"
                                type="password" placeholder="Mật khẩu mới"/>
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <Link to="/dang-nhap">
                                <button type="submit"
                                        className="relative bg-[#6B92A4] font-bold text-md text-white rounded-lg px-8 py-2">
                                    Hoàn tất
                                </button>
                            </Link>

                        </div>
                    </form>
                </div>
            </div>



        </div>

    );
}

export default FillNewPass;