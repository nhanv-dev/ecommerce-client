import {useState} from 'react';
import {formatCurrency} from "../../../utils/format";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Thumbs} from "swiper";
import * as SolidIcon from "@iconscout/react-unicons-solid";
import * as Icon from "@iconscout/react-unicons";

function Overview({product, updateQuantity, quantity}) {
    const [activeThumbs, setActiveThumbs] = useState()

    const handleUpdateQuantity = (value) => {
        if (value <= 0) updateQuantity(1)
        else updateQuantity(value)
    }
    return (
        <>
            {product &&
                <div className="flex gap-6 bg-white h-auto rounded-[5px] p-6">
                    <div className="w-[500px] h-full">
                        <div className="rounded-[5px] mb-5">
                            <div className="w-full h-[100%] rounded-[5px]">
                                <Swiper
                                    loop={true}
                                    spaceBetween={0}
                                    thumbs={{swiper: activeThumbs}}
                                    modules={[Navigation, Thumbs]}
                                    navigation={true}
                                    grabCursor={true}
                                    className='product-images-slider-thumbs'>
                                    <>
                                        {product.images.map((image, index) => {
                                            return (
                                                <SwiperSlide className="rounded-[5px]" key={index}>
                                                    <div style={{backgroundImage: `url(${image.url})`}}
                                                         className="rounded-[5px] w-[500px] h-[500px] bg-cover bg-center"/>
                                                </SwiperSlide>
                                            )
                                        })}
                                    </>
                                </Swiper>
                            </div>
                        </div>
                        <Swiper
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={5}
                            modules={[Navigation, Thumbs]}
                            navigation={true}
                            grabCursor={true}
                            className='product-images-slider-thumbs'>
                            <>
                                {product.images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="rounded-[5px] w-[70px] h-[70px] bg-cover bg-center"
                                             style={{backgroundImage: `url(${image.url})`}}/>
                                    </SwiperSlide>
                                ))}
                            </>
                        </Swiper>
                    </div>
                    <div className="flex-1">
                        <div className="border-b border-[#e7e8ea]">
                            <h1 className="font-bold">{product.name}</h1>
                            <p className="text-base font-bold text-primary-hover my-2">{formatCurrency(product.sellPrice * (100 - product.discountPercent) / 100)}</p>
                            <div className="flex mb-3">
                                <p className="text-base font-bold text-[#313113] line-through">{formatCurrency(product.sellPrice)} </p>
                                <p className="ml-3 font-bold text-primary-hover">Giảm {product.discountPercent}%</p>
                            </div>
                            <div className="flex items-center mb-5">
                                <div className="flex gap-0.5">
                                    <SolidIcon.UisStar className="w-[14px] h-[14px] text-[#e4a400] "/>
                                    <SolidIcon.UisStar className="w-[14px] h-[14px] text-[#e4a400]"/>
                                    <SolidIcon.UisStar className="w-[14px] h-[14px] text-[#e4a400]"/>
                                    <SolidIcon.UisStar className="w-[14px] h-[14px] text-[#e4a400]"/>
                                    <SolidIcon.UisStar className="w-[14px] h-[14px] text-[#e4a400] "/>
                                </div>
                                <p className="ml-2 text-[#007ae4] text-md font-medium">{product.assess} đánh giá</p>
                                <div className="flex items-center gap-1 ml-5">
                                    <Icon.UilShoppingBag className="w-[24px] h-[24px] text-gray"/>
                                    <span className="text-md text-gray font-medium">{product.sold} lượt mua</span>
                                </div>
                            </div>
                        </div>
                        <div className="py-5 border-b border-[#e7e8ea]">
                            <div className="flex items-center flex-row">
                                <div className="basis-1/4">
                                    <p className="font-medium text-[#6f787e] text-md">Chọn số lượng:</p>
                                </div>
                                <div className="basis-3/4 flex items-center">
                                    <button onClick={() => handleUpdateQuantity(--quantity)}
                                            className="hover:bg-[#F3F3F3] rounded-[4px] bg-[#e7e8ea] w-[30px] h-[30px] flex items-center justify-center">
                                        <Icon.UilMinus className="text-center text-[#3f4b53] w-[16px] h-[16px]"/>
                                    </button>
                                    <input value={quantity} type="text" onChange={(e) => {
                                        console.log(e)
                                    }} className="text-center mx-2 rounded-[5px] border-2 border-[#e7e8ea] w-[35px]"/>
                                    <button onClick={() => handleUpdateQuantity(++quantity)}
                                            className="hover:bg-[#F3F3F3] rounded-[5px] bg-[#e7e8ea] w-[30px] h-[30px] flex items-center justify-center">
                                        <Icon.UilPlus className="text-center text-[#3f4b53] w-[16px] h-[16px]"/>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-5 flex items-center flex-row gap-3">
                                <div className="basis-1/2 ">
                                    <button
                                        className="text-base text-[#3f4b53] font-bold hover:bg-[#F3F3F3] rounded-[4px] bg-[#e7e8ea] w-[100%] h-[44px]">
                                        Thêm vào giỏ
                                    </button>
                                </div>
                                <div className="basis-1/2">
                                    <button
                                        className="text-base text-white font-bold hover:bg-primary-hover rounded-[4px] bg-primary w-[100%] h-[44px]">
                                        Mua ngay
                                    </button>

                                </div>

                            </div>
                        </div>
                        {/*<div className="pb-5 border-b border-[#e7e8ea]">*/}
                        {/*    <p className="mt-3 text-lg font-bold">*/}
                        {/*        Mã giảm giá của shop*/}
                        {/*    </p>*/}
                        {/*    <div className=" flex mt-3 ">*/}
                        {/*        <div*/}
                        {/*            className="bg-white shadow-lg items-center justify-between flex basis-1/4 p-2 rounded-[5px] ">*/}
                        {/*            <div*/}
                        {/*                className="flex w-full flex-col after:w-[1px] h-[100%] border-dashed border-r-2 border-[#cfd2d4] right-0 top-0 mr-1">*/}
                        {/*                <span className="text-[#da732a] mr-3">Giảm giá 10k</span>*/}
                        {/*                <span className="text-sm text-[#0B6CFF]">Chi tiết</span>*/}
                        {/*            </div>*/}
                        {/*            <div className="basis-1/4">*/}
                        {/*                <button*/}
                        {/*                    className="hover:bg-[#F3F3F3] active:bg-[#e7e8ea] rounded-[5px] px-2 font-bold text-[#3f4b53]">Lưu*/}
                        {/*                </button>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}

                        {/*</div>*/}
                        {/*<div className="pb-5 border-b border-[#e7e8ea]">*/}
                        {/*    <p className="mt-3 text-lg font-bold">*/}
                        {/*        Ưu đãi dành cho bạn*/}
                        {/*    </p>*/}
                        {/*    <div className=" flex mt-3 ">*/}
                        {/*        <div className=" items-center justify-start flex basis-1/2 p-2">*/}
                        {/*            <div className="flex flex-col basis-1/6">*/}
                        {/*                <img className="w-[50px] h-[50px]"*/}
                        {/*                     src="https://yt3.ggpht.com/radw-0s056UWMotq-3d_3-qkCoiumQUDuhTNoMZ3FZ0Z7qnHT57I8-s2tS-X8La96v5nImM_=s900-c-k-c0x00ffffff-no-rj"*/}
                        {/*                     alt=""/>*/}
                        {/*            </div>*/}
                        {/*            <div className="">*/}
                        {/*                <span className=" text[#3f4b53]">Trả góp Kvedivo</span>*/}
                        {/*            </div>*/}

                        {/*        </div>*/}
                        {/*        <div className="items-center justify-start flex basis-1/2 p-2">*/}
                        {/*            <div className="flex flex-col basis-1/6">*/}
                        {/*                <Icon.UilMobileAndroid className="text-[#FF940B] w-[40px] h-[40px]"/>*/}
                        {/*            </div>*/}
                        {/*            <div className="">*/}
                        {/*                <span className=" text[#3f4b53]">Giảm khi mua qua App</span>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}

                        {/*</div>*/}
                        {/*<div className="pb-5 border-b border-[#e7e8ea]">*/}
                        {/*    <p className="mt-3 text-lg font-bold">*/}
                        {/*        Quyền lợi khách hàng*/}
                        {/*    </p>*/}
                        {/*    <div className=" flex mt-3 ">*/}
                        {/*        <div className=" items-center justify-start flex basis-1/2 p-2">*/}
                        {/*            <div className="flex flex-col basis-1/12">*/}
                        {/*                <Icon.UilShieldCheck className="text-[#07B359] w-[30px] h-[30px]"/>*/}
                        {/*            </div>*/}
                        {/*            <div className="">*/}
                        {/*                <span className="pl-1 text[#3f4b53]">Miễn phí hoàn trả</span>*/}
                        {/*            </div>*/}

                        {/*        </div>*/}
                        {/*        <div className="items-center justify-start flex basis-1/2 p-2">*/}
                        {/*            <div className="flex flex-col basis-1/12">*/}
                        {/*                <Icon.UilShieldCheck className="text-[#07B359] w-[30px] h-[30px]"/>*/}
                        {/*            </div>*/}
                        {/*            <div className="">*/}
                        {/*                <span className="pl-1 text-[#3f4b53]">48 giờ hoàn trả</span>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}

                        {/*</div>*/}
                    </div>
                </div>}
        </>
    );
}

export default Overview;