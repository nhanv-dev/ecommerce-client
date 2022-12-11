import {Fragment, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import './style.scss';
import Helmet from "../../../components/web/Helmet";
import {UserLayout} from "../../../components/common/Layouts";
import Footer from "./Footer";
import Shop from "./Shop";
import Overview from "./Overview";
import ProductDescription from "./ProductDescription";
import Comment from "./Comment";
import QuestionBlock from "./QuestionBlock";
import productExample from "../../../common/ProductExample";

function ProductDetail() {
    const {slug} = useParams();
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([{...productExample}, {...productExample}, {...productExample}]);
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        // axios
        //     .get(`http://localhost:8080/api/v1/product/${slug}`)
        //     .then((response) => {
        //     })
        setProduct(productExample)
    }, [slug])

    const updateQuantity = (value) => {
        setQuantity(value)
    }

    return (
        <UserLayout>
            <Helmet title={product?.name}>
                <div className="container py-8">
                    <Overview product={product} updateQuantity={updateQuantity} quantity={quantity}/>
                    <div className="flex justify-between mt-6 max-w-full gap-6 pb-6">
                        <Shop relatedProducts={relatedProducts}/>
                        <div className="flex-1">
                            <ProductDescription product={product}/>
                            <QuestionBlock product={product}/>
                        </div>
                    </div>
                    <Comment product={product}/>
                    <Footer product={product} quantity={quantity}/>
                </div>
            </Helmet>
        </UserLayout>
    );
}

export default ProductDetail;