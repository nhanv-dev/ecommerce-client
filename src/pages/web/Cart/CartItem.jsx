import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import * as Icon from "@iconscout/react-unicons";
import {formatCurrency} from "../../../utils/format";
import NotFoundImage from "../../../assets/img/image-not-found.jpg";
import {chooseCartItem, deleteProductCart, unChooseCartItem, updateQuantity} from "../../../redux/actions/cartActions";
import {useDispatch} from "react-redux";

function CartItem({item}) {
    const dispatch = useDispatch();
    const [total, setTotal] = useState(0);
    const [discountTotal, setDiscountTotal] = useState(0);

    useEffect(() => {
        if (item.combination) {
            const total = item.combination.price * item.quantity;
            const discountTotal = total * (100 - item.product.discountPercent) / 100;
            setTotal(total);
            setDiscountTotal(discountTotal);
        }
    }, [item])

    const handleDelete = async (item) => {
        const action = await deleteProductCart(item)
        dispatch(action)
    }
    const handleUpdateQuantity = async (quantity) => {
        if (quantity <= 0) quantity = 1;
        const action = await updateQuantity(item, quantity);
        dispatch(action);
    }
    const handleCheck = async (e) => {
        if (e.target.checked) dispatch(await chooseCartItem(item))
        else dispatch(await unChooseCartItem(item))
    }

    return (
        <div className="flex flex-nowrap gap-6 pb-5 max-w-full justify-between">
            <div className="h-[80px] flex items-center">
                <input type="checkbox" onChange={handleCheck} checked={item.checked || false}
                       className="w-[16px] h-[16px] rounded-[5px] overflow-hidden" tabIndex="-1"/>
            </div>
            <div className="flex-1 min-w-[350px] max-w-[350px] flex items-start gap-3">
                <div
                    style={{backgroundImage: `url(${item.product?.images?.length > 0 ? item.product?.images[0].url : NotFoundImage})`}}
                    className="bg-cover bg-center min-w-[80px] min-h-[80px] rounded-[5px]"/>
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        {item.combination &&
                            <p className="py-[2px] px-[12px] w-max text-[12px] font-bold bg-[#e2e6f2] border-[#7182c0] text-[#133096] rounded-[16px]">
                                {item.combination?.combinationString}
                            </p>
                        }
                        <p className="py-[2px] px-[12px] w-max text-[12px] font-bold bg-[#e2e6f2] border-[#7182c0] text-[#133096] rounded-[16px]">
                            Mua trước trả sau
                        </p>
                    </div>
                    <Link to={`/san-pham/${item.product.slug}`}
                          className="line-clamp-2 text-tiny text-[#0f1e29] font-medium">
                        {item.product.name}
                    </Link>
                </div>
            </div>
            <div className="min-w-[100px] max-w-[100px] flex flex-col justify-center items-end">
                <p className="line-clamp-1 font-bold text-base text-primary">
                    {formatCurrency(discountTotal)}
                </p>
                <p className="line-clamp-1 font-bold text-tiny text-[#999] line-through">
                    {formatCurrency(total)}
                </p>
            </div>
            <div className="flex items-center justify-end gap-2">
                <button onClick={() => handleUpdateQuantity(item.quantity - 1)}
                        className="hover:bg-[#F3F3F3] rounded-[4px] bg-[#e7e8ea] w-[30px] h-[30px] flex items-center justify-center transition-all">
                    <Icon.UilMinus className="text-center text-[#3f4b53] w-[14px] h-[14px]"/>
                </button>
                <input value={item.quantity} type="number"
                       onChange={(e) => handleUpdateQuantity(e.target.value)}
                       className="text-center rounded-[5px] border-2 border-[#e7e8ea] w-[35px] h-[30px] outline-none text-tiny font-medium"/>
                <button onClick={() => handleUpdateQuantity(item.quantity + 1)}
                        className="hover:bg-[#F3F3F3] rounded-[5px] bg-[#e7e8ea] w-[30px] h-[30px] flex items-center justify-center transition-all">
                    <Icon.UilPlus className="text-center text-[#3f4b53] w-[14px] h-[14px]"/>
                </button>
            </div>
            <div className="flex items-center justify-end gap-5">
                <button
                    className="hover:bg-[#f2f3f4] rounded-[5px] w-[30px] h-[30px] flex items-center justify-center transition-all">
                    <Icon.UilHeart className="text-[#3f4b53] w-[18px] h-[18px]"/>
                </button>
                <button
                    className="hover:bg-[#f2f3f4] rounded-[5px] w-[30px] h-[30px] flex items-center justify-center transition-all"
                    onClick={() => handleDelete(item)}>
                    <Icon.UilTrashAlt className="text-[#3f4b53] w-[18px] h-[18px]"/>
                </button>
            </div>
        </div>
    );
}

export default CartItem;