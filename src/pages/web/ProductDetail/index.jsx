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
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../../redux/actions/cartActions";
import {publicRequest} from "../../../utils/requestMethods";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function ProductDetail() {
    const {slug} = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const [shop, setShop] = useState({});
    const [product, setProduct] = useState(null);
    const [options, setOptions] = useState([]);
    const [userOptions, setUserOptions] = useState([]);
    const [combinations, setCombinations] = useState([]);
    const [userCombination, setUserCombination] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        publicRequest.get(`/products?slug=${slug}&detail=true`).then(res => {
            const {product, options, combinations} = res.data;
            setProduct(product)
            setOptions(options)
            setCombinations(combinations)
        })
    }, [slug])

    useEffect(() => {
        if (!product) return;
        publicRequest.get(`/shops/product?productId=${product._id}`).then(res => {
            const {shop, relatedProducts} = res.data;
            setShop(shop)
            setRelatedProducts(relatedProducts)
        })

    }, [product])

    useEffect(() => {
        const findCombination = (options) => {
            return [...combinations].filter(item => {
                const strings = item?.combinationString?.split(" + ")
                const included = strings?.filter(character => {
                    return options.filter(item => {
                        return item?.value?.name === character
                    }).length > 0
                })
                return included?.length === strings?.length
            })
        }
        if (!userOptions || userOptions.length === 0) return setUserCombination({isNotExist: true})
        const correctCombination = findCombination(userOptions)
        if (correctCombination.length === 0) return setUserCombination({isNotExist: true})
        setUserCombination(correctCombination[0]);
    }, [userOptions])

    const updateQuantity = (value) => {
        setQuantity(value)
    }

    const handleAddToCart = async () => {
        if (userCombination.isNotExist || !product || !shop) return;
        const item = {
            userId: user?.info?._id,
            quantity,
            product,
            combination: {...userCombination},
            shop: {_id: shop._id, name: shop.name, avatar: shop.avatar, slug: shop.slug},
             items: [{
                id: product?._id,
                combinationString: userCombination.combinationString,
                product: {...product},
                quantity: quantity,
            }]
        }
        const action = await addToCart({...item});
        if (!action.success) toast.error("Thêm sản phẩm thất bại")
        else toast.success("Đã thêm sản phẩm vào giỏ hàng")
        dispatch(action);
    }

    return (<UserLayout>
        <Helmet title={product?.name}>
            <div className="container py-8">
                <ToastContainer/>
                <Overview product={product}
                          slug={slug}
                          userCombination={userCombination}
                          options={options}
                          combinations={combinations}
                          userOptions={userOptions}
                          setUserOptions={setUserOptions}
                          updateQuantity={updateQuantity}
                          handleAddToCart={handleAddToCart}
                          quantity={quantity}/>
                <div className="flex flex-wrap justify-between mt-6 max-w-full gap-6 pb-6">
                    <Shop shop={shop} relatedProducts={relatedProducts}/>
                    <div className="flex-1">
                        <ProductDescription product={product}/>
                        <QuestionBlock product={product} shop={shop}/>
                    </div>
                </div>
                <Comment product={product} shop={shop}/>
                <Footer product={product} shop={shop}/>
            </div>
        </Helmet>
    </UserLayout>);
}

export default ProductDetail;