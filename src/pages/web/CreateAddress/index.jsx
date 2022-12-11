import React, {useEffect, useState} from 'react';
import Helmet from "../../../components/web/Helmet";
import * as icon from "@iconscout/react-unicons";
import {BuyerLayout} from "../../../components/common/Layouts";
import {Link} from "react-router-dom";
import axios from "axios";
function CreateAddress() {
    const [city, setCity] = useState([]);
    const [id, setId] = useState();
    const [dis, setDis] = useState([]);
    const [ward, setWard] = useState([]);
    const [openCity, setOpenCity] = useState(false);
    const [openDis, setOpenDis] = useState(false);
    const [openWard, setOpenWard] = useState(false);
    const[selectCity, setSelectCity] = useState("");
    const[selectDis, setSelectDis] = useState("");
    const[selectWard, setSelectWard] = useState("");
    useEffect(()=>{
        axios.get('https://provinces.open-api.vn/api/?depth=1')
            .then((response) => {
               setCity(response.data);
            })
        },[]);
    useEffect(()=>{
         axios.get(`https://provinces.open-api.vn/api/p/${id}?depth=2`)
             .then((response)=>{
                 setDis(response.data.districts)
                 console.log(response.data.districts)
             })
    },[id]);
    useEffect(()=>{
        axios.get(`https://provinces.open-api.vn/api/d/${id}?depth=2`)
            .then((response)=>{
                setWard(response.data.wards)
                console.log(response.data.wards)
            })
    },[id])

    return (
        <BuyerLayout>
            <Helmet title={'Thêm địa chỉ'}>
                <div className="pb-5">
                        <div className="container bg-white pr-20 shadow-sm rounded-md  flex justify-center">
                            <div className="flex basis-1/2 justify-center">
                                <form className="px-8 pt-6 pb-2 mb-4 h-50 w-full">
                                    <div className="mb-4 flex items-center ">
                                        <label className="mt-1 text-[12px] basis-1/2 w-[60%] text-right font-medium mb-2 mr-2" htmlFor="username">
                                            HỌ TÊN NGƯỜI NHẬN
                                        </label>
                                        <input
                                            className="shadow bg-[#FAFAFA] focus:outline-[#FAFAFA] w-full text-md appearance-none border border-border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="username" type="text" placeholder="Họ tên người nhận"/>
                                    </div>
                                    <div className="mb-4 flex items-center ">
                                        <label className="mt-1 text-[12px] basis-1/2 text-right font-medium mb-2 mr-2" htmlFor="phone">
                                            SỐ ĐIỆN THOẠI
                                        </label>
                                        <input
                                            className="shadow bg-[#FAFAFA] focus:outline-[#FAFAFA] w-full text-md appearance-none border border-border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="phone" type="text"  placeholder="Số điện thoại liên hệ khi giao hàng"/>
                                    </div>
                                    <div className="form-group text-left flex items-center w-full mb-4 relative ">
                                        <label className="mt-1 text-[12px] basis-1/2 text-right font-medium mb-2 mr-1.5">
                                            CHỌN TỈNH THÀNH
                                        </label>
                                        <div className="shadow w-full">
                                            <div className="flex cursor-pointer">
                                                <input
                                                    className="shadow cursor-pointer w-full text-md bg-[#FAFAFA] text-[#6B6A6A] border border-border focus:outline-[#FAFAFA]   rounded py-2 px-3 leading-tight"
                                                    type="text"  value={selectCity}  placeholder="Chọn Tỉnh thành" onClick={()=>{setOpenCity(!openCity); setOpenDis(false); setOpenWard(false)}}/>
                                                <icon.UilAngleDown className={`inline absolute top-1.5 right-0 transition duration-500 ${openCity && 'rotate-180'}`} onClick={()=>{setOpenCity(!openCity); setOpenDis(false); setOpenWard(false)}}/>
                                            </div>
                                            <ul className={`bg-white mt-2 absolute shadow w-[66%] overflow-y-auto z-50 cursor-pointer transition duration-500 ${openCity ? 'max-h-40 -translate-y-1.5 rounded-md': 'max-h-0'}`}>
                                                {city.map((item)=>(
                                                    <li className="hover:bg-[#ECF9F9] py-1 px-1" onClick={()=>{
                                                        if(item.name !== selectCity){
                                                            setSelectCity(item.name);
                                                            setId(item.code);
                                                            setOpenCity(false);
                                                        }
                                                    }}>{item.name}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="form-group text-left flex w-full items-center mb-4 relative ">
                                        <label className="mt-1 text-[12px] basis-1/2 text-right font-medium mb-2 mr-1.5">
                                            CHỌN QUẬN HUYỆN
                                        </label>
                                        <div className="shadow w-full">
                                            <div className="flex  relative">
                                                <input
                                                    className="shadow cursor-pointer w-full inline text-[#6B6A6A] text-md appearance-none border border-border rounded py-2 px-3 text-gray-700 leading-tight bg-[#FAFAFA] focus:outline-[#FAFAFA] focus:shadow-outline"
                                                    id="phone" type="text" value={selectDis}  placeholder="Chọn Quận/Huyện" onClick={()=>{setOpenCity(false); setOpenDis(!openDis); setOpenWard(false)}}/>
                                                <icon.UilAngleDown className={`inline absolute top-1.5 right-0 transition duration-500 ${openDis && 'rotate-180'}`} onClick={()=>{setOpenCity(false); setOpenDis(!openDis); setOpenWard(false)}}/>
                                            </div>
                                            <ul className={`bg-white mt-2 absolute shadow w-[66%] overflow-y-auto z-50 cursor-pointer transition duration-500 ${openDis ? 'max-h-40 -translate-y-1.5 rounded-md': 'max-h-0'}`}>
                                                {dis.map((d)=>(
                                                    <li className="hover:bg-[#ECF9F9] py-1 px-1" onClick={()=>{
                                                        if(d.name !== selectDis){
                                                            setSelectDis(d.name);
                                                            setId(d.code);
                                                            setOpenDis(false);
                                                        }
                                                    }}>{d.name}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="form-group text-left flex w-full items-center mb-4 relative ">
                                        <label className="text-[12px] basis-1/2 text-right font-medium mt-1 mb-2 mr-1.5">
                                            CHỌN PHƯỜNG/XÃ
                                        </label>
                                        <div className="shadow w-full">
                                            <div className="flex  relative">
                                                <input
                                                    className="shadow cursor-pointer w-full inline text-[#6B6A6A] text-md appearance-none border border-border rounded py-2 px-3 text-gray-700 leading-tight bg-[#FAFAFA] focus:outline-[#FAFAFA]  focus:shadow-outline"
                                                    id="phone" type="text" value={selectWard}  placeholder="Chọn Phường/Xã" onClick={()=>{setOpenWard(false); setOpenDis(false); setOpenWard(!openWard)}}/>
                                                <icon.UilAngleDown className={`inline absolute top-1.5 right-0  transition duration-500 ${openWard && 'rotate-180'}`} onClick={()=>{setOpenWard(false); setOpenDis(false); setOpenWard(!openWard)}}/>
                                            </div>
                                            <ul className={`bg-white mt-2  absolute shadow w-[66%] overflow-y-auto z-50 cursor-pointer transition duration-500 ${openWard ? 'max-h-40 -translate-y-1.5 rounded-md': 'max-h-0'}`}>
                                                {ward.map((item)=>(
                                                    <li className="hover:bg-[#ECF9F9] py-1 px-1" onClick={()=>{
                                                        if(item.name !== selectWard){
                                                            setSelectWard(item.name);
                                                            setOpenWard(false);
                                                        }
                                                    }}>{item.name}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mb-4 flex items-center ">
                                        <label className="mt-1 text-[12px] basis-1/2 text-right font-medium mb-2 mr-2" htmlFor="phone">
                                            ĐỊA CHỈ
                                        </label>
                                        <input
                                            className="shadow bg-[#FAFAFA] focus:outline-[#FAFAFA] w-full text-md appearance-none border border-border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="phone" type="text"  placeholder="Nhập số nhà, tên đường"/>
                                    </div>
                                    <div className="text-left flex">
                                        <label className="text-[12px] basis-1/2 mt-2 text-right font-medium mb-2 mr-1.5" htmlFor="email">
                                            EMAIL <span className="text-[#8292B6]">(không bắt buộc)</span>
                                        </label>
                                        <div className="w-full">
                                            <input
                                                className="shadow bg-[#FAFAFA] focus:outline-[#FAFAFA] w-full text-md appearance-none border border-border rounded py-2 px-3 text-gray-700 leading-tight"
                                                id="email" type="text" placeholder="Nhập để nhận thông tin đơn hàng qua email"/>
                                            <div className="py-3 flex items-center">
                                                <input className="mt-0.5 mr-2 w-[18px] h-[18px] accent-primary" type="checkbox" id="default"/>
                                                <label  htmlFor="default">
                                                    Đặc làm mặc định
                                                </label>

                                            </div>
                                            <div >
                                                <Link className="flex gap-2" to={`/thay-doi-dia-chi/`}>
                                                <button className="px-8 py-2 bg-[#888A8E] basis-1/2 font-medium text-white rounded-md transition duration-400 hover:bg-[#999999] active:bg-[#888A8E]">Hủy</button>
                                                <button className="px-8 py-2 bg-primary basis-1/2 font-medium text-white rounded-md transition duration-400 hover:bg-primary-hover active:bg-primary">Tiếp tục</button>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>

                </div>
            </Helmet>
        </BuyerLayout>
    );
}

export default CreateAddress;