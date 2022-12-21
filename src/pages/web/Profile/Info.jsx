import React, {useEffect, useState} from 'react';
import DefaultAvatar from "../../../assets/img/default-avatar.png";
import * as Icon from "@iconscout/react-unicons"
import facebook from "../../../assets/img/facebook.png"
import google from "../../../assets/img/google.png"
import {useSelector} from "react-redux";
function Info() {
    const [gender , setGender] = useState("feMale")
    const user = useSelector(state => state.user);
    const [day,setDay] = useState([])
    const [month,setMonth] = useState([])
    const [year,setYear] = useState([])
    let d = [];
    let m = [];
    let y =[];
    useEffect(()=>{
        let date = new Date()
        for(let i=1; i<=31;i++){
            d.push(i);

        }

        for(let i=1; i<=12;i++){
            m.push(i);
        }
        for(let i=date.getFullYear()-120; i<=date.getFullYear();i++){
            y.push(i);
        }
        setDay(d)
        setMonth(m)
        setYear(y)
    },[])

    const onChangeValue = (e)=>{;
        setGender(e.target.value)
    }

    return (
        <>
            <div className="flex-1">
                <div className="pb-6">
                    <p>Thông tin tài khoản</p>
                </div>
                <div className="rounded-[5px] flex bg-white p-4">
                    <div className="border-r border-border basis-7/12 p-2">
                        <span className="mb-4">Thông tin cá nhân</span>
                        <div className="mt-4">
                            <form action="">
                                <div className="flex items-center">
                                    <div className="relative bg-cover w-[100px] h-[100px] mr-10 rounded-full border-2 border-primary"
                                         style={{backgroundImage: `url(${DefaultAvatar})`}}>
                                        <div className="bg-[#7E7E80] text-center absolute bottom-1 right-1 rounded-full w-[16px] h-[16px]">
                                            <Icon.UilPen className="text-white mt-0.5 ml-0.5 w-[12px] h-[12px]"/>
                                        </div>
                                    </div>
                                    <div className="basis-2/3">
                                        <label className="block mb-10" htmlFor="name">
                                            Họ và tên
                                            <input id="name" className="outline-none p-1 text-md ml-[85px] rounded-[5px] border border-border" value={user.info?.fullName} type="text"/>
                                        </label>
                                        <label htmlFor="nickName">
                                            Nickname
                                            <input id="nickName" className="outline-none p-1 text-md ml-20 rounded-[5px] border border-border" placeholder="Thêm nickname" type="text"/>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex items-center my-10 gap-4">
                                    <label className="basis-1/4" htmlFor="">Ngày sinh</label>
                                    <div className="basis-3/4">
                                        <select className="w-[25%] text-center border border-border mr-3 p-1 rounded-[5px]" name="" id="">
                                            {day.map((d)=>(
                                                <option className="text-left" value="">{d}</option>
                                            ))}
                                        </select>
                                        <select className="w-[25%] text-center border border-border mr-3 p-1 rounded-[5px]" name="" id="">
                                            {month.map((m)=>(
                                                <option className="text-left" value="">{m}</option>
                                            ))}
                                        </select>
                                        <select className="w-[25%] text-center border border-border p-1 rounded-[5px]" name="" id="">
                                            {year.map((y)=>(
                                                <option value="">{y}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="flex items-center my-6 gap-4">
                                    <label className="basis-1/4" htmlFor="">Giới tính</label>
                                    <div className="flex items-center basis-3/4">
                                        <div className="flex items-center">
                                            <input className="mr-1 w-[20px]  h-[20px]" value="feMale" checked={gender==='feMale'}  type="radio" name="gioiTinh" id="feMale" onChange={onChangeValue}/>
                                            <label className="mr-3" htmlFor="feMale">
                                                Nam
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input className="mr-1 w-[20px] h-[20px]" value="male" checked={gender==='male'} type="radio" name="gioiTinh" id="male" onChange={onChangeValue}/>
                                            <label className="mr-3" htmlFor="male">
                                                Nữ
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input className="mr-1 w-[20px] h-[20px]" value="other" checked={gender==='other'} type="radio" name="gioiTinh" id="other" onChange={onChangeValue}/>
                                            <label className="" htmlFor="other">
                                                Khác
                                            </label>
                                        </div>

                                    </div>
                                </div>
                                <div className="text-center mt-10">
                                    <button className="bg-[#1ea3fc] font-bold text-md text-white rounded-[8px] px-8 py-2">Lưu thay đổi</button>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className="basis-5/12 ml-5 p-2">
                        <div className="w-[100%]">
                            <p className="text-[#64646D]">Số điện thoại và Email</p>
                            <div className="w-full border-b border-border flex items-center justify-between">
                                <div className="flex basis-2/3 items-center">
                                    <Icon.UilPhone className="text-[#A0A0A0]"/>
                                    <div className="ml-2 mt-2 py-2">
                                        <p className="block text-md">Số điện thoại</p>
                                        <span className="text-[#808089] text-md">0257889955</span>
                                    </div>
                                </div>
                                <button className="bg-white text-md text-[#1ea3fc] border border-[#1ea3fc] rounded-[5px] px-3 py-1">Cập nhật</button>
                            </div>
                            <div className="w-full flex items-center mb-2 justify-between">
                                <div className="flex basis-2/3 items-center">
                                    <Icon.UilEnvelope className="text-[#A0A0A0]"/>
                                    <div className="ml-2 mt-2 pb-3">
                                        <p className="block text-md">Địa chỉ email</p>
                                        <span className="text-[#808089] text-md">{user.info?.email ? user.info?.email: 'Thêm địa chỉ email'}</span>
                                    </div>
                                </div>
                                <button className="bg-white text-md text-[#1ea3fc] border border-[#1ea3fc] rounded-[5px] px-3 py-1">Cập nhật</button>
                            </div>
                        </div>
                        <div className="my-4">
                            <p className="text-[#64646D]">Bảo mật</p>
                            <div className="w-full border-b border-border flex items-center justify-between">
                                <div className="flex basis-2/3 items-center">
                                    <Icon.UilLock className="text-[#A0A0A0]"/>
                                    <p className="block text-md ml-2 mt-2 py-3">Đổi mật khẩu</p>
                                </div>
                                <button className="bg-white text-md text-[#1ea3fc] border border-[#1ea3fc] rounded-[5px] px-3 py-1">Cập nhật</button>
                            </div>
                            <div className="w-full flex items-center justify-between">
                                <div className="flex basis-2/3 items-center">
                                    <Icon.UilShieldCheck  className="text-[#A0A0A0]"/>
                                    <p className="block text-md ml-2 py-3">Thiết lập mã PIN</p>
                                </div>
                                <button className="bg-white text-md text-[#1ea3fc] border border-[#1ea3fc] rounded-[5px] px-3 py-1">Thiết lập</button>
                            </div>
                        </div>
                        <div className="my-4">
                            <p className="text-[#64646D]">Liên kết mạng xã hội</p>
                            <div className="w-full border-b border-border flex items-center justify-between">
                                <div className="flex basis-2/3 items-center">
                                    <img className="w-[20px] h-[20px]" src={facebook} alt=""/>
                                    <p className="block text-md ml-2 py-3">Facebook</p>
                                </div>
                                <button className="bg-white text-md text-[#1ea3fc] border border-[#1ea3fc] rounded-[5px] px-3 py-1">Liên kết</button>
                            </div>
                            <div className="w-full flex items-center justify-between">
                                <div className="flex basis-2/3 items-center">
                                    <img className="w-[20px] h-[20px]" src={google} alt=""/>
                                    <p className="block text-md ml-2 py-3">Google</p>
                                </div>
                                <button className="bg-white text-md text-[#1ea3fc] border border-[#1ea3fc] rounded-[5px] px-3 py-1">Liên kết</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Info;