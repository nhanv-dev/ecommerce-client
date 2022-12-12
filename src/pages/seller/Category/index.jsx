import React, {useEffect, useState} from 'react';
import {SellerLayout} from "../../../components/common/Layouts";
import Helmet from "../../../components/web/Helmet";
import {ProductTable} from "../../../components/seller/Table";
import {useSelector} from "react-redux";
import {protectedRequest, publicRequest} from "../../../utils/requestMethods";

function Category() {
    const user = useSelector(state => state.user);
    const [products, setProducts] = useState([]);
    const [shop, setShop] = useState({});

    useEffect(() => {
        protectedRequest.get(`/shops/products`).then(res => {
            console.log(res.data.products)
            setProducts([...res.data.products])
        })
    }, [user])

    useEffect(() => {
        // protectedRequest.get(`/shops/details`).then(res => {
        //     console.log(res.data.products)
        //     setProducts([...res.data.products])
        // })
    }, [user])

    return (
        <SellerLayout>
            <Helmet title="Danh mục hàng - Shopio">
                <div className="container max-w-[1400px]">
                    <div className="flex flex-wrap gap-6">
                        <div className="min-w-[300px]">
                            <div className="rounded-[6px] bg-white p-3 shadow-md">
                                <div className="mb-1 flex items-center justify-start gap-3">
                                    <p className="text-md font-medium flex-1">Đang bán:</p>
                                    <p className="text-tiny font-medium rounded-[50px] bg-primary text-white px-3 py-0.5">
                                        123
                                    </p>
                                </div>
                                <div className="mb-1 flex items-center justify-start gap-3">
                                    <p className="text-md font-medium flex-1">Ngừng bán:</p>
                                    <p className="text-tiny font-medium rounded-[50px] bg-primary text-white px-3 py-0.5">
                                        123
                                    </p>
                                </div>
                                <div className="mb-1 flex items-center justify-start gap-3">
                                    <p className="text-md font-medium flex-1">Hết hàng:</p>
                                    <p className="text-tiny font-medium rounded-[50px] bg-primary text-white px-3 py-0.5">
                                        123
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <ProductTable products={products}></ProductTable>
                        </div>
                    </div>
                </div>
            </Helmet>
        </SellerLayout>
    );
}

export default Category;