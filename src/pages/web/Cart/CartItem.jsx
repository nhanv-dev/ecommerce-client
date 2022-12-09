import React, {useState} from 'react';
import {Link} from "react-router-dom";
import * as Icon from "@iconscout/react-unicons";
import {formatCurrency} from "../../../utils/format";

function CartItem({item}) {
    const [quantity, setQuantity] = useState(item.quantity || 1);
    const updateQuantity = (value) => {
        if (value <= 0) setQuantity(1)
        else setQuantity(value)
    }
    return (
        <div className="flex flex-wrap gap-5 pb-5">
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
                </div>
            </div>
            <div className="flex flex-1 gap-6 items-start justify-center">
                <p className="font-semibold text-base text-primary">{formatCurrency(item.product.sellPrice)}</p>
                <div className="flex items-start gap-2">
                    <button onClick={() => updateQuantity(quantity - 1)}
                            className="hover:bg-[#F3F3F3] rounded-[4px] bg-[#e7e8ea] w-[30px] h-[30px] flex items-center justify-center transition-all">
                        <Icon.UilMinus className="text-center text-[#3f4b53] w-[14px] h-[14px]"/>
                    </button>
                    <input value={quantity} type="number" onChange={(e) => setQuantity(e.target.value)}
                           className="text-center rounded-[5px] border-2 border-[#e7e8ea] w-[35px] h-[30px] outline-none text-tiny font-medium"/>
                    <button onClick={() => updateQuantity(quantity + 1)}
                            className="hover:bg-[#F3F3F3] rounded-[5px] bg-[#e7e8ea] w-[30px] h-[30px] flex items-center justify-center transition-all">
                        <Icon.UilPlus className="text-center text-[#3f4b53] w-[14px] h-[14px]"/>
                    </button>
                </div>
            </div>

            <div className="flex items-start flex-1 justify-end gap-5">
                <button
                    className="hover:bg-[#f2f3f4] rounded-[5px] w-[30px] h-[30px] flex items-center justify-center transition-all">
                    <Icon.UilHeart className="text-[#3f4b53] w-[18px] h-[18px]"/>
                </button>
                <button
                    className="hover:bg-[#f2f3f4] rounded-[5px] w-[30px] h-[30px] flex items-center justify-center transition-all">
                    <Icon.UilTrashAlt className="text-[#3f4b53] w-[18px] h-[18px]"/>
                </button>
            </div>
        </div>
    );
}

export default CartItem;