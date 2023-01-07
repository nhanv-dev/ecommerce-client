import {Link} from "react-router-dom";
import {formatCurrency} from "../../../utils/format";
import {useEffect, useState} from "react";
import ImageNotFound from "../../../assets/img/image-not-found.jpg";

function ProductCard({product}) {
    const [image, setImage] = useState(ImageNotFound);
    useEffect(() => {
        if (product.images.length > 0) setImage(product.images[0].url)
    }, [product]);
    return (
        <div className="cursor-pointer relative group w-full rounded-md bg-white rounded-[5px] p-3">
            <Link to={`/san-pham/${product.slug}`}
                  className="w-full flex items-center justify-center mb-2 rounded-[5px] overflow-hidden">
                <div style={{backgroundImage: `url(${image})`}}
                     className="rounded-[5px] w-full min-h-[180px] min-w-[180px] pt-full bg-cover bg-center"/>
            </Link>
            <Link to={`/san-pham/${product.slug}`} className="block">
                <p className="hover:text-primary text-tiny font-semibold text-[#0f1e29] line-clamp-2 mb-1">
                    {product.name}
                </p>
                <div className="flex items-center justify-start gap-3">
                    <p className="text-base font-bold text-primary-hover">{formatCurrency(product.basePrice * (100 - product.discountPercent) / 100)}</p>

                    {product.discountPercent > 0 &&
                        <p className="bg-primary-hover text-white px-3 py-0.5 rounded-[5px] font-bold text-sm relative top-[1px]">
                            -{product.discountPercent}%
                        </p>
                    }
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


export default ProductCard;