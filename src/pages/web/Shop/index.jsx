import "./style.scss";
import {Link, NavLink, Route, Routes, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as Icon from '@iconscout/react-unicons';
import * as IconSolid from '@iconscout/react-unicons-solid';
import {UserLayout} from "../../../components/common/Layouts";
import Helmet from "../../../components/web/Helmet";
import Home from "./Home";
import Collection from "./Collection";
import Info from "./Info";
import Product from "./Product";
import Review from "./Review";
import {formatBetweenDate} from "../../../utils/format";
import {publicRequest} from "../../../utils/requestMethods";

function Shop() {
    const {slug} = useParams();
    const [shop, setShop] = useState({});
    const [vouchers, setVouchers] = useState(null);

    useEffect(() => {
        publicRequest.get(`/shops/${slug}`).then(res => {
            if (res.data?.success) setShop(res.data.shop);
        }).catch(err => {
            setShop({})
        })
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
        <UserLayout>
            <Helmet title={shop ? `Shop - ${shop.name}` : 'Cửa hàng'}>
                <div className="pb-6">
                    <div className="container pb-6">
                        <div className="bg-white rounded-b-[8px]">
                            <div className="h-[200px] overflow-hidden flex items-center justify-center">
                                <img alt="background" className="w-auto h-[150px]"
                                     src={shop.background || "https://pwa-web.scdn.vn/static/media/page_loading.4a62ff00.png"}/>
                            </div>
                            <div className="flex gap-3 py-4 px-6 border-b-2 border-[#e7e8ea]">
                                <div
                                    className="rounded-[50%] w-[90px] h-[90px] overflow-hidden border-[.1rem] border-primary ">
                                    <img src={shop.avatar} alt="avatar"/>
                                </div>
                                <div className="flex gap-4 border-r-2 border-[#e7e8ea] pr-4">
                                    <div className="flex-1">
                                        <h5 className="max-w-[250px] font-bold text-black text-lg line-clamp-1 break-words"
                                            title={shop.name}>
                                            {shop.name}
                                        </h5>
                                        {shop.rating && (
                                            <div className="flex items-center justify-start gap-2.5 mb-3">
                                                <div className="flex gap-[.075rem] items-center">
                                                    <IconSolid.UisFavorite
                                                        className={`w-[16px] ${shop.rating >= 1 ? 'fill-primary' : 'fill-gray '}`}/>
                                                    <IconSolid.UisFavorite
                                                        className={`w-[16px] ${shop.rating >= 2 ? 'fill-primary' : 'fill-gray '}`}/>
                                                    <IconSolid.UisFavorite
                                                        className={`w-[16px] ${shop.rating >= 3 ? 'fill-primary' : 'fill-gray '}`}/>
                                                    <IconSolid.UisFavorite
                                                        className={`w-[16px] ${shop.rating >= 4 ? 'fill-primary' : 'fill-gray '}`}/>
                                                    <IconSolid.UisFavorite
                                                        className={`w-[16px] ${shop.rating >= 5 ? 'fill-primary' : 'fill-gray '}`}/>
                                                </div>
                                                <p className="text-base font-[700] text-primary">{shop.rating}</p>
                                                <p className="text-tiny font-bold text-black-1">
                                                    ({shop.numberOfRating} Đánh giá)
                                                </p>
                                            </div>
                                        )}
                                        <div
                                            className="flex gap-3 items-center justify-start max-w-[250px] min-w-[250px]">
                                            <button
                                                className="flex items-center justify-center gap-2 font-bold bg-[#e7e8ea] text-md text-[#3f4b53] outline-none py-1.5 px-3.5 rounded-[5px]">
                                                <Icon.UilHeart className="w-[20px] relative top-[1px]"/>
                                                Theo dõi
                                            </button>
                                            <button
                                                className="flex-1 flex items-center justify-center gap-2 font-bold bg-[#e7e8ea] text-md text-[#3f4b53] outline-none py-1.5 px-3.5 rounded-[5px]">
                                                <Icon.UilCommentsAlt className="w-[20px] relative top-[1px]"/>
                                                Chat ngay
                                            </button>
                                        </div>
                                    </div>
                                    <div className="h-full flex flex-col justify-start gap-2">
                                        <button
                                            className="flex items-center justify-center rounded-full bg-[#D8EAFF] w-[36px] h-[36px]">
                                            <Icon.UilPhoneVolume
                                                className="fill-[#1CAC93] w-[20px] h-[20px] relative top-[1px] right-[.5px]"/>
                                        </button>
                                        <button
                                            className="flex items-center justify-center rounded-full bg-[#D8EAFF] w-[36px] h-[36px]">
                                            <Icon.UilExclamationTriangle
                                                className="fill-[#1CAC93] w-[20px] h-[20px] relative top-[-.5px]"/>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex-1 flex items-center justify-between">
                                    <div className="flex-1 relative py-1 border-r-[2px] border-[#e7e8ea]">
                                        <div className="flex items-center gap-3 justify-center mb-1">
                                            <Icon.UilShop
                                                className="relative top-[-.5px] w-[20px] h-[20px] fill-black-1"/>
                                            <span
                                                className="font-medium text-[#0f62fe] text-[.95rem]">{formatBetweenDate(shop.createdAt)}</span>
                                        </div>
                                        <p className="text-center font-medium text-md text-black-1">
                                            Bán hàng trên Shopio
                                        </p>
                                    </div>
                                    <div className="flex-1 relative py-1 border-r-[2px] border-[#e7e8ea]">
                                        <div className="flex items-center gap-3 justify-center mb-1">
                                            <Icon.UilArchive
                                                className="relative top-[-.5px] w-[20px] h-[20px] fill-black-1"/>
                                            <span
                                                className="font-medium text-[#0f62fe] text-[.95rem]">{shop.amountProducts}</span>
                                        </div>
                                        <p className="text-center font-medium text-md text-black-1">
                                            Sản phẩm
                                        </p>
                                    </div>
                                    <div className="flex-1 relative py-1 border-r-[2px] border-[#e7e8ea]">
                                        <div className="flex items-center gap-3 justify-center mb-1">
                                            <Icon.UilCommentAltChartLines
                                                className="relative top-[-.5px] w-[20px] h-[20px] fill-black-1"/>
                                            <span
                                                className="font-medium text-[#0f62fe] text-[.95rem]">{shop.responseRate}%</span>
                                        </div>
                                        <p className="text-center font-medium text-md text-black-1">
                                            Tỉ lệ phản hồi
                                        </p>
                                    </div>
                                    <div className="flex-1 relative py-1">
                                        <div className="flex items-center gap-3 justify-center mb-1">
                                            <Icon.UilHistory
                                                className="relative top-[-.5px] w-[20px] h-[20px] fill-black-1"/>
                                            <span
                                                className="font-medium text-[#0f62fe] text-[.95rem]">{shop.responseTime}</span>
                                        </div>
                                        <p className="text-center font-medium text-md text-black-1">
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
                        <Route path="thong-tin" element={<Info shop={shop}/>}/>
                        <Route path="danh-gia-phan-hoi" element={<Review shop={shop}/>}/>
                        <Route path="" element={<Home vouchers={vouchers}/>}/>
                    </Routes>
                </div>
            </Helmet>
        </UserLayout>
    );
}

const NavigationLink = ({to, title}) => {
    const classes = "text-primary after:bg-primary";
    return (
        <NavLink to={to} end className={(value) => {
            return `hover:text-primary-hover pt-4 pb-3 px-3 transition-all font-bold text-md tracking-[-.1px] relative after:absolute after:bg-transparent after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:rounded-[50px] 
            ${value?.isActive ? classes : 'text-black'}`
        }}>
            {title}
        </NavLink>
    )
}

export default Shop;