import React, {useEffect, useState} from 'react';
import {BuyerLayout} from "../../../components/common/Layouts";
import Helmet from "../../../components/web/Helmet";
import * as icon from '@iconscout/react-unicons';
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
                { img:'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},
                { img:'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},
                { img:'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},
                { img:'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'}
            ],

            color: [
                {name: 'Đỏ', price: '3000', img:'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},
                {name: 'Xanh', price: '3000', img:'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},
                {name: 'Vàng', price: '3000', img:'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},
            ],
            size:[
                "S","M","L","XL"
            ],
            info:[
                {name:"Màn hình", value:"15.6inch HD"},
                {name:"Hãng sản xuất", value:"HP"},
                {name:"Hệ điều hành", value:"Windows"},
                {name:"Ổ cứng", value:"512GB SSD"},
                {name:"Ram", value:"4GB"},
                {name:"Vi xử lí", value:"Intel Core i3-1115G4"},
                {name:"Cân nặng", value:"1.7kg"},
            ],
            evaluate:[
                {uId: 1,time: "09:15", date: "25/09/2022", star:5,mess:"Tốt", images:[{img:'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},]},
                {uId: 2,time: "09:16", date: "25/09/2022", star:5,mess:"Chưa biết sài chưa biết sao", images:[{img:'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},]},
                {uId: 3,time: "09:17", date: "21/09/2022", star:3,mess:"Giao hàng lâu", images:[{img:'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},]},
                {uId: 4,time: "09:18", date: "20/09/2022", star:4,mess:"Tạm ổn", images:[{img:'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},]},
                {uId: 5,time: "09:19", date: "01/09/2022", star:5,mess:"hàng nét", images:[{img:'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},]},
                {uId: 6,time: "08:15", date: "20/08/2022", star:1,mess:"dỏm mọi người né", images:[{img:'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},]},
                {uId: 7,time: "07:15", date: "26/09/2021", star:1,mess:"kém chất lượng", images:[{img:'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},]},
            ]


        },
    ]
    const [group2, setGroup2] = useState(["cod"]);
const[product, setProduct] = useState([...sample]);
const [show, setShow] = useState(false);


const onChangeValue=(e)=>{
    setGroup2(e.target.value);
    console.log(e.target.value);

}


    return (

        <BuyerLayout>
            {show && <Modal closeModal={setShow}/>}
            <Helmet title='Thanh toán'>

                <div className="container flex flex-row pb-5">

                    <div className="basis-2/3 mr-3">
                        <div className="rounded-md mb-3 shadow-[2px_1px_8px_-3px_rgba(0,0,0,0.6)]">
                            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[#EDF9FF] to-[#FDFEFF] rounded-t-md ">
                               <div className="flex">
                                   <icon.UilMapMarker className="w-[25px] h-[25px] text-[#01ACFF]"/>
                                   <h1 className="pl-2 font-medium">Địa chỉ nhận hàng</h1>
                               </div>
                                <div className="flex items-center">
                                <Link to={`/thay-doi-dia-chi/`} className="text-[#01ACFF]">Thay đổi </Link>
                                    <icon.UilAngleRight className="text-[#01ACFF] w-[20px] h-[20px]"/>
                                </div>
                            </div>
                           <div className="bg-white p-3 rounded-b-md">
                               <p className="font-medium">Trần trọng nghĩa  <span className="font-normal text-[#A5B4BE]">| 0245484874</span>  </p>
                               <p className="text-[#A5B4BE]">103, dường số 4, khu phố 3, linh xuân, thủ đức</p>

                           </div>
                        </div>
                        <div className="mb-3 shadow-[2px_1px_8px_-3px_rgba(0,0,0,0.6)]">
                            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[#EDF9FF] to-[#FDFEFF] rounded-t-md ">
                                <div className="flex">
                                    <icon.UilTruck className="w-[25px] h-[25px] text-[#01ACFF]"/>
                                    <h1 className="pl-2 font-medium">Phương thức giao hàng</h1>
                                </div>
                            </div>
                            <div className="bg-white p-3 rounded-b-md">

                                <div className="flex flex-row">
                                    <div className="basis-0 text-primary"> <input type="radio" id="radio1" className="w-4 h-4 mt-1 accent-primary"/></div>

                                    <div className="flex items-center justify-between basis-full">

                                        <div className="ml-2">
                                            <label  htmlFor="radio1" className="font-medium">Giao hàng tiêu chuẩn</label>
                                            <p>Dự kiến thứ 3, 27/12</p>
                                        </div>
                                        <div className="flex items-center text-right">
                                            <p className="text-primary font-medium">26.000</p>
                                            <icon.UilInfoCircle className="ml-1 text-[#A5B4BE]  w-[19px] h-[19px]"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-5">
                                    <fieldset id="group1">
                                    <div className="flex mt-3">
                                        <input type="radio"  id="radio2" className="w-4 h-4 mt-1 accent-primary" name="group1"/>
                                        <div className="ml-2">
                                            <label  htmlFor="radio2" className="font-medium">Từ thứ 2 - thứ 6 (8-18h)</label>
                                            <p className="text-[#A5B4BE]">Phù hợp với địa chỉ văn phòng/cơ quan</p>
                                        </div>
                                    </div>
                                    <div className="flex mt-3">
                                        <input type="radio" id="radio3" className="w-4 h-4 mt-1 accent-primary" name="group1"/>
                                        <div className="ml-2">
                                            <label  htmlFor="radio3" className="font-medium">Cả tuần (trừ CN & ngày lễ)</label>
                                            <p className="text-[#A5B4BE]">Phù hợp với địa chỉ nhà riêng luôn có người nhận. Giao hàng từ 8:00 - 18:00</p>
                                        </div>
                                    </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-[2px_1px_8px_-3px_rgba(0,0,0,0.6)]">
                            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[#EDF9FF] to-[#FDFEFF] rounded-t-md ">
                                <div className="flex">
                                    <icon.UilWallet className="w-[25px] h-[25px] text-[#01ACFF]"/>
                                    <h1 className="pl-2 font-medium">Phương thức thanh toán</h1>
                                </div>
                            </div>
                            <div className="bg-white p-3 rounded-b-md">

                                <div className="mx-5">
                                    <fieldset id="group2">
                                        <div className={`flex mt-3 p-2 rounded-md transition-all duration-400 ${group2 != 'cod' ? 'bg-[#F2F3F4]' : 'bg-white shadow-[0px_1px_25px_-4px_rgba(0,0,0,0.6)]'}`}>
                                            <input type="radio" checked={group2 == "cod"} value="cod" id="radio4" className="w-4 h-4 mt-1 accent-primary" name="group2" onChange={onChangeValue}/>
                                            <div className="ml-2">
                                                <label  htmlFor="radio4" className="font-medium">Tiền mặt (COD)</label>
                                                <p className="text-[#A5B4BE]">Phí thu hộ: Miễn phí</p>
                                            </div>
                                        </div>
                                        <div className={`flex mt-3 p-2 rounded-md transition-all duration-400 ${group2 != 'shopio' ? 'bg-[#F2F3F4]' : 'bg-white shadow-[0px_1px_25px_-4px_rgba(0,0,0,0.6)]'}`}>
                                            <input type="radio" checked={group2 == "shopio"} value="shopio" id="radio5" className="w-4 h-4 mt-1 accent-primary" name="group2" onChange={onChangeValue}/>
                                            <div className="ml-2">
                                                <label  htmlFor="radio5" className="font-medium">Ví ShopioPay</label>
                                                <p className="text-[#A5B4BE]">Số dư trong ví ShopioPay phải có ít nhất 1.000đ để thanh toán</p>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="mt-7 text-center">

                                    <button className="rounded-md w-[40%] px-4 py-3 font-bold bg-[#ECEDEE] text-[#3f4b53] hover:bg-[#F2F3F4] transition duration-400 active:bg-[#e7e8ea]" onClick={()=> setShow(true)}>Thêm phương thức khác</button>

                                </div>
                                <div className="py-4 text-center mx-auto my-0 w-[30%]">
                                    <div className="flex justify-around">
                                        <img className="w-[30px]" src={visa} alt=""/>
                                        <img className="w-[30px]" src={mastercard} alt=""/>
                                        <img className="w-[30px]" src={jbc} alt=""/>
                                        <img className="w-[30px]" src={napas} alt=""/>
                                        <img className="w-[30px]" src={paypal} alt=""/>
                                        <img className="w-[30px]" src={zalopay} alt=""/>
                                        <img className="w-[30px]" src={momo} alt=""/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>






                    <div className="basis-1/3">

                            <div className="rounded-md mb-3 shadow-[2px_1px_8px_-3px_rgba(0,0,0,0.6)]">
                                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[#EDF9FF] to-[#FDFEFF] rounded-t-md ">
                                    <div className="flex">
                                        <icon.UilTicket className="w-[25px] h-[25px] text-[#01ACFF]"/>
                                        <h1 className="pl-2 font-medium">Mã ưu đãi Shopio (1)</h1>
                                    </div>
                                    <div className="flex items-center">
                                        <a href="" className="text-[#01ACFF]">Chọn/nhập mã khác </a>
                                    </div>
                                </div>
                                <div className="bg-white p-3 rounded-b-md">
                                    <div className="flex flex-wrap">
                                        <div className="bg-white shadow-[2px_1px_10px_-3px_rgba(0,0,0,0.6)] items-center justify-between flex basis-5/12 mr-2 mb-2 p-2 rounded-md ">
                                            <div className="flex w-full flex-col after:w-[1px] h-[100%] border-dashed border-r-2 border-[#cfd2d4] right-0 top-0">
                                                <span className="text-[#009966] font-bold ">Freeship 5K</span>
                                                <span className="text-md font-bold">-5.000đ</span>
                                            </div>
                                            <div className="basis-1/3">

                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>
                        <div className="rounded-md mb-3 shadow-[2px_1px_8px_-3px_rgba(0,0,0,0.6)]">
                            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[#EDF9FF] to-[#FDFEFF] rounded-t-md ">
                                <div className="flex">
                                    <icon.UilClipboardAlt className="w-[25px] h-[25px] text-[#01ACFF]"/>
                                    <h1 className="pl-2 font-medium">Thông tin đơn hàng</h1>
                                </div>
                            </div>
                            <div className="bg-white p-3 border-b border-border">
                                {product.map((item)=>(

                                <div className="">
                                    <p>Bán bởi shop: nghia</p>
                                    <div className="flex">
                                        <div className="basis-1/4">
                                            <img className="w-[50px] h-[50px]" src={item.images[0].img} alt=""/>
                                        </div>
                                        <div className="ml-2 ">
                                            <p className="text-ellipsis font-medium line-clamp-2 overflow-hidden">{item.name}</p>
                                            <div className="flex justify-between">
                                                <p className="text-primary font-medium">{formatCurrency(item.sell_price)} <span className="text-base italic text-[#efefef] line-through">{formatCurrency(item.sell_price)}</span></p>
                                                <span>x1</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="py-3 border-b border-[#E3E3E6]">
                                        <p>Xanh <span>| 15.6</span></p>
                                    </div>
                                    <div className="flex pt-3 items-center justify-between">
                                        <div className=" flex">
                                            <icon.UilTicket className="w-[25px] h-[25px] text-[#01ACFF]"/>
                                            <p className="pl-2 font-medium">
                                                Mã giảm giá của Shop
                                            </p>
                                        </div>
                                        <div className="flex items-center">
                                            <a href="" className="text-[#01ACFF]">Chọn/nhập mã</a>
                                        </div>
                                    </div>
                                </div>
                                ))}

                            </div>
                            <div className="bg-white text-center p-3 rounded-b-md">
                                <textarea id="message" rows="3" className="block p-2.5 w-full text-md rounded-md border border-border focus:outline-none" placeholder="Ghi chú cho Shop"></textarea>
                            </div>
                        </div>
                        <div className="bg-white text-center p-3 shadow-[2px_1px_8px_-3px_rgba(0,0,0,0.6)]">
                            <div className="flex justify-between pb-2 items-center">
                                <p>Tiền hàng</p>
                                <p className="font-bold text-[#3F4B53]">{formatCurrency(1769000)}</p>
                            </div>
                            <div className="flex justify-between items-center border-b pb-2 border-border">
                                <p>Phí giao hàng</p>
                                <p className="font-bold text-[#3F4B53]">{formatCurrency(26000)}</p>
                            </div>
                            <div className="flex justify-between items-center py-3">
                                <p>Tổng thanh toán</p>
                                <p className="font-bold text-primary text-lg">{formatCurrency(17716000)}</p>
                            </div>
                            <button className="bg-primary rounded-md px-10 py-3 text-white font-bold w-full hover:bg-primary-hover active:bg-primary transition duration-300 cursor-pointer">Đặt mua</button>
                        </div>

                    </div>

                </div>
            </Helmet>
        </BuyerLayout>
    );
}

export default CheckOut;