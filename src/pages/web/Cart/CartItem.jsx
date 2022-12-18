import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import * as Icon from "@iconscout/react-unicons";
import {formatCurrency} from "../../../utils/format";
import {deleteProductCart, minus, plus} from "../../../redux/actions/cartActions";
import {useDispatch, useSelector} from "react-redux";

function CartItem(props) {
    const { item, deleteProductCartById, updateQuan} = props
    const [quantity, setQuantity] = useState( item.quantity||1);
    const onDelete = (item) =>{
        deleteProductCartById(item);
    }
    const updateQuantity = (item, quantity)=>{
        if(quantity > 0){
            setQuantity(quantity)
        }
        updateQuan(item, quantity)
    }
    return (
        <div className="flex flex-nowrap gap-5 pb-5">
            <div className="h-[80px] flex items-center">
                <input type="checkbox" className="w-[16px] h-[16px]" tabIndex="-1"/>
            </div>
            <div className="min-w-[400px] max-w-[400px] flex items-start gap-3">
                <div style={{backgroundImage: `url(${item.product.images[0].url})`}}
                     className="bg-cover bg-center min-w-[80px] min-h-[80px] rounded-[5px]"/>
                <div>
                    <p className="mb-2 py-[2px] px-[12px] w-max text-[12px] font-bold bg-[#e2e6f2] border-[#7182c0] text-[#133096] rounded-[16px]">
                        Mua trước trả sau
                    </p>
                    <Link to={`/san-pham/${item.product.slug}`} className="line-clamp-1 text-tiny text-[#0f1e29] font-medium">
                        {item.product.name}
                    </Link>
                    <p className="mb-2 mt-1 py-[2px]  w-max text-[12px] font-bold border-[#7182c0] text-[#444444] rounded-[16px]">
                        {item.combinationString}
                    </p>
                </div>
            </div>
            <div className="flex flex-1 gap-6 items-center justify-center">
                <p className="font-semibold text-base text-primary">{formatCurrency((item.product.basePrice)-(item.product.basePrice*item.product.discountPercent/100))}</p>
                <div className="flex items-start gap-2">
                    <button onClick={()=>updateQuantity(item, quantity-1)}
                            className="hover:bg-[#F3F3F3] rounded-[4px] bg-[#e7e8ea] w-[30px] h-[30px] flex items-center justify-center transition-all">
                        <Icon.UilMinus className="text-center text-[#3f4b53] w-[14px] h-[14px]"/>
                    </button>
                    <input value={quantity} type="number"
                           className="text-center rounded-[5px] border-2 border-[#e7e8ea] w-[35px] h-[30px] outline-none text-tiny font-medium"/>
                    <button onClick={()=>updateQuantity(item, quantity+1)}
                            className="hover:bg-[#F3F3F3] rounded-[5px] bg-[#e7e8ea] w-[30px] h-[30px] flex items-center justify-center transition-all">
                        <Icon.UilPlus className="text-center text-[#3f4b53] w-[14px] h-[14px]"/>
                    </button>
                </div>
            </div>

            <div className="flex items-center flex-1 justify-end gap-5">
                <button
                    className="hover:bg-[#f2f3f4] rounded-[5px] w-[30px] h-[30px] flex items-center justify-center transition-all">
                    <Icon.UilHeart className="text-[#3f4b53] w-[18px] h-[18px]"/>
                </button>
                <button
                    className="hover:bg-[#f2f3f4] rounded-[5px] w-[30px] h-[30px] flex items-center justify-center transition-all" onClick={() => onDelete(item)}>
                    <Icon.UilTrashAlt className="text-[#3f4b53] w-[18px] h-[18px]"/>

                </button>
            </div>
        </div>
    );
}

export default CartItem;