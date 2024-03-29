import {useEffect} from 'react';
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Thumbs} from 'swiper';
import * as SolidIcon from '@iconscout/react-unicons-solid';
import * as Icon from '@iconscout/react-unicons';
import SmallProductCard from "../../../components/web/SmallProductCard";
import DefaultShopImage from '../../../assets/img/default-shop.png';
import {formatBetweenDate, formatToK} from "../../../utils/format";

function Shop({shop, relatedProducts}) {

    useEffect(() => {
        fetch(shop.avatar).then((resp) => {
            if (resp.status !== 200) shop.avatar = DefaultShopImage;
        })
    }, [shop])

    return (
        <div className="w-[500px] bg-white p-6 sticky top-[88px] h-full rounded-[5px]">
            <div className="flex gap-4 items-start justify-start">
                <Link to={`/cua-hang/${shop.slug}`}
                      className="w-[70px] h-[70px] relative rounded-full bg-cover bg-center border-2 border-border"
                      style={{backgroundImage: `url(${shop.avatar})`}}>
                    <p className="absolute bottom-0 right-0 border-[3.5px] rounded-full border-[#FFFFFF] w-[24px] h-[24px] bg-[#00C50A]"/>
                </Link>
                <div>
                    <Link to={`/cua-hang/${shop.slug}`}
                          className="font-bold mt-1 mb-1 block transition-all hover:text-primary-hover">
                        {shop.name}
                    </Link>
                    <div className="flex items-center justify-start gap-3">
                        <p className="font-bold text-sm text-[#3f4b53]">{shop.area}</p>
                        <p className="w-[1.5px] h-[12px] bg-[#3f4b53] opacity-50"></p>
                        <div className="flex items-center justify-start gap-1">
                            <p className="font-bold text-sm text-[#3f4b53]">{shop.rating}</p>
                            <SolidIcon.UisStar className="w-[16px] h-[14px] text-[#e4a400]"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex my-5 justify-between items-center">
                <div className="text-center">
                    <p className="font-semibold text-sm">{formatBetweenDate(shop.createdAt)}</p>
                    <p className="font-bold text-tiny text-[#3f4b53]">Bán ở Sendo</p>
                </div>
                <div className="text-center">
                    <p className="font-semibold text-sm">{shop.amountProducts}</p>
                    <p className="font-bold text-tiny text-[#3f4b53]">Sản phẩm</p>
                </div>
                <div className="text-center">
                    <p className="font-semibold text-sm">{formatToK(shop.followed || 0)}</p>
                    <p className="font-bold text-tiny text-[#3f4b53]">Lượt theo dõi</p>
                </div>
                <div className="text-center">
                    <p className="font-semibold text-sm">{formatToK(shop.following || 0)}</p>
                    <p className="font-bold text-tiny text-[#3f4b53]"> Đang theo dõi</p>
                </div>
                <div className="text-center">
                    <p className="font-semibold text-sm">{shop.responseRate}%</p>
                    <p className="font-bold text-tiny text-[#3f4b53]">Tỉ lệ phản hồi</p>
                </div>
            </div>
            <div className="w-full">
                <div className="flex mt-3 pb-5 justify-around items-center gap-2 border-b-[1px] border-[#e7e8ea]">
                    <button
                        className="flex items-center justify-center gap-2 flex-1 h-[40px] rounded-[5px] bg-[#e7e8ea] text-[#3f4b53] hover:bg-[#F3F3F3] active:bg-[#e7e8ea]">
                        <Icon.UilHeartMedical className="w-[20px] h-[20px] text-[#3f4b53]"/>
                        <span className="font-bold text-tiny">Theo dõi shop</span>
                    </button>
                    <Link to={`/cua-hang/${shop.slug}`}
                          className="flex items-center justify-center gap-2 flex-1 h-[40px] rounded-[5px] bg-[#e7e8ea] text-[#3f4b53] hover:bg-[#F3F3F3] active:bg-[#e7e8ea]">
                        <Icon.UilStore className="w-[20px] h-[20px] text-[#3f4b53]"/>
                        <span className="font-bold text-tiny">Vào shop</span>
                    </Link>
                    <button
                        className="flex items-center justify-center w-[40px] h-[40px] rounded-[5px] bg-[#e7e8ea] text-[#3f4b53] hover:bg-[#F3F3F3] active:bg-[#e7e8ea]">
                        <Icon.UilPhoneVolume className="w-[20px] h-[20px] text-[#3f4b53]"/>
                    </button>
                </div>
                <p className="font-bold text-[#3f4b53] mt-4">Gợi ý thêm từ shop</p>
                <div className="w-full h-[100%] bg-gradient-to-t to-[#fff] from-[#fbcbcb] rounded-[5px] mt-3">
                    <Swiper loop={true} spaceBetween={0} slidesPerView={3}
                            modules={[Navigation, Thumbs]} navigation={true} grabCursor={true}
                            className='product-images-slider-thumbs'>
                        {relatedProducts.map((product, index) => (
                            <SwiperSlide className="rounded-[5px] p-2" key={index}>
                                <div
                                    className="product-images-slider-thumbs-wrapper rounded-[5px] border-none hover:shadow-xl shadow-[#4b5563]">
                                    <SmallProductCard className=" w-[100%]" product={product}/>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}


export default Shop;