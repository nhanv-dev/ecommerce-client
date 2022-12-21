import React, {useEffect, useState} from 'react';
import Helmet from "../../../components/web/Helmet";
import {SellerLayout} from "../../../components/common/Layouts";
import DefaulLogo from "./../../../assets/img/default-avatar.png"
import {useSelector} from "react-redux";
import ModalChooseImage from "./ModalChooseImage";

function Info() {
    const shop = useSelector(state => state.shop);
    const [show, setShow] = useState(false);
    useEffect(()=>{
        console.log(show)
    }, [show])
    const handle = (value)=>{
        console.log("handle", value)
        setShow(value)
    }
    return (
        <SellerLayout>
            <Helmet title="Kênh bán hàng - Shopio">
                <div className="container ">
                    <div className="bg-white shadow-md rounded-md ">
                        <div>
                            <div className="p-4">
                                <h1 className="text-2xl font-bold ">Hồ sơ Shop</h1>
                                <p className="text-black-1">Xem tình trạng Shop và cập nhật hồ sơ Shop của bạn</p>
                            </div>
                            <div className="border-b flex border-border">
                                <div className="ml-6 p-2 text-primary border-b-4 border-primary">
                                    Thông tin cơ bản
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center py-5">
                            <div className="basis-2/3">
                                <div className="p-2 flex items-center justify-start gap-4 text-right">
                                    <label className="basis-1/6" htmlFor="">Tên Shop</label>
                                    <div className="basis-5/6 shadow-md bg-white w-full rounded-[5px] p-3">
                                        <input type="text" value={shop.name} className="text-black-1 font-medium text-md w-full outline-none"/>
                                    </div>
                                </div>
                                <div className="p-2 flex items-center justify-start gap-4 text-right">
                                    <span className="basis-1/6">Shop Logo</span>
                                    <div className="relative w-[100px] h-[100px] cursor-pointer shadow border-[3px] border-primary rounded-full overflow-hidden" >
                                        <img src={shop ? shop.avatar: DefaulLogo} className="w-[100px] h-[100px] " alt=""/>
                                        <div className="w-full h-[26px] bg-[#00000080] absolute bottom-0 text-center text-white">
                                            {/*<ModalChooseImage show={show} setShow={setShow}/>*/}
                                            Sửa
                                        </div>
                                    </div>
                                    <div className="text-left text-black-1 text-sm py-4">
                                        <p>- Recommended image dimensions: width 300px, height 300px</p>
                                        <p>- Maximum file size: 2.0MB</p>
                                        <p>- Image format accepted: JPG,JPEG,PNG</p>
                                    </div>
                                </div>
                                <div className="p-2 flex items-center justify-start gap-4 text-right">
                                    <span className="basis-1/6">Ảnh bìa</span>
                                    <div className="relative basis-5/6 cursor-pointer shadow rounded-md text-center overflow-hidden" onClick={()=> setShow(true)}>
                                        <div className="h-[200px] overflow-hidden flex items-center justify-center">
                                            <img alt="background" className="w-auto h-[150px]"
                                                 src={shop.background || "https://pwa-web.scdn.vn/static/media/page_loading.4a62ff00.png"}/>
                                        </div>
                                        <div className="w-full h-[26px] bg-[#00000080] absolute bottom-0 text-center text-white">
                                            <ModalChooseImage show={show} handle={handle}/>
                                            Sửa
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 flex items-start justify-start gap-4 text-right">
                                    <label className="basis-1/6 mt-2" htmlFor="description">Mô tả Shop</label>
                                    <div className="basis-5/6 text-left ">
                                        <div className="shadow-md bg-white w-full mb-4 rounded-[5px] p-3">
                                            <textarea className="text-black-1 font-medium text-md w-full outline-none" placeholder="Nhập mô tả hoặc thông tin của Shop bạn tại đây" name="" id="description" cols="73" rows="5"></textarea>
                                        </div>
                                        <button className="px-5 py-1.5 text-white hover:bg-primary-hover active:bg-primary bg-primary transition duration-400 rounded-[3px] ">Lưu</button>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </Helmet>
        </SellerLayout>
    );
}

export default Info;