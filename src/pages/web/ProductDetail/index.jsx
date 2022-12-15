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
import {useDispatch, useSelector} from "react-redux";
import {buy} from "../../../redux/actions/cartActions";

function ProductDetail() {
    const {slug} = useParams();
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([{...productExample}, {...productExample}, {...productExample}]);
    const [quantity, setQuantity] = useState(1);
    const dispatch  = useDispatch();
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
    const addToCart = ()=>{
        const item ={
            id: 1,
            userId:'quyen',
            items: [{id:slug,product:{...product}, quantity: quantity}]
        }
        const action = buy(item);
        dispatch(action);
    }
    return (
        <UserLayout>
            <Helmet title={product?.name}>
                <div className="container py-8">
                    <Overview product={product} addToCart={addToCart} updateQuantity={updateQuantity} quantity={quantity}/>
                    <div className="flex justify-between mt-6 max-w-full gap-6 pb-6">
                        <Shop relatedProducts={relatedProducts}/>
                        <div className="flex-1">
                            <ProductDescription product={product}/>
                            <QuestionBlock product={product}/>
                        </div>
                    </div>
                    <Comment product={product}/>
                    <Footer product={product} quantity={quantity} addToCart={addToCart}/>
                </div>
            </Helmet>
        </UserLayout>
    );
}

export default ProductDetail;