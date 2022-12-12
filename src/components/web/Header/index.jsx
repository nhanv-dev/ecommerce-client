import React, {useContext, useEffect, useState} from "react"
import axios from 'axios';
import {SocketContext} from "../../../service/socket";
import {Link} from "react-router-dom";
import Menu from "./Menu";
import * as Icon from '@iconscout/react-unicons';
import Logo from "../../../assets/img/logo.svg";
import {publicRequest} from "../../../utils/requestMethods";
import {useSelector} from "react-redux";
import UserComponent from "./UserComponent";

function Header() {
    const [categories, setCategories] = useState([])
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        publicRequest.get('/categories?limit=8').then((res) => {
            setCategories(res.data.categories)
        });
    }, [])


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
                            <Link to="/kenh-ban-hang" className="cursor-pointer flex items-center justify-center gap-2 text-xs font-[500] text-black">
                                <span>Kênh người bán</span>
                            </Link>
                            <Link to="/dang-ky-ban-hang" className="cursor-pointer flex items-center justify-center gap-2 text-xs font-[500] text-black">
                                <span>Bán hàng cùng Shopio</span>
                            </Link>
                        </div>
                        <div className="flex justify-start items-center gap-4">
                            <p className="cursor-pointer flex items-center justify-center gap-2 text-xs font-[500] text-black">
                                <span>Chăm sóc khách hàng</span>
                            </p>
                            <p className="cursor-pointer flex items-center justify-center gap-2 text-xs font-[500] text-black">
                                <span>Hỗ trợ</span>
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
                    <div className="flex gap-6 justify-between items-center">
                        <div className="w-[200px]">
                            <Link to="/trang-chu" className="h-[30px]">
                                <img className="h-full w-auto" src={Logo} alt="logo"/>
                            </Link>
                        </div>
                        <div className="w-[700px] flex gap-4 items-center justify-center">
                            <input type="text"
                                   className="text-gray bg-[#F7F7F7] text-tiny font-medium bg-white px-3 flex-1 h-[40px] rounded-[5px] focus-visible:outline-none"
                                   placeholder="Tìm kiếm sản phẩm..."/>
                            <button
                                className="bg-[#F7F7F7] w-[40px] h-[40px] rounded-[5px] flex items-center justify-center">
                                <Icon.UilSearch className="w-[20px] h-[20px] text-black"/>
                            </button>
                        </div>
                        <div className="w-[200px] flex items-center justify-end gap-10">
                            <UserComponent/>
                            <Link to="/gio-hang" className="relative outline-none group">
                                <Icon.UilShoppingBag className="w-[26px] h-[26px] text-black"/>
                                <p className="transition-all group-hover:opacity-100 group-hover:visible group-hover:top-full mt-[10px] opacity-0 invisible z-[20] absolute top-[70%] left-[50%] translate-x-[-50%] min-w-max bg-black text-white font-medium rounded-[8px] text-sm px-2.5 py-1">
                                    <span
                                        className="absolute bottom-[99%] left-[50%] translate-x-[-50%] border-[7px] border-[transparent] border-b-[#333333]"/>
                                    Giỏ hàng
                                </p>
                                <p className="absolute right-[-10px] top-[-10px] rounded-full bg-primary w-[20px] h-[20px] flex items-center justify-center text-white text-sm font-bold">0</p>
                            </Link>
                        </div>
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