import React, {useContext, useEffect, useState} from "react"
import "./style.scss";
import {SocketContext} from "../../../service/socket";
import {Link} from "react-router-dom";
import Menu from "./Menu";
import axios from 'axios';
import * as Icon from '@iconscout/react-unicons';
import Logo from "../../../assets/img/logo.svg";

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
            <div className="h-[35px] bg-white flex items-center border-b-[1px] border-[#E5E5E5]">
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
            <div className="h-[95px] flex items-center bg-white border-b-[1px] border-[#E5E5E5]">
                <div className="container">
                    <div className="flex gap-8 justify-between items-center">
                        <Link to="/trang-chu" className="h-[30px]">
                            <img className="h-full w-auto" src={Logo} alt="logo"/>
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
            <div
                className={`bg-[white] shadow-md transition-all z-50 border-b-[1px] border-[#E5E5E5] ${scrollTop >= 130 && 'fixed top-0 left-0 right-0'}`}>
                <div className="container">
                    <div className="flex gap-6 py-2 relative">
                        <div
                            className="group bg-primary-hover min-w-[200px] px-4 py-2.5 rounded-[6px] flex items-center justify-between gap-4">
                            <Link to="/danh-muc" className="text-white flex items-center justify-between w-full">
                                <p className="flex items-center gap-3">
                                    <Icon.UilApps className="w-[20px] relative top-[1px]"/>
                                    <span className="font-bold tracking-tight capitalize">Danh mục</span>
                                </p>
                                <Icon.UilAngleDown className="relative top-[1px] w-[26px] w-[26px]"/>
                            </Link>
                            <div
                                className="min-w-full opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                    shadow-tiny transition-all absolute top-full left-0 rounded-[4px] bg-white z-50">
                                <Menu categories={categories}/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="h-[30px] w-[1.5px] bg-[#DDDEE3] align-middle"></div>
                        </div>
                        <div className="flex items-center justify-between flex-1">
                            <div className="flex items-center justify-start gap-8">
                                <Link to="/tin-tuc"
                                      className="hover:text-primary-hover transition-all text-black-1 font-bold text-md capitalize">
                                    Tin tức
                                </Link>
                                <Link to="/thong-bao"
                                      className="hover:text-primary-hover transition-all text-black-1 font-bold text-md capitalize">
                                    Thông báo
                                </Link>
                                <Link to="/cua-hang/123"
                                      className="hover:text-primary-hover transition-all text-black-1 font-bold text-md capitalize">
                                    Cửa hàng
                                </Link>
                                <Link to="/kenh-ban-hang/"
                                      className="hover:text-primary-hover transition-all text-black-1 font-bold text-md capitalize">
                                    Kênh bán hàng
                                </Link>
                                <Link to="/quan-tri/"
                                      className="hover:text-primary-hover transition-all text-black-1 font-bold text-md capitalize">
                                    Trang quản trị
                                </Link>
                            </div>
                            <Link to="/dau-gia"
                                  className="group flex items-center gap-1 hover:text-primary-hover transition-all text-primary font-bold text-base capitalize">
                                <Icon.UilFire
                                    className="group-hover:fill-primary-hover fill-primary transition-all"/> Sàn đấu giá
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}


export default Header;