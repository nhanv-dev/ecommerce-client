import {Link} from "react-router-dom";
import {formatCurrency} from "../../../utils/format";
import {useEffect, useState} from "react";

function ProductCard({product}) {

    return (
        <div className="cursor-pointer relative group w-full rounded-md bg-white rounded-[6px] p-2">
            <Link to={`/san-pham/${product.slug}`} className="w-full flex items-center justify-center mb-2">
                <img src={product.images[0]?.url || imageNotFound} alt={product.name}/>
            </Link>
            <Link to={`/san-pham/${product.slug}`} className="block ">
                <p className="hover:text-primary text-[.85rem] font-semibold text-black line-clamp-2 mb-2">
                    {product.name}
                </p>
                <p className="text-base font-bold text-primary-hover">{formatCurrency(product.basePrice)}</p>
            </Link>
        </div>
    );
}

const imageNotFound = '';
export default ProductCard;