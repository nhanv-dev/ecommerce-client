import React, {useContext, useEffect, useState} from "react"
import "./style.scss";
import {SocketContext} from "../../service/socket";
import {Link} from "react-router-dom";
import Menu from "./Menu";
import axios from 'axios';
import * as Icon from '@iconscout/react-unicons';

function Header() {
    const socket = useContext(SocketContext);
    const [categories, setCategories] = useState([])
    const [scrollTop, setScrollTop] = useState(0);
    useEffect(() => {
        axios
            .get('http://localhost:8080/api/v1/categories?limit=10')
            .then((response) => {
                setCategories(response.data.categories)
            });
    }, [socket])

    useEffect(() => {
        const onScroll = (e) => {
            setScrollTop(e.target.documentElement.scrollTop);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop])

    return (
        <header>
            <div className="h-[35px] bg-[#f4f4f4] flex items-center">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <div className="flex justify-start items-center gap-4">
                            <p className="cursor-pointer flex items-center justify-center gap-2 text-xs font-[500] text-black">
                                <span>Tải ứng dụng</span>
                            </p>
                            <p className="cursor-pointer flex items-center justify-center gap-2 text-xs font-[500] text-black">
                                <span>Chăm sóc khách hàng</span>
                            </p>
                            <p className="cursor-pointer flex items-center justify-center gap-2 text-xs font-[500] text-black">
                                <span>Kiểm tra đơn hàng</span>
                            </p>
                        </div>
                        <div className="flex justify-start items-center gap-4">
                            <p className="cursor-pointer flex items-center justify-center gap-2 text-xs font-[500] text-black">
                                <span>Tải ứng dụng</span>
                            </p>
                            <p className="cursor-pointer flex items-center justify-center gap-2 text-xs font-[500] text-black">
                                <span>Chăm sóc khách hàng</span>
                            </p>
                            <p className="cursor-pointer flex items-center justify-center gap-2 text-xs font-[500] text-black">
                                <span>Kiểm tra đơn hàng</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[95px] flex items-center bg-[#efefef]">
                <div className="container">
                    <div className="flex gap-8 justify-between items-center">
                        <Link to="/trang-chu" className="h-[30px]">
                            <img className="h-full w-auto"
                                 src="https://merchant.hotdeal.vn/assets/img/logo-hotdeal.png"
                                 alt="logo"/>
                        </Link>
                        <div className="flex-1 flex gap-4 items-center justify-start">
                            <input type="text"
                                   className="text-gray text-tiny font-medium bg-white px-3 flex-1 h-[40px] rounded-[4px] focus-visible:outline-none"
                                   placeholder="Tìm kiếm sản phẩm..."/>
                            <button
                                className="bg-white w-[40px] h-[40px] rounded-[4px] flex items-center justify-center">
                                <Icon.UilSearch className="w-[20px] h-[20px] text-black"/>
                            </button>
                        </div>
                        <button>
                            <Icon.UilShoppingBag className="w-[24px] h-[24px] text-black"/>
                        </button>
                        <Link to="/dang-nhap"
                              className="font-semibold text-tiny text-black bg-white w-max px-4 py-2 rounded-[4px] flex items-center justify-center">
                            Đăng nhập
                        </Link>
                    </div>
                </div>
            </div>
            <div className={`bg-primary transition-all z-50 ${scrollTop >= 130 && 'fixed top-0 left-0 right-0'}`}>
                <div className="container">
                    <div className="flex gap-5 relative">
                        <div className="flex gap-5">
                            <div className="group bg-primary-hover px-7 py-3 flex items-center justify-between gap-4">
                                <Link to="/danh-muc" className="text-white flex items-center gap-3">
                                    <Icon.UilApps className="w-[20px] relative top-[1px]"/>
                                    <span className="font-bold tracking-tight capitalize">Danh mục</span>
                                </Link>
                                <div
                                    className="min-w-full opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                    shadow-tiny transition-all absolute top-full left-0 rounded-[4px] bg-white z-50">
                                    <Menu categories={categories}/>
                                </div>
                            </div>
                            <div className="flex items-center justify-end gap-5">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}


export default Header;