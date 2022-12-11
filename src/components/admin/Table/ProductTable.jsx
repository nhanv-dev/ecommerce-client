import {useEffect, useState} from "react";
import {formatCurrency} from "../../../utils/format";

function ProductTable() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts([])
    }, [])

    return (
        <div className="rounded-[6px] bg-white p-8">
            <table className="w-full">
                <tr className="flex justify-start gap-5 items-center text-md font-bold text-black-1 capitalize">
                    <th className="w-[30px] text-left">#</th>
                    <th className="flex-1 text-left">Sản phẩm</th>
                    <th className="w-[150px] text-right">Giá</th>
                    <th className="w-[150px] text-right">Số lượng</th>
                    <th className="w-[80px] text-right">Trạng thái</th>
                    <th className="w-[120px] text-right">Ngày thêm</th>
                    <th className="w-[120px] text-right">Ngày cập nhật</th>
                    <th className="w-[50px] text-right"></th>
                </tr>
                {products.map((product, index) => {
                    return (
                        <tr className="flex justify-start gap-5 items-center text-md font-semibold text-black-1 capitalize border-t py-3 border-dashed border-[#efefef]">
                            <td className="w-[30px] text-left">{index + 1}</td>
                            <td className="flex-1">
                                <div className="flex items-center gap-5">
                                    <div
                                        className="w-[80px] h-[80px] overflow-hidden flex items-center justify-center rounded-[4px] border border-[#ccc]">
                                        <img className="w-full rounded-[4px]"
                                             src={product.images ? product.images[0] : 'https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png'}
                                             alt="image product"/>
                                    </div>
                                    <div className="flex-1 line-clamp-3">
                                        {product.name}
                                        {product.name}
                                    </div>
                                </div>
                            </td>
                            <td className="w-[150px] text-right">{formatCurrency(product.sell_price)}</td>
                            <td className="w-[150px] text-right">{product.quantity}</td>
                            <td className="w-[80px] text-right">{product.status}</td>
                            <th className="w-[120px] text-right">Ngày cập nhật</th>
                            <th className="w-[120px] text-right">Ngày cập nhật</th>
                            <th className="w-[50px]">
                                <button>
                                    +
                                </button>
                            </th>
                        </tr>
                    )
                })}
            </table>

        </div>
    );
}

export default ProductTable;