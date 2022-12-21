import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Helmet from "../../../components/web/Helmet";
import {UserLayout} from "../../../components/common/Layouts";
import ProductCard from "../../../components/web/ProductCard";
import {publicRequest} from "../../../utils/requestMethods";

function Category() {
    const {slug} = useParams();
    const [category, setCategory] = useState(null);
    const [products, setProducts] = useState([])

    useEffect(() => {
        publicRequest.get(`/categories/${slug}`).then(response => {
            setCategory(response.data.category)
        })
    }, [slug])

    useEffect(() => {
        if (!category) return;
        publicRequest.get(`/products/all`).then(res => {
            setProducts(res.data.products)
        })
    }, [category])

    return (
        <UserLayout>
            <Helmet title={category ? `${category.name}` : 'Danh mục'}>
                <div className="container h-full">
                    <div className="flex gap-4 py-10 relative">
                        <div className="w-[260px]">
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