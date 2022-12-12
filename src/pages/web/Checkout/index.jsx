import React, {useEffect, useState} from 'react';
import {UserLayout} from "../../../components/common/Layouts";
import Helmet from "../../../components/web/Helmet";
import * as Icon from '@iconscout/react-unicons';
import visa from "../../../assets/img/visa.png";
import mastercard from "../../../assets/img/mastercard.png";
import jbc from "../../../assets/img/jcb.png";
import napas from "../../../assets/img/napas.png";
import paypal from "../../../assets/img/paypal.png";
import zalopay from "../../../assets/img/zalopay.png";
import momo from "../../../assets/img/momo.png";
import {formatCurrency} from "../../../utils/format";
import Modal from "../../../components/web/Modal/index";
import {Link} from "react-router-dom";


function CheckOut() {
    const sample = [
        {
            name: 'Laptop HP 15s-fq2660TU 6K793PA (15.6" HD/Intel Core i3-1115G4/4GB/512GB SSD/Windows 11 Home/1.7kg)',
            description: '<p>- CPU: Intel Core i3-1115G4 - M&agrave;n h&igrave;nh: 15.6&quot; (1366 x 768) - RAM: 1 x 4GB DDR4 3200MHz - &#272;&#7891; h&#7885;a: Intel UHD Graphics - L&#432;u tr&#7919;: 512GB SSD M.2 NVMe / - H&#7879; &#273;i&#7873;u h&agrave;nh: Windows 11 Home - Pin: 3 cell 41 Wh Pin li&#7873;n - Kh&#7889;i l&#432;&#7907;ng: 1.7 kg</p>',
            sell_price: 17690000,
            type: '',
            sold: '32k',
            quantity: '785',
            assess: 15,
            brand: 'HP',
            slug: 'san-pham-1',
            tags: ['Ready to ship', 'Yêu thích', 'Yêu thích', 'Yêu thích', 'Yêu thích'],
            images: [
                {img: 'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},
                {img: 'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},
                {img: 'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},
                {img: 'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'}
            ],

            color: [
                {
                    name: 'Đỏ',
                    price: '3000',
                    img: 'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
                },
                {
                    name: 'Xanh',
                    price: '3000',
                    img: 'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
                },
                {
                    name: 'Vàng',
                    price: '3000',
                    img: 'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
                },
            ],
            size: [
                "S", "M", "L", "XL"
            ],
            info: [
                {name: "Màn hình", value: "15.6inch HD"},
                {name: "Hãng sản xuất", value: "HP"},
                {name: "Hệ điều hành", value: "Windows"},
                {name: "Ổ cứng", value: "512GB SSD"},
                {name: "Ram", value: "4GB"},
                {name: "Vi xử lí", value: "Intel Core i3-1115G4"},
                {name: "Cân nặng", value: "1.7kg"},
            ],
            evaluate: [
                {
                    uId: 1,
                    time: "09:15",
                    date: "25/09/2022",
                    star: 5,
                    mess: "Tốt",
                    images: [{img: 'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},]
                },
                {
                    uId: 2,
                    time: "09:16",
                    date: "25/09/2022",
                    star: 5,
                    mess: "Chưa biết sài chưa biết sao",
                    images: [{img: 'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},]
                },
                {
                    uId: 3,
                    time: "09:17",
                    date: "21/09/2022",
                    star: 3,
                    mess: "Giao hàng lâu",
                    images: [{img: 'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},]
                },
                {
                    uId: 4,
                    time: "09:18",
                    date: "20/09/2022",
                    star: 4,
                    mess: "Tạm ổn",
                    images: [{img: 'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},]
                },
                {
                    uId: 5,
                    time: "09:19",
                    date: "01/09/2022",
                    star: 5,
                    mess: "hàng nét",
                    images: [{img: 'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},]
                },
                {
                    uId: 6,
                    time: "08:15",
                    date: "20/08/2022",
                    star: 1,
                    mess: "dỏm mọi người né",
                    images: [{img: 'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},]
                },
                {
                    uId: 7,
                    time: "07:15",
                    date: "26/09/2021",
                    star: 1,
                    mess: "kém chất lượng",
                    images: [{img: 'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},]
                },
            ]


        },
    ]
    const [group2, setGroup2] = useState("cod");
    const [product, setProduct] = useState([...sample]);
    const [show, setShow] = useState(false);


    const onChangeValue = (e) => {
        setGroup2(e.target.value);
    }


    return (

        <UserLayout>
            {show && <Modal closeModal={setShow}/>}
            <Helmet title='Thanh toán'>
                <div className="container py-8">
                    <div className="flex flex-row gap-8">
                        <div className="basis-2/3 flex flex-col gap-8">
                            <div className="rounded-[5px] shadow-md bg-white">
                                <div
                                    className="flex items-center justify-between p-3 bg-gradient-to-r from-[#EDF9FF] to-[#FDFEFF] rounded-t-md ">
                                    <div className="flex items-center gap-3">
                                        <Icon.UilMapMarker className="w-[24px] h-[24px] text-[#01ACFF]"/>
                                        <h5 className="text-base font-medium">Địa chỉ nhận hàng</h5>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Link to='/thay-doi-dia-chi' className="text-[#01ACFF] font-medium text-md">Thay
                                            đổi</Link>
                                        <Icon.UilAngleRight className="text-[#01ACFF] w-[20px] h-[20px]"/>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <p className="font-medium">Trần trọng nghĩa <span
                                        className="font-normal text-[#A5B4BE]">| 0245484874</span></p>
                                    <p className="text-[#A5B4BE]">103, dường số 4, khu phố 3, linh xuân, thủ đức</p>

                                </div>
                            </div>
                            <div className="rounded-[5px] shadow-md bg-white">
                                <div
                                    className="flex items-center justify-between p-3 bg-gradient-to-r from-[#EDF9FF] to-[#FDFEFF] rounded-t-md ">
                                    <div className="flex items-center gap-3">
                                        <Icon.UilTruck className="w-[24px] h-[24px] text-[#01ACFF]"/>
                                        <h5 className="text-base font-medium">Phương thức giao hàng</h5>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="flex flex-1 flex-wrap items-center gap-3 flex-row">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3">
                                                <input type="radio" id="radio1"
                                                       className="w-4 h-4 accent-primary text-primary"/>
                                                <label htmlFor="radio1" className="font-medium">
                                                    Giao hàng tiêu chuẩn
                                                </label>
                                            </div>
                                            <p className="ml-7 font-medium text-black-1 text-md">
                                                Dự kiến thứ 3, 27/12
                                            </p>
                                        </div>
                                        <div className="flex gap-2 items-center justify-end">
                                            <p className="text-primary font-semibold text-base">26.000</p>
                                            <Icon.UilInfoCircle className="text-[#A5B4BE]  w-[18px] h-[18px]"/>
                                        </div>
                                    </div>
                                    <div className="ml-7 mt-3">
                                        <fieldset id="group1">
                                            <div className="flex gap-3 mb-3">
                                                <input type="radio" id="radio2" name="group1"
                                                       className="w-4 h-4 mt-1 accent-primary"/>
                                                <div className="">
                                                    <label htmlFor="radio2" className="font-medium">
                                                        Từ thứ 2 - thứ 6 (8-18h)
                                                    </label>
                                                    <p className="font-medium text-md text-[#A5B4BE]">
                                                        Phù hợp với địa chỉ văn phòng / cơ quan
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-3">
                                                <input type="radio" id="radio3" name="group1"
                                                       className="w-4 h-4 mt-1 accent-primary"/>
                                                <div className="">
                                                    <label htmlFor="radio3" className="font-medium">
                                                        Cả tuần (trừ CN & ngày lễ)
                                                    </label>
                                                    <p className="font-medium text-md text-[#A5B4BE]">Phù hợp với địa
                                                        chỉ nhà riêng luôn có
                                                        người nhận. Giao hàng từ 8:00 - 18:00</p>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-[5px] shadow-md bg-white">
                                <div
                                    className="flex items-center justify-between p-3 bg-gradient-to-r from-[#EDF9FF] to-[#FDFEFF] rounded-t-md">
                                    <div className="flex items-center gap-4">
                                        <Icon.UilWallet className="w-[24px] h-[24px] text-[#01ACFF]"/>
                                        <h5 className="font-medium">Phương thức thanh toán</h5>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <fieldset id="group2">
                                        <label htmlFor="radio4"
                                               className={`flex p-2 rounded-[5px] transition-all duration-400 ${group2 !== 'cod' ? 'bg-[#F2F3F4]' : 'bg-white shadow-md'}`}>
                                            <input type="radio" checked={group2 === 'cod'} value="cod" id="radio4"
                                                   className="w-4 h-4 mt-1 accent-primary" name="group2"
                                                   onChange={onChangeValue}/>
                                            <div className="ml-2">
                                                <p className="font-medium">Tiền mặt (COD)</p>
                                                <p className="text-[#A5B4BE]">Phí thu hộ: Miễn phí</p>
                                            </div>
                                        </label>
                                        <label htmlFor="radio5"
                                               className={`flex mt-6 p-2 rounded-[5px] transition-all ${group2 !== 'shopio' ? 'bg-[#F2F3F4]' : 'bg-white shadow-md'}`}>
                                            <input type="radio" checked={group2 === 'shopio'} value="shopio"
                                                   id="radio5"
                                                   name="group2" className="w-4 h-4 mt-1 accent-primary"
                                                   onChange={onChangeValue}/>
                                            <div className="ml-2">
                                                <p className="font-medium">Ví ShopioPay</p>
                                                <p className="text-[#A5B4BE]">
                                                    Số dư trong ví ShopioPay phải có ít nhất 1.000đ để thanh toán
                                                </p>
                                            </div>
                                        </label>
                                    </fieldset>
                                    <div className="mt-8 text-center">
                                        <button onClick={() => setShow(true)}
                                                className="rounded-[5px] w-[40%] px-4 py-3 text-md font-bold bg-[#ECEDEE] text-[#3f4b53] hover:bg-[#F2F3F4] transition duration-400 active:bg-[#e7e8ea]">
                                            Thêm phương thức khác
                                        </button>
                                    </div>
                                    <div className="py-5 text-center mx-auto w-[30%]">
                                        <div className="flex items-center gap-5 justify-center">
                                            <img className="w-[50px]" src={visa} alt=""/>
                                            <img className="w-[50px]" src={mastercard} alt=""/>
                                            <img className="w-[50px]" src={jbc} alt=""/>
                                            <img className="w-[50px]" src={napas} alt=""/>
                                            <img className="w-[50px]" src={paypal} alt=""/>
                                            <img className="w-[50px]" src={zalopay} alt=""/>
                                            <img className="w-[50px]" src={momo} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/3 flex flex-col gap-8">
                            <div className="rounded-[5px] shadow-md bg-white">
                                <div
                                    className="flex items-center justify-between p-3 bg-gradient-to-r from-[#EDF9FF] to-[#FDFEFF] rounded-t-md ">
                                    <div className="flex items-center gap-3">
                                        <Icon.UilClipboardAlt className="w-[24px] h-[24px] text-[#01ACFF]"/>
                                        <h5 className="text-base font-medium">Thông tin đơn hàng</h5>
                                    </div>
                                </div>
                                <div className="p-5 border-b border-border">
                                    {product.map((item, index) => (
                                        <div key={index} className="">
                                            <p className="font-medium text-md mb-3">Shop: High School Sneaker</p>
                                            <div className="flex gap-3">
                                                <Link to={`/san-pham/${item.slug}`}
                                                      className="min-w-[70px] max-w-[70px] min-h-[70px] max-h-[70px] rounded bg-cover bg-center border border-[#f2f2f2]"
                                                      style={{backgroundImage: `url(${item.images[0].img})`}}>
                                                </Link>
                                                <div className="">
                                                    <Link to={`/san-pham/${item.slug}`}
                                                          className="text-md font-medium line-clamp-2 leading-5">
                                                        {item.name}
                                                    </Link>
                                                    <div className="flex justify-between items-end">
                                                        <div className="flex items-end gap-3">
                                                            <p className="text-base text-primary font-bold">
                                                                {formatCurrency(item.sell_price)}
                                                            </p>
                                                            <p className="text-sm italic text-black-1 font-bold line-through">
                                                                {formatCurrency(item.sell_price)}
                                                            </p>
                                                        </div>
                                                        <p className="text-primary-hover font-bold text-base">x1</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-3">
                                                <p className="font-medium text-md">
                                                    Xanh
                                                    <span className="mx-2">|</span>
                                                    15.6
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-5">
                                    <textarea id="message" rows="3" placeholder="Ghi chú cho Shop"
                                              className="block p-2.5 w-full text-md rounded-[5px] border border-border focus:outline-none"/>
                                </div>
                            </div>
                            <div className="rounded-[5px] shadow-md bg-white">
                                <div className="p-5">
                                    <div className="flex justify-between items-center pb-2">
                                        <p className="font-medium">Tiền hàng</p>
                                        <p className="text-lg font-bold text-[#3F4B53]">{formatCurrency(1769000)}</p>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-2 border-border">
                                        <p className="font-medium">Phí giao hàng</p>
                                        <p className="font-bold text-[#3F4B53]">{formatCurrency(26000)}</p>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                        <p className="font-medium">Tổng thanh toán</p>
                                        <p className="font-bold text-primary text-lg">{formatCurrency(17716000)}</p>
                                    </div>
                                    <button
                                        className="bg-primary rounded-[5px] px-10 py-3 text-white font-bold w-full hover:bg-primary-hover active:bg-primary transition duration-300 cursor-pointer">
                                        Đặt mua
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Helmet>
        </UserLayout>
    );
}

export default CheckOut;