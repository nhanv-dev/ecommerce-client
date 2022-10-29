import {Link} from "react-router-dom";
import {formatCurrency} from "../../../utils/format";

function ProductCard({product}) {

    return (
        <div className="cursor-pointer relative group w-full rounded-md bg-white rounded-[6px] p-3.5">
            <Link to={`/san-pham/${product.slug}`} className="w-full flex items-center justify-center mb-2">
                <img src={product.images[0].img || defaultImage} alt={product.name}/>
            </Link>
            <Link to={`/san-pham/${product.slug}`} className="block ">
                <p className="hover:text-primary text-tiny font-medium text-black line-clamp-2 mb-2">
                    {product.name}
                </p>
                <p className="text-base font-bold text-[#efefef] line-through">{formatCurrency(product.sell_price)}</p>
                <p className="text-base font-bold text-primary-hover mb-3">{formatCurrency(product.sell_price)}</p>
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

const defaultImage = 'https://i5.walmrtimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF';

export default ProductCard;