import React, {useEffect, useState} from 'react';
import {SellerLayout} from "../../../components/common/Layouts";
import Helmet from "../../../components/web/Helmet";
import {ProductTable} from "../../../components/seller/Table";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {protectedRequest, publicRequest} from "../../../utils/requestMethods";
import * as Icon from "@iconscout/react-unicons";
import axios from "axios";

function Category() {
    const user = useSelector(state => state.user);
    const shop = useSelector(state => state.shop);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log(user.accessToken)
        console.log(JSON.parse(localStorage.getItem("persist:root"))?.accessToken)
        const baseURL = "http://localhost:8080/api/v1/";
        const request = axios.create({
            baseURL: baseURL,
            headers: {token: `Bearer ${user?.accessToken}`},
        });
        protectedRequest.get(`/shops/products`).then(res => {
            setProducts([...res.data.products])
        }).catch(err => {
            console.log(err)
        })
    }, [user])


    return (
        <SellerLayout>
            <Helmet title="Danh mục hàng - Shopio">
                <div className="container max-w-[1400px]">
                    <div className="flex flex-wrap gap-6">
                        <div className="min-w-[300px]">
                            <div className="rounded-[6px] bg-white p-5 shadow-md">
                                <div className="mb-5 flex items-center justify-start gap-3">
                                    <p className="text-md font-medium">Đang bán:</p>
                                    <p className="text-sm font-medium rounded-[50px] bg-primary text-white px-3 py-0.5">
                                        123
                                    </p>
                                </div>
                                <div className="mb-5 flex items-center justify-start gap-3">
                                    <p className="text-md font-medium">Ngừng bán:</p>
                                    <p className="text-sm font-medium rounded-[50px] bg-primary text-white px-3 py-0.5">
                                        123
                                    </p>
                                </div>
                                <div className="mb-5 flex items-center justify-start gap-3">
                                    <p className="text-md font-medium">Hết hàng:</p>
                                    <p className="text-sm font-medium rounded-[50px] bg-primary text-white px-3 py-0.5">
                                        123
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="rounded-[6px] bg-white p-5 shadow-md">
                                <div className="flex items-center gap-5 justify-between mb-5">
                                    <Link to="/kenh-ban-hang/dang-ban"
                                          className="flex items-center justify-end relative group">
                                        <p className="rounded-full w-[26px] h-[26px] flex items-center justify-center bg-[#008000]">
                                            <Icon.UilPlus className="w-[18px] h-[18px] text-white"/>
                                        </p>
                                        <span
                                            className="group-hover:visible group-hover:opacity-100 invisible transition-all opacity-0 absolute z-10 rounded-full bg-[#008000] px-2 py-0.5 text-white text-sm min-w-max left-[100%] top-[50%] translate-x-[5px] translate-y-[-50%] font-semibold text-black-1">
                                            Đăng sản phẩm mới
                                        </span>
                                    </Link>
                                    <div className="flex items-center gap-5">
                                        <div
                                            className="bg-[#F7F7F7] w-[280px] flex gap-2 items-center rounded-[5px] p-2 px-3">
                                            <input type="text"
                                                   className="text-black-1 bg-[#F7F7F7] font-medium text-md flex-1 outline-none"/>
                                            <button>
                                                <Icon.UilSearch className="min-w-[18px] min-h-[18px] text-black-1"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <ProductTable products={products}></ProductTable>
                            </div>
                        </div>
                    </div>
                </div>
            </Helmet>
        </SellerLayout>
    );
}

export default Category;