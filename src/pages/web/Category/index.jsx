import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import ProductExample from "../../../common/ProductExample";
import Helmet from "../../../components/web/Helmet";
import {UserLayout} from "../../../components/common/Layouts";
import ProductCard from "../../../components/web/ProductCard";
import {publicRequest} from "../../../utils/requestMethods";

function Category() {
    const {slug} = useParams();
    const [category, setCategory] = useState(null);
    const [products, setProducts] = useState([ProductExample, ProductExample, ProductExample, ProductExample, ProductExample, ProductExample])

    useEffect(() => {
        publicRequest.get(`/categories/slug/${slug}`).then(response => {
            setCategory(response.data.category)
        })
    }, [slug])

    useEffect(() => {
        if (!category) return;
        axios.get(`http://localhost:8080/api/v1/products?category=${category._id}&limit=32`).then(response => {
            // console.log(response.data.products)
        })
    }, [category])

    return (
        <UserLayout>
            <Helmet title={category ? `${category.name}` : 'Danh mục'}>
                <div className="container h-full">
                    <div className="flex gap-4 py-10 relative">
                        <div className="w-[18%]">
                            <div
                                className="scroll-component sticky top-[58px] left-0 z-20 overflow-y-scroll overflow-x-hidden max-h-[90vh]">
                                <div className="flex flex-col gap-3">
                                    {products.map((product, index) => {
                                        return (
                                            <div key={index} className="bg-white rounded-[8px] p-3.5 ">
                                                <h5>Nơi bán</h5>
                                                <div>
                                                    <p>TP.Hồ Chí Minh</p>
                                                    <p>Hà Nội</p>
                                                    <p>Đà nắng</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="grid grid-cols-5 gap-3">
                                {products.map((product, index) => {
                                    return (
                                        <ProductCard key={index} product={product}/>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </Helmet>
        </UserLayout>
    );
}

export default Category;