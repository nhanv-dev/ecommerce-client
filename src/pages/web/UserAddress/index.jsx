import React, {useEffect, useState} from 'react';
import * as Icon from "@iconscout/react-unicons";
import {UserLayout} from "../../../components/common/Layouts";
import Helmet from "../../../components/web/Helmet";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import UserSidebar from "../../../components/web/UserSidebar";
import {protectedRequest} from "../../../utils/requestMethods";
import CreateAddress from "../CreatingAddress";
import {toast} from "react-toastify";

function UserAddress() {
    const user = useSelector(state => state.user);
    const [show, setShow] = useState(false);
    const [addresses, setAddresses] = useState([]);

    useEffect(() => {
        protectedRequest().get(`/users/addresses`).then(res => {
            console.log(res)
            setAddresses(res.data.addresses)
        }).catch(err => {
            setAddresses([])
        })
    }, [user])

    const addNewAddress = async (payload) => {

        protectedRequest().post("/users/addresses", {...payload}).then(res => {
            setAddresses(prev => [...prev, res.data.address])
            setShow(false)
        }).catch(err => {
            console.log(err)
            setShow(false)
        })
    }
    const handleSetDefault = async (payload) => {
        protectedRequest().post("/users/addresses/set-default", {...payload, isDefault: true}).then(res => {
            const {address} = res.data
            const items = [...addresses].filter(item => item._id !== address._id).map(item => ({
                ...item,
                isDefault: false
            }))
            setAddresses([address, ...items])
        }).catch(err => {
            console.log(err)
            // toast.error("Vui lòng thử lại sau")
        })
    }

    return (
        <UserLayout>
            <Helmet title={'Thay đổi địa chỉ - Shopio'}>
                <div className="container py-8">
                    <div className="flex items-start gap-5">
                        <UserSidebar/>
                        <div className="flex-1">
                            <div className="bg-white rounded-[5px] shadow-md">
                                <div
                                    className="text-black border-b border-[#f7f7f7] flex items-center justify-between px-5 py-4 rounded-t-[5px]">
                                    <h5 className="flex items-center gap-3">
                                        <span className="text-base font-semibold">Địa chỉ nhận hàng</span>
                                    </h5>
                                    <CreateAddress show={show} setShow={setShow} addNewAddress={addNewAddress}/>
                                    <button onClick={() => setShow(true)}
                                            className="flex items-center gap-1 text-md font-medium flex items-center gap-1 py-1 px-2.5 bg-[#D8EAFF] text-[#1CAC93] rounded-full">
                                        <Icon.UilPlusCircle className="w-[24px] h-[24px]"/>
                                        <p className="">Thêm địa chỉ mới</p>
                                    </button>
                                </div>
                                <div className="px-5 min-h-[250px]">
                                    {addresses.map((item, index) => (
                                        <div key={index}
                                             className={`${index < addresses.length - 1 && 'border-b border-[#efefef]'} py-5 flex gap-3 items-start `}>
                                            <div
                                                className="flex-1">
                                                <p className="font-medium text-base text-black-1 flex items-center gap-2.5">
                                                    <span className="text-md">Người nhận: {item.fullName}</span>
                                                    <span className="font-medium text-md text-[#A5B4BE]">|</span>
                                                    <span
                                                        className="font-medium text-md text-black-1">{item.phone}</span>
                                                    {item.email &&
                                                        <>
                                                            <span
                                                                className="font-medium text-md text-[#A5B4BE]">|</span>
                                                            <span className="text-tiny font-medium text-black-1">
                                                                {item.email}
                                                            </span>
                                                        </>
                                                    }
                                                </p>
                                                <p className="flex items-center gap-2 font-medium text-md text-black-1 mt-2">
                                                    <Icon.UilMapMarker className="w-[20px] h-[20px]"/>
                                                    {item.address}, {item.wards}, {item.district}, {item.city}
                                                </p>
                                                {item.isDefault &&
                                                    <p className="text-sm font-bold uppercase text-[#F66E23] mt-2">
                                                        Địa chỉ mặc định
                                                    </p>
                                                }
                                            </div>
                                            <div className="min-w-[120px]">
                                                <div
                                                    className="mb-2 flex items-center justify-end gap-8 font-medium text-md">
                                                    <button className="text-[#1CAC93]">Cập nhật</button>
                                                    <button className="text-primary-hover">Xóa</button>
                                                </div>
                                                <button onClick={() => handleSetDefault(item)}
                                                        className="flex items-center justify-center gap-1 border-2 border-[#1CAC93] rounded-[5px] min-w-[70px] py-1 px-3 text-[#1CAC93] text-tiny font-medium cursor-pointer">
                                                    Thiết lập mặc định
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                    {addresses.length === 0 && (
                                        <div className="font-medium text-base flex items-center justify-center py-10">
                                            Tài khoản chưa thêm địa chỉ.
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Helmet>
        </UserLayout>
    );
}

export default UserAddress;