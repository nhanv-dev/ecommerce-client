import {useState} from 'react';
import {formatCurrency} from "../../../utils/format";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Thumbs} from "swiper";
import * as SolidIcon from "@iconscout/react-unicons-solid";
import * as Icon from "@iconscout/react-unicons";

function Overview(props) {
    const {
        product,
        userCombination,
        options,
        combinations,
        userOptions,
        setUserOptions,
        updateQuantity,
        quantity
    } = props;
    const [activeThumbs, setActiveThumbs] = useState()

    const handleChooseOption = (option, value) => {
        const payload = [...userOptions].filter(item => item.option._id !== option._id)
        setUserOptions([...payload, {option, value}])
    }

    const handleUpdateQuantity = (value) => {
        if (value <= 0) updateQuantity(1)
        else if (value > userCombination.stock) updateQuantity(userCombination.stock)
        else updateQuantity(value)
    }
    return (
        <>
            {product &&
                <div className="flex gap-6 bg-white h-auto rounded-[5px] px-6">
                    <div className="py-6 w-[500px] h-full">
                        <div className="rounded-[5px] mb-3">
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
                            loop={false}
                            spaceBetween={10}
                            slidesPerView={5}
                            modules={[Navigation, Thumbs]}
                            navigation={true}
                            grabCursor={true}
                            className='product-images-slider-thumbs mb-8'>
                            <>
                                {product.images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="rounded-[5px] w-[90px] h-[90px] bg-cover bg-center"
                                             style={{backgroundImage: `url(${image.url})`}}/>
                                    </SwiperSlide>
                                ))}
                            </>
                        </Swiper>
                        <div className="flex items-center gap-2">
                            <p className="font-medium text-md text-black-1">Chia sẻ:</p>
                            <button
                                className="ml-3 rounded-full w-[30px] h-[30px] flex items-center justify-center bg-[#4267B2]">
                                <Icon.UilFacebookMessenger className="w-[18px] h-[18px] text-white"/>
                            </button>
                            <button
                                className="rounded-full w-[30px] h-[30px] flex items-center justify-center bg-[#1DA1F2]">
                                <Icon.UilTwitter className="w-[18px] h-[18px] text-white"/>
                            </button>
                            <button
                                className="rounded-full w-[30px] h-[30px] flex items-center justify-center bg-[#898F9C]">
                                <Icon.UilLinkAlt className="w-[18px] h-[18px] text-white"/>
                            </button>
                        </div>
                    </div>
                    <div className="w-[1px] min-h-full bg-[#f2f2f2]"/>
                    <div className="py-6 flex-1">
                        <div className="border-b border-[#f2f2f2] mb-5">
                            <h1 className="mb-2 font-medium text-2xl">
                                {product.name}
                            </h1>
                            <div className="flex items-center justify-between gap-5 mb-5">
                                <div className="flex items-center gap-5">
                                    <div className="flex items-center gap-0.5">
                                        <SolidIcon.UisStar className="w-3.5 h-3.5 text-[#e4a400] "/>
                                        <SolidIcon.UisStar className="w-3.5 h-3.5 text-[#e4a400]"/>
                                        <SolidIcon.UisStar className="w-3.5 h-3.5 text-[#e4a400]"/>
                                        <SolidIcon.UisStar className="w-3.5 h-3.5 text-[#e4a400]"/>
                                        <SolidIcon.UisStar className="w-3.5 h-3.5 text-[#e4a400] "/>
                                        <p className="pl-2 text-[#787878] text-md font-medium leading-5">
                                            (Xem {product.assess} đánh giá)
                                        </p>
                                    </div>
                                    <div className="min-h-[14px] w-[2px] bg-[#787878] opacity-60"></div>
                                    <p className="text-[#787878] text-md font-medium leading-5">
                                        Đã bán {product.sold}
                                    </p>
                                </div>
                                <button
                                    className="flex items-center gap-1 font-medium text-md text-black-1 transition-all hover:text-primary-hover">
                                    <Icon.UilInfoCircle className="w-[18px] h-[18px]"/>
                                    Tố cáo
                                </button>
                            </div>
                            <div className="p-5 pt-3 rounded-[5px] bg-[#FAFAFA] mb-5">
                                <p className="text-3xl font-medium text-primary-hover my-2">
                                    {userCombination ?
                                        formatCurrency(userCombination.price * (100 - product.discountPercent) / 100) :
                                        formatCurrency(product.basePrice * (100 - product.discountPercent) / 100)
                                    }
                                </p>
                                <div className="flex items-center">
                                    <p className="text-base font-medium text-[#808089] line-through">
                                        {userCombination ?
                                            formatCurrency(userCombination.price) : formatCurrency(product.basePrice)
                                        }
                                    </p>
                                    <p className="ml-3 font-bold text-primary-hover">Giảm {product.discountPercent}%</p>
                                </div>
                            </div>
                        </div>
                        {options.map(option => {
                            return (
                                <div key={option._id} className="flex items-center flex-row mb-5">
                                    <div className="basis-1/4">
                                        <p className="font-medium text-[#6f787e] text-md">
                                            {option.name}:
                                        </p>
                                    </div>
                                    <div className="flex-1 flex items-center gap-2.5 flex-wrap">
                                        {option.values.map(value => {
                                            const isActive = [...userOptions].filter(item => item.option._id === option._id && item.value._id === value._id).length > 0;
                                            return (
                                                <button key={value._id}
                                                        onClick={() => handleChooseOption(option, value)}
                                                        className={`${isActive ? 'bg-[#E5F2FF] border-[#0d5cb6]' : 'bg-[#f2f2f2] border-[#f2f2f2]'} outline-none relative group hover:bg-[#E5F2FF] hover:border-[#0d5cb6] border-2 min-w-[50px] py-1 px-2.5  transition-all rounded-[5px]`}>
                                                    <p className="font-medium text-tiny text-black-1">
                                                        {value.name}
                                                    </p>
                                                    <img alt="check"
                                                         src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/selected-variant-indicator.svg"
                                                         className={`${isActive ? 'visible opacity-100' : 'invisible opacity-0'} group-hover:visible group-hover:opacity-100 transition-all absolute top-[-1px] right-[-1px]`}/>
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                        <div className="mb-5 pb-5 border-b border-[#f2f2f2]">
                            <div className="flex items-center flex-row">
                                <div className="basis-1/4">
                                    <p className="font-medium text-[#6f787e] text-md">Chọn số lượng:</p>
                                </div>
                                <div className="min-w-max flex items-center">
                                    <button onClick={() => handleUpdateQuantity(quantity - 1)}
                                            className="hover:bg-[#F3F3F3] rounded-[4px] bg-[#e7e8ea] w-[30px] h-[30px] flex items-center justify-center">
                                        <Icon.UilMinus className="text-center text-[#3f4b53] w-[16px] h-[16px]"/>
                                    </button>
                                    <input value={quantity} type="number"
                                           onChange={(e) => handleUpdateQuantity(e.target.value)}
                                           className="text-center mx-1 rounded-[4px] border-2 border-[#f2f2f2] w-[35px] h-[30px] outline-none font-medium text-md"/>
                                    <button onClick={() => handleUpdateQuantity(quantity + 1)}
                                            className="hover:bg-[#F3F3F3] rounded-[4px] bg-[#e7e8ea] w-[30px] h-[30px] flex items-center justify-center">
                                        <Icon.UilPlus className="text-center text-[#3f4b53] w-[16px] h-[16px]"/>
                                    </button>
                                </div>
                                <div className="font-medium text-md ml-5">
                                    {(userOptions.length === options.length && !userCombination?.outOfStock) &&
                                        `${userCombination.stock} sản phẩm hiện có`
                                    }
                                    {(userOptions.length === options.length && userCombination?.outOfStock) &&
                                        "Sản phẩm hiện chưa mở bán"
                                    }
                                </div>
                            </div>
                            <div className="mt-5">
                                <p className="font-medium text-md rounded-full px-5 py-1 bg-[#e7e8ea] max-w-max">
                                    {userOptions.length < options.length && (userCombination || userCombination.outOfStock) &&
                                        "Vui lòng chọn loại sản phẩm"
                                    }
                                    {(userOptions.length === options.length && userCombination?.outOfStock) &&
                                        "Vui lòng chọn loại sản phẩm khác"
                                    }
                                    {(userOptions.length === options.length && !userCombination?.outOfStock) &&
                                        `Mã sản phẩm: ${userCombination.combinationString}`
                                    }
                                </p>
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
                        <div className="pb-5 border-b border-[#f2f2f2]">
                            <div className="pb-5 border-b border-[#f2f2f2]">
                                <p className="mt-3 text-lg font-bold">
                                    Ưu đãi dành cho bạn
                                </p>
                                <div className=" flex mt-3 ">
                                    <div className=" items-center justify-start flex basis-1/2 p-2">
                                        <div className="flex flex-col basis-1/6">
                                            <img className="w-[50px] h-[50px]"
                                                 src="https://yt3.ggpht.com/radw-0s056UWMotq-3d_3-qkCoiumQUDuhTNoMZ3FZ0Z7qnHT57I8-s2tS-X8La96v5nImM_=s900-c-k-c0x00ffffff-no-rj"
                                                 alt=""/>
                                        </div>
                                        <div className="">
                                            <span className=" text[#3f4b53]">Trả góp Kvedivo</span>
                                        </div>
                                    </div>
                                    <div className="items-center justify-start flex basis-1/2 p-2">
                                        <div className="flex flex-col basis-1/6">
                                            <Icon.UilMobileAndroid className="text-[#FF940B] w-[40px] h-[40px]"/>
                                        </div>
                                        <div className="">
                                            <span className=" text[#3f4b53]">Giảm khi mua qua App</span>
                                        </div>
                                    </div>
                                </div>

                                {/*</div>*/}
                                {/*<div className="pb-5 border-b border-[#f2f2f2]">*/}
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

                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Overview;