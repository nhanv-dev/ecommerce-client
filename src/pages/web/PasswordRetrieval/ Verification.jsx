import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../../../assets/img/logo-white.svg";
import * as Icon from "@iconscout/react-unicons";

function Verification({num}) {
    return (
        <div>
            <div
                className={`${num==="2"? '': 'hidden'} min-h-[100vh] bg-cover bg-[#f4f4f4] bg-center relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-[#000] after:z-10 after:opacity-40`}
                style={{backgroundImage: `url(https://auth.services.adobe.com/img/canvas/Fotolia_134829797_XL.jpg)`}}
            >
                <div
                    className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-20 bg-white rounded-2xl shadow bg-cover bg-left-bottom p-2 w-[400px] h-[250px] after:rounded-2xl after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-[#000] after:z-10 after:opacity-30"
                    style={{backgroundImage: 'url(https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bf884ad570b50659c5fa2dc2cfb20ecf&auto=format&fit=crop&w=1000&q=100)'}}>
                    <Link to='/quen-mat-khau/1'>
                        <Icon.UilCornerUpLeftAlt className="absolute z-50 text-white w-[35px] h-[35px] font-bold  top-7 left-6"/>
                    </Link>
                    <div className="absolute left-[50%] top-[42%] translate-x-[-50%] translate-y-[-50%] z-30">

                        <h1 className="text-xl text-white text-bold text-center pb-4">Vui lòng nhập mã xác minh</h1>
                        <form className="w-[350px]">
                            <div
                                className="flex items-center justify-start gap-1 w-full mb-5 p-1">
                                <input
                                    className="text-[#6f787e] basis-1/6 h-[35px] bg-transparent text-center font-medium text-xl outline-none w-full rounded-lg"
                                    type="number" maxLength="1" placeholder=""/>
                                <input
                                    className="text-[#6f787e] basis-1/6 h-[35px] bg-transparent text-center font-medium text-xl outline-none w-full rounded-lg"
                                    type="number" maxLength="1" placeholder=""/>
                                <input
                                    className="text-[#6f787e] basis-1/6 h-[35px] bg-transparent text-center font-medium text-xl outline-none w-full rounded-lg"
                                    type="number" maxLength="1" placeholder=""/>
                                <input
                                    className="text-[#6f787e] basis-1/6 h-[35px] bg-transparent text-center font-medium text-xl outline-none w-full rounded-lg"
                                    type="number" maxLength="1" placeholder=""/>
                                <input
                                    className="text-[#6f787e] basis-1/6 h-[35px] bg-transparent text-center font-medium text-xl outline-none w-full rounded-lg"
                                    type="number" maxLength="1" placeholder=""/>
                                <input
                                    className="text-[#6f787e] basis-1/6 h-[35px] bg-transparent text-center font-medium text-xl outline-none w-full rounded-lg"
                                    type="number" maxLength="1" placeholder=""/>

                            </div>
                            <div className="w-full flex items-center justify-center">
                                <Link to="/quen-mat-khau/3">
                                    <button type="submit"
                                            className="relative bg-[#6B92A4] font-bold text-md text-white rounded-lg px-8 py-2">
                                        Tiếp tục
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>



            </div>
        </div>
    );
}

export default Verification;