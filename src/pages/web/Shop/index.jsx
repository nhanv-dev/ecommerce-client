import "./style.scss";
import {Link, NavLink, Route, Routes, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as Icon from '@iconscout/react-unicons';
import * as IconSolid from '@iconscout/react-unicons-solid';
import {BuyerLayout} from "../../../components/common/Layouts";
import Helmet from "../../../components/web/Helmet";
import Home from "./Home";
import Collection from "./Collection";
import Info from "./Info";
import Product from "./Product";
import Review from "./Review";
import ShopExample from "../../../common/ShopExample";
import {formatBetweenDate} from "../../../utils/format";

function Shop() {
    const {slug} = useParams();
    const [shop, setShop] = useState({});
    const [vouchers, setVouchers] = useState(null);

    useEffect(() => {
        setShop(ShopExample);
    }, [slug])

    useEffect(() => {
        const vouchers = [{
            _id: 1,
            shopId: 1,
            max: 15000,
            apply: 1000,
            percent: 0.03,
            expiredDate: '23:59 15/12/2022',
            createdDate: '23:59 30/9/2022'
        },]
        setVouchers([...vouchers, ...vouchers, ...vouchers]);
    }, [shop])

    return (
        <BuyerLayout>
            <Helmet title={shop ? `Shop - ${shop.name}` : 'Cửa hàng'}>
                <div className="container pb-6">
                    <div className="bg-white rounded-[8px]">
                        <div className="h-[200px] overflow-hidden flex items-center justify-center">
                            <img src="https://pwa-web.scdn.vn/static/media/page_loading.4a62ff00.png"
                                 alt="background" className="w-auto h-[150px]"/>
                        </div>
                        <div className="flex gap-4 py-4 px-6 border-b-2 border-[#e7e8ea]">
                            <div
                                className="rounded-[50%] w-[90px] h-[90px] overflow-hidden border-[.1rem] border-primary ">
                                <img src={shop.avatar} alt="avatar"/>
                            </div>
                            <div className="flex gap-5 border-r-2 border-[#e7e8ea] pr-5">
                                <div className="flex-1">
                                    <h5 className="font-bold text-black text-[1.2rem] line-clamp-2 mb-1">{shop.name}</h5>
                                    {shop.rating && (
                                        <div className="flex items-center justify-start gap-2.5 mb-3">
                                            <div className="flex gap-[.075rem] items-center">
                                                <IconSolid.UisFavorite
                                                    className={`w-[16px] ${shop.rating.voteValue >= 1 ? 'fill-primary' : 'fill-gray '}`}/>
                                                <IconSolid.UisFavorite
                                                    className={`w-[16px] ${shop.rating.voteValue >= 2 ? 'fill-primary' : 'fill-gray '}`}/>
                                                <IconSolid.UisFavorite
                                                    className={`w-[16px] ${shop.rating.voteValue >= 3 ? 'fill-primary' : 'fill-gray '}`}/>
                                                <IconSolid.UisFavorite
                                                    className={`w-[16px] ${shop.rating.voteValue >= 4 ? 'fill-primary' : 'fill-gray '}`}/>
                                                <IconSolid.UisFavorite
                                                    className={`w-[16px] ${shop.rating.voteValue >= 5 ? 'fill-primary' : 'fill-gray '}`}/>
                                            </div>
                                            <p className="text-base font-[700] text-primary">{shop.rating.voteValue}</p>
                                            <p className="text-tiny font-bold text-black-1">
                                                ({shop.rating.voteCount} Đánh giá)
                                            </p>
                                        </div>
                                    )}
                                    <div className="flex gap-3 items-center justify-start">
                                        <button
                                            className="min-w-max flex items-center justify-center gap-2 font-bold bg-[#e7e8ea] text-md text-[#3f4b53] outline-none py-1.5 px-3.5 rounded-[6px]">
                                            <Icon.UilHeart className="w-[20px] relative top-[1px]"/>
                                            Theo dõi
                                        </button>
                                        <button
                                            className="min-w-max flex items-center justify-center gap-2 font-bold bg-[#e7e8ea] text-md text-[#3f4b53] outline-none py-1.5 px-3.5 rounded-[6px]">
                                            <Icon.UilCommentsAlt className="w-[20px] relative top-[1px]"/>
                                            Chat ngay
                                        </button>
                                    </div>
                                </div>
                                <button
                                    className="flex items-center justify-center rounded-full bg-[#D8EAFF] w-[34px] h-[34px]">
                                    <Icon.UilPhoneVolume
                                        className="fill-[#1CAC93] w-[20px] h-[20px] relative top-[1px] right-[.5px]"/>
                                </button>
                            </div>
                            <div className="flex-1 flex items-center justify-between">
                                <div className="flex-1 relative py-1 border-r-[2px] border-[#e7e8ea]">
                                    <div className="flex items-center gap-3 justify-center mb-1">
                                        <Icon.UilShop className="w-[20px] h-[20px] fill-black-1"/>
                                        <span
                                            className="font-medium text-[#0f62fe] text-[.95rem]">{formatBetweenDate(shop.joinDate)}</span>
                                    </div>
                                    <p className="text-center font-semibold text-md text-black-1">
                                        Bán hàng trên Shopio</p>
                                </div>
                                <div className="flex-1 relative py-1 border-r-[2px] border-[#e7e8ea]">
                                    <div className="flex items-center gap-3 justify-center mb-1">
                                        <Icon.UilArchive className="w-[20px] h-[20px] fill-black-1"/>
                                        <span className="font-medium text-[#0f62fe] text-[.95rem]">{shop.numberOfProducts}</span>
                                    </div>
                                    <p className="text-center font-semibold text-md text-black-1">
                                        Sản phẩm
                                    </p>
                                </div>
                                <div className="flex-1 relative py-1 border-r-[2px] border-[#e7e8ea]">
                                    <div className="flex items-center gap-3 justify-center mb-1">
                                        <Icon.UilCommentAltLines className="w-[20px] h-[20px] fill-black-1"/>
                                        <span className="font-medium text-[#0f62fe] text-[.95rem]">{shop.chatResponseRate}%</span>
                                    </div>
                                    <p className="text-center font-semibold text-md text-black-1">
                                        Tỉ lệ phản hồi
                                    </p>
                                </div>
                                <div className="flex-1 relative py-1">
                                    <div className="flex items-center gap-3 justify-center mb-1">
                                        <Icon.UilHistory className="w-[20px] h-[20px] fill-black-1"/>
                                        <span className="font-medium text-[#0f62fe] text-[.95rem]">Đang cập nhật</span>
                                    </div>
                                    <p className="text-center font-semibold text-md text-black-1">
                                        Thời gian phản hồi
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-8 px-6">
                            <NavigationLink to="" title="Trang chủ Shop"/>
                            <NavigationLink to="san-pham" title="Sản phẩm"/>
                            <NavigationLink to="bo-suu-tap" title="Bộ sưu tập"/>
                            <NavigationLink to="thong-tin" title="Thông tin Shop"/>
                            <NavigationLink to="danh-gia-phan-hoi" title="Đánh giá & Phản hồi"/>
                        </div>
                    </div>
                </div>
                <Routes>
                    <Route path="san-pham" element={<Product/>}/>
                    <Route path="bo-suu-tap" element={<Collection/>}/>
                    <Route path="thong-tin" element={<Info/>}/>
                    <Route path="danh-gia-phan-hoi" element={<Review/>}/>
                    <Route path="" element={<Home vouchers={vouchers}/>}/>
                </Routes>
            </Helmet>
        </BuyerLayout>
    );
}

const NavigationLink = ({to, title}) => {
    const classes = "text-primary after:bg-primary";
    return (
        <NavLink to={to} end className={(value) => {
            return `duration-500 pt-4 pb-3 px-3 transition-all font-bold text-md tracking-[-.1px] relative after:absolute after:bg-transparent after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:rounded-[50px] 
            ${value?.isActive ? classes : 'text-black'}`
        }}>
            {title}
        </NavLink>
    )
}

export default Shop;