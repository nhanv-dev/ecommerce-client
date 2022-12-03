import {Link} from "react-router-dom";
import {formatCurrency} from "../../../utils/format";
import {useEffect, useState} from "react";

function ProductCard({product}) {
    const [image, setImage] = useState(imageNotFound);
    useEffect(() => {
        fetch(product.images[0]?.url).then(res => {
            if (res.status !== 404) setImage(product.images[0].url)
        });
    }, []);
    return (
        <div className="cursor-pointer relative group w-full rounded-md bg-white rounded-[6px] p-3.5">
            <Link to={`/san-pham/${product.slug}`} className="w-full flex items-center justify-center mb-2">
                <img src={image} alt={product.name}/>
            </Link>
            <Link to={`/san-pham/${product.slug}`} className="block">
                <p className="hover:text-primary text-[.85rem] font-semibold text-[#0f1e29] line-clamp-2 mb-2">
                    {product.name}
                </p>
                <p className="text-base font-bold text-primary-hover">{formatCurrency(product.sellPrice * (100 - product.discountPercent) / 100)}</p>
                <div className="flex items-center justify-start gap-3 mb-3">
                    <p className="text-tiny font-semibold text-[#b7bbbf] line-through">{formatCurrency(product.sellPrice)}</p>
                    <p className="text-primary font-bold text-[0.85rem]">-{product.discountPercent}%</p>
                </div>
                <div className="flex items-center justify-start gap-1.5 flex-wrap">
                    {product.tags.slice(0, 1).map((tag, index) => {
                        return (
                            <span key={index}
                                  className="rounded-[50px] px-3 py-1 text-[.725rem] flex-inline items-center justify-center bg-[#F1F3F9] font-bold text-[#133096]">
                                {tag}
                            </span>
                        )
                    })}
                </div>
            </Link>
        </div>
    );
}

const imageNotFound = '';

export default ProductCard;