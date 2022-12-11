import React, {useEffect, useState} from 'react';
import * as icon from "@iconscout/react-unicons";
import {BuyerLayout} from "../../../components/common/Layouts";
import Helmet from "../../../components/web/Helmet";
import {Link} from "react-router-dom";

function ChangeAddress() {
    const userEX= [
        {
            uId: 1, name: "Nguyễn Văn To", ava:"https://i.pinimg.com/736x/ef/b4/56/efb4563befb0ae1bed74f004785f3f0f.jpg", phone:"035648799", address:[
                {id: 1,addr:"103, đường số 4, ", ward:"Phường Linh Xuân, ", district: "Thủ Đức, ", city:"Thành Phố Hồ Chí Minh", default:true},
                {id: 2,addr:"103, đường số 4, ", ward:"Phường Linh Xuân, ", district: "Thủ Đức, ", city:"Thành Phố Hồ Chí Minh", default:false},


            ]
        },
    ]
    const [users, setUsers] = useState([...userEX])
    const [check, setCheck] = useState("default")
    const onChangeValue = (e)=>{
        setCheck(e.target.value)
    }

        // const deleteE = (id)=>{
        //     console.log(id)
        //     // if(check=="notDefault"){
        //         let u = users.address.filter(el=> el.id !==id )
        //         setUsers(...u);
        //         console.log(u)
        //     // }
        // }


    return (
        <BuyerLayout>
            <Helmet title={'Thay đổi địa chỉ'}>
                {users.map((user)=>(
                <div className="container pb-10 h-full">
                    <div className="mb-3 shadow-[2px_1px_8px_-3px_rgba(0,0,0,0.6)]">
                        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[#EDF9FF] to-[#FDFEFF] rounded-t-md ">
                            <div className="flex">
                                <icon.UilLocationPoint className="w-[25px] h-[25px] text-[#01ACFF]"/>
                                <h1 className="pl-2 font-medium">Địa chỉ nhận hàng</h1>
                            </div>
                        </div>

                        <div className="bg-white p-3 rounded-b-md">
                            {user.address.map((item,index)=> (
                            <div className="flex items-center flex-row mb-2">
                                <div className="basis-0 text-primary p-1"> <input type="radio" id="radio1" checked={check == `${item.default==true?'default':'notDefault'}`} value={item.default==true ? 'default':'notDefault' } name="address" className="w-4 h-4 mt-1 accent-primary" onChange={onChangeValue}/></div>
                                <div className="flex  justify-between basis-full ml-1 pb-1 border-b border-border">
                                    <div className="bg-white rounded-b-md ">
                                        <p className="font-medium">{user.name}  <span className="font-normal text-[#A5B4BE]">| {user.phone}</span>  </p>
                                        <p className="text-[#A5B4BE]">{item.addr + item.ward + item.district + item.city}</p>
                                        <p className="text-[12px] font-medium pt-2 text-[#F66E23]">{item.default==true ? 'ĐỊA CHỈ MẶC ĐỊNH':''}</p>
                                    </div>
                                    <div className="flex text-right">
                                        <Link to={check=='notDefault' || item.default==true ? `/them-dia-chi`: ''}>
                                            <p className="text-[#01ACFF] italic decoration-1 cursor-pointer underline" >{check==='notDefault'? 'Chỉnh sửa': '' || item.default === true ? 'Chỉnh sửa': 'Xóa' }</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            ))}
                            <Link to={`/them-dia-chi/`}>
                                <div className="flex pt-2 cursor-pointer">
                                    <icon.UilPlusSquare className="w-[25px] h-[25px] text-[#999999]"/>
                                    <p className="ml-1">Thêm địa chỉ nhận hàng</p>
                                </div>
                            </Link>
                            <Link to={`/thanh-toan`}>
                                <button className="rounded-md w-[20%] mt-3 px-4 py-2 font-bold bg-primary text-white hover:bg-primary-hover transition duration-400 active:bg-primary">Tiếp tục</button>
                            </Link>
                            </div>

                    </div>
                </div>
                ))}
            </Helmet>
        </BuyerLayout>
    );
}

export default ChangeAddress;