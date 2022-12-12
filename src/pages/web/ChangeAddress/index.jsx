import React, {useEffect, useState} from 'react';
import * as icon from "@iconscout/react-unicons";
import {UserLayout} from "../../../components/common/Layouts";
import Helmet from "../../../components/web/Helmet";
import {Link} from "react-router-dom";

function ChangeAddress() {
    const userEX = {
        uId: 1,
        name: "Nguyễn Văn To",
        ava: "https://i.pinimg.com/736x/ef/b4/56/efb4563befb0ae1bed74f004785f3f0f.jpg",
        phone: "035648799",
        addresses: [
            {
                id: 1,
                address: "103, đường số 4, ",
                ward: "Phường Linh Xuân, ",
                district: "Thủ Đức, ",
                city: "Thành Phố Hồ Chí Minh",
                default: true
            },
            {
                id: 2,
                address: "103, đường số 4, ",
                ward: "Phường Linh Xuân, ",
                district: "Thủ Đức, ",
                city: "Thành Phố Hồ Chí Minh",
            },
        ]
    }

    const [user, setUser] = useState({...userEX})
    const [check, setCheck] = useState(1)
    const onChangeValue = (e) => {
        setCheck(e.target.value)
    }


    // }    // const deleteE = (id)=>{
    //     //     console.log(id)
    //     //     // if(check=="notDefault"){
    //     //         let u = user.addresses.filter(el=> el.id !==id )
    //     //         setUsers(...u);
    //     //         console.log(u)
    //     //     // }


    return (
        <UserLayout>
            <Helmet title={'Thay đổi địa chỉ - Shopio'}>
                <div className="container py-8">
                    <div className="bg-white mb-3 rounded-[5px] shadow-md">
                        <div
                            className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-[#EDF9FF] to-[#FDFEFF]">
                            <div className="flex items-center gap-3">
                                <icon.UilLocationPoint className="w-[24px] h-[24px] text-[#01ACFF]"/>
                                <h1 className="text-base font-medium">Địa chỉ nhận hàng</h1>
                            </div>
                        </div>
                        <div className="p-5">
                            {user?.addresses?.map((item, index) => (
                                <div key={index} className="flex gap-3 items-center">
                                    <div className="text-primary">
                                        <input type="radio" id="radio1" checked={check === item.id} value={item.id}
                                               name="addresses" className="w-4 h-4 accent-primary"
                                               onChange={e => setCheck(e.target.value)}/>
                                    </div>
                                    <div
                                        className="flex-1 flex justify-between items-center py-3 border-b border-border">
                                        <div className="bg-white">
                                            <p className="font-medium text-md">
                                                {user.name}
                                                <span className="text-[#A5B4BE]"> | {user.phone}</span>
                                            </p>
                                            <p className="font-medium text-md text-[#A5B4BE] pb-0.5">
                                                {item.address + item.ward + item.district + item.city}
                                            </p>
                                            <p className="text-[12px] font-semibold uppercase text-[#F66E23]">
                                                {item.default && 'Địa chỉ mặc định'}
                                            </p>
                                        </div>
                                        <div className="font-medium text-md">
                                            <Link to={check === 'notDefault' || item.default ? `/them-dia-chi` : ''}
                                                  className="text-[#01ACFF]">
                                                {check === 'notDefault' ? 'Chỉnh sửa' : '' || item.default ? 'Chỉnh sửa' : 'Xóa'}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <Link to={`/them-dia-chi/`} className="flex pt-3 cursor-pointer">
                                <icon.UilPlusSquare className="w-[24px] h-[24px] text-[#999999]"/>
                                <p className="ml-1">Thêm địa chỉ nhận hàng</p>
                            </Link>
                            <Link to={`/thanh-toan`}>
                                <button
                                    className="rounded-md w-[20%] mt-5 px-4 py-2 font-bold bg-primary text-white hover:bg-primary-hover transition duration-400 active:bg-primary">
                                    Tiếp tục
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Helmet>
        </UserLayout>
    );
}

export default ChangeAddress;