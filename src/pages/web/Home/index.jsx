import React, {useState, useEffect, useContext} from 'react';
import {SocketContext} from "../../../service/socket";
import Helmet from "../../../components/web/Helmet";
import {UserLayout} from "../../../components/common/Layouts";
import "./style.scss";
import {useSelector} from "react-redux";
import ProductCard from "../../../components/web/ProductCard";
import {publicRequest} from "../../../utils/requestMethods";


function Home() {
    // const socket = useContext(SocketContext);
    const user = useSelector(state => state.user)
    const [products, setProducts] = useState([])
    useEffect(() => {
        publicRequest.get(`/products/all`).then(res => {
            setProducts(res.data.products)
        })
    }, [])

    return (
        <UserLayout>
            <Helmet title="Trang chủ">
                <div className="container">
                    <div className="bg-white my-2">
                        <div className="border-b flex border-border">
                            <div className="ml-6 p-2 text-primary border-b-4 border-primary">
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