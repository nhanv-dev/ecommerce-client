import React, {useState, useEffect, useContext} from 'react';
import Helmet from "../../../components/web/Helmet";
import {UserLayout} from "../../../components/common/Layouts";
import "./style.scss";
import {useSelector} from "react-redux";
import ProductCard from "../../../components/web/ProductCard";
import {publicRequest} from "../../../utils/requestMethods";
import {formatLongDate} from "../../../utils/format";


function Home() {
    // const socket = useContext(SocketContext);
    const user = useSelector(state => state.user)
    const [products, setProducts] = useState([])
    useEffect(() => {
        publicRequest.get(`/products/all`).then(res => {
            console.log(formatLongDate(res.data.products[res.data.products.length - 1].updatedAt))
            setProducts(res.data.products)
        })
    }, [])

    return (
        <UserLayout>
            <Helmet title="Trang chủ">
                <div className="container py-8">
                    <div className="bg-white mb-5 rounded-[5px]">
                        <div className="border-b flex border-border">
                            <div className="ml-6 p-2 text-primary border-b-4 border-primary font-semibold">
                                Sản phẩm mới nhất
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 pb-5">
                        <div className="grid grid-cols-6 gap-3">
                            {products.map((product, index) => {
                                return (
                                    <ProductCard key={index} product={product}/>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Helmet>
        </UserLayout>
    );
}

export default Home;