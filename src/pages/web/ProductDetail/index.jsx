import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
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

import {publicRequest} from "../../../utils/requestMethods";

function ProductDetail() {
    const {slug} = useParams();
    const [product, setProduct] = useState(null);
    const [options, setOptions] = useState([]);
    const [userOptions, setUserOptions] = useState([]);
    const [combinations, setCombinations] = useState([]);
    const [userCombination, setUserCombination] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();


    useEffect(() => {
        publicRequest.get(`/products?slug=${slug}&detail=true`).then(res => {
            const {product, options, combinations} = res.data;
            setProduct(product)
            setOptions(options)
            setCombinations(combinations)
        })
    }, [slug])

    useEffect(() => {
        const correctCombination = findCombinations(userOptions)
        if (correctCombination.length === 0)
            return setUserCombination({isNotExist: true})
        setUserCombination(correctCombination[0]);
    }, [userOptions])

    const findCombinations = (options) => {
        return [...combinations].filter(item => {
            const strings = item.combinationString.split(" + ")
            const included = strings.filter(character => {
                return options.filter(item => {
                    return item.value.name === character;
                }).length > 0;
            })
            return included.length === strings.length
        })
    }

    const updateQuantity = (value) => {
        setQuantity(value)
    }
    const addToCart = () => {
        const item = {
            id: 1,
            userId: 'quyen',
            items: [{id: slug, product: {...product}, quantity: quantity}]
        }
        const action = buy(item);
        dispatch(action);
    }

    return (
        <UserLayout>
            <Helmet title={product?.name}>
                <div className="container py-8">
                    <Overview product={product}
                              userCombination={userCombination}
                              options={options}
                              combinations={combinations}
                              userOptions={userOptions}
                              setUserOptions={setUserOptions}
                              updateQuantity={updateQuantity}
                              addToCart={addToCart}
                              quantity={quantity}/>
                    <div className=" flex justify-between mt-6 max-w-full gap-6 pb-6">
                        <Shop product={product}/>
                        <div className=" flex-1">
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