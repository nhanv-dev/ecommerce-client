import React from 'react';
import visa from "../../../assets/img/visa.png";
import mastercard from "../../../assets/img/mastercard.png";
import jbc from "../../../assets/img/jcb.png";
import napas from "../../../assets/img/napas.png";
import paypal from "../../../assets/img/paypal.png";
import zalopay from "../../../assets/img/zalopay.png";
import momo from "../../../assets/img/momo.png";
import * as icon from "@iconscout/react-unicons";
import {Link} from "react-router-dom";
function Modal({closeModal}) {
    return (
        <div className="bg-[#E3E2E26F] bg-blend-overlay w-screen h-screen fixed z-50 top-0 flex items-center justify-center">
            <div className="bg-white p-5 w-[30%] h-auto rounded-md">
                <div className="flex items-center justify-between pb-3">
                    <p className="font-bold">Phương thức thanh toán khác </p>
                    <button onClick={()=> closeModal(false)}>X</button>
                </div>
                <div className="flex bg-[#F2F2F2] p-2 mb-2 rounded-md cursor-pointer">
                    <div className="basis-1/12">
                        <img className="w-[35px] h-[35px]" src={paypal} alt=""/>
                    </div>
                    <div className="ml-2">
                        <p className="font-medium">Ví ShopioPay</p>
                        <p>Số dư: 0 đồng</p>
                    </div>
                </div>
                <div className="bg-[#F2F2F2] p-2 rounded-md cursor-pointer">
                    <div className="flex">
                        <icon.UilWallet className="w-[25px] h-[25px] mr-2 text-[#979DA1]"/>
                        <p className="font-medium">Ví điện tử khác</p>
                    </div>
                    <div className="flex bg-white p-2 rounded-md ml-7 my-2 justify-between ">
                        <div className=" flex ">
                            <img className="w-[25px] h-[25px] mr-1" src={momo} alt=""/>
                            <p>Ví Momo</p>
                        </div>
                        <div className="ml-2 flex justify-between">
                            <a className="text-[#01ACFF]" href="">Liên kết ngay</a>
                        </div>

                    </div>
                    <div className="flex bg-white p-2 rounded-md ml-7 my-2 justify-between ">
                        <div className=" flex ">
                            <img className="w-[25px] h-[25px] mr-1" src={zalopay} alt=""/>
                            <p>Ví ZaloPay</p>
                        </div>
                        <div className="ml-2 flex justify-between">
                            <a className="text-[#01ACFF]" href="">Liên kết ngay</a>
                        </div>

                    </div>
                </div>
                <div className="bg-[#F2F2F2] p-2 mt-2 rounded-md hover:bg-white active:bg-[#F2F2F2] cursor-pointer">
                    <div className="flex">
                        <icon.UilCreditCard className="w-[25px] h-[25px] mr-2 text-[#979DA1]"/>
                        <p className="font-medium">Thẻ tín dụng/Ghi nợ/ATM</p>
                    </div>
                    <div>
                        <div className="flex ml-8">
                            <img className="w-[35px] h-[25px] mr-1" src={visa} alt=""/>
                            <img className="w-[35px] h-[25px] mr-1" src={mastercard} alt=""/>
                            <img className="w-[35px] h-[25px] mr-1" src={jbc} alt=""/>
                            <img className="w-[35px] h-[25px] mr-1" src={napas} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;