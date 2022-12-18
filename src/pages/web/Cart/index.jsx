import {useState, useEffect} from 'react';
import Helmet from "../../../components/web/Helmet";
import {UserLayout} from "../../../components/common/Layouts";
import CartItem from "./CartItem";
import {Link} from "react-router-dom";
import * as Icon from "@iconscout/react-unicons"
import {formatCurrency} from "../../../utils/format";
import {useDispatch, useSelector} from "react-redux";
import {deleteProductCart, update} from "../../../redux/actions/cartActions";

function Cart() {
    const [cart, setCart] = useState({});
    const [total, setToTal] = useState(0);
    const cartState = useSelector(state => state.cart);

    useEffect(() => {
        cartState.forEach((i) => {
            setCart({...i})
        })
    }, [cartState])

    useEffect(() => {
        let totalItem = 0
        cart?.items?.forEach((i) => {
            totalItem += ((i.product.basePrice) - (i.product.basePrice * (i.product.discountPercent / 100))) * i.quantity
        })
        setToTal(totalItem)
    }, [cart])

    return (
        <UserLayout>
            <Helmet title="Giỏ hàng">
                <div className="container py-8">
                    <div className="flex flex-wrap items-start justify-start gap-5 relative">
                        <div className="min-w-full">
                            <p className="font-bold text-lg">Giỏ hàng của bạn</p>
                        </div>
                        <div className="basis-8/12">
                            <FilterCart cart={cart}/>
                        </div>
                        <div className="flex-1">
                            <div className="p-4 bg-white rounded-[8px] sticky top-[50px] right-0">
                                <div className="mb-8 flex items-center justify-between">
                                    <p className="font-medium text-base">Tổng tiền:</p>
                                    <p className="font-bold text-primary-hover text-lg">{formatCurrency(total)}</p>
                                </div>
                                <Link to={`/thanh-toan`}>
                                    <button
                                        className="w-full p-2 bg-primary rounded-[5px] font-bold text-white hover:bg-primary-hover">
                                        Mua hàng
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Helmet>
        </UserLayout>
    );
}

const FilterCart = ({cart}) => {
    const [filterCart, setFilterCart] = useState([]);
    const shop = useSelector(state => state.shop);
    const dispatch = useDispatch();

    useEffect(() => {
        const array = [];
        cart?.items?.forEach(item => {
            console.log(item)
            const owner = item.product
            if (array.filter(obj => obj?.shop?._id === owner.shopId).length > 0) {
                array.forEach(obj => {
                    if (obj?.shop?._id === owner.shopId) obj.items.push({...item})
                })
            } else {
                array.push({shop, items: [{...item}]})
            }
        })
        setFilterCart(array)
    }, [cart])

    const deleteProductCartById = (item) => {
        const action = deleteProductCart(item)
        dispatch(action)
    }
    const updateQuan = (item, quantity) => {
        const action = update(item, quantity);
        dispatch(action);
    }
    return (
        <div>
            {filterCart.map((cart, index) => {
                return (
                    <div key={index}
                         className={`p-4 bg-white rounded-[8px] mb-5`}>
                        <div className="flex items-center justify-between pb-5">
                            <Link to={`/cua-hang/${cart.shop._id}`}
                                  className="flex items-center gap-3 font-medium text-md">
                                <div style={{backgroundImage: `url(${cart.shop.avatar})`}}
                                     className="bg-cover bg-center min-w-[40px] min-h-[40px] border-2 border-primary rounded-full"/>
                                {cart.shop.name}
                            </Link>
                            <Link to={`/cua-hang/${cart.shop._id}`}
                                  className="flex items-center gap-2 text-tiny font-medium">
                                <Icon.UilCommentAltLines className="w-[16px]"/>
                                Chat với Shop
                            </Link>
                        </div>
                        {cart.items.map((item, i) => (
                            <CartItem deleteProductCartById={deleteProductCartById} updateQuan={updateQuan} key={i}
                                      item={item}/>
                        ))}
                    </div>
                )
            })}
        </div>
    );
};


export default Cart;