import {useEffect, useState} from "react";
import {formatCurrency} from "../../../utils/format";
import {publicRequest} from "../../../utils/requestMethods";
import * as Icon from "@iconscout/react-unicons";

function ProductTable() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        publicRequest.get("/products").then(res => {
            console.log(res)
        })
        setProducts([{
            name: 'laptop', sellPrice: 12000000, quantity: 32,
        }])
    }, [])

    return (
        <div className="rounded-[6px] bg-white p-8 shadow-md">
            <table className="w-full">
                <tr className="flex justify-start gap-5 items-center text-md font-bold text-black-1 capitalize pb-3">
                    <th className="w-[30px] text-left">#</th>
                    <th className="flex-1 text-left">Sản phẩm</th>
                    <th className="basis-1/12 text-right">Giá</th>
                    <th className="basis-1/12 text-right">Số lượng</th>
                    <th className="basis-2/12 text-right">Trạng thái</th>
                    <th className="basis-2/12 text-right">Ngày cập nhật</th>
                    <th className="basis-1/12 text-right">Thao tác</th>
                </tr>
                {products.map((product, index) => {
                    return (
                        <tr key={index}
                            className="flex justify-start gap-5 items-center text-md font-semibold text-black-1 capitalize border-t py-4 border-dashed border-[#efefef]">
                            <td className="w-[30px] text-left">{index + 1}</td>
                            <td className="flex-1">
                                <div className="flex items-center gap-5">
                                    <div
                                        style={{backgroundImage: `url(${product.images ? product.images[0].url : 'https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png'})`}}
                                        className="bg-cover bg-center w-[85px] h-[85px] overflow-hidden flex items-center justify-center rounded-[5px] border border-[#efefef]">
                                    </div>
                                    <div className="flex-1 line-clamp-2">
                                        {product.name}
                                    </div>
                                </div>
                            </td>
                            <td className="w-[150px] text-right">
                                {formatCurrency(product.sellPrice)}
                            </td>
                            <td className="basis-1/12 text-right">{product.quantity}</td>
                            <td className="basis-2/12 text-right">{product.status}</td>
                            <th className="basis-2/12 text-right">{product.updatedAt}</th>
                            <th className="basis-1/12">
                                <div className="w-full flex items-center justify-end gap-2">
                                    <button className="bg-[#f5f5f5] flex items-center justify-center rounded-[50px] w-[32px] h-[32px]">
                                        <Icon.UilPlus className="w-[18px] h-[18px]"/>
                                    </button>
                                    <button className="bg-[#f5f5f5] flex items-center justify-center rounded-[50px] w-[32px] h-[32px]">
                                        <Icon.UilEdit className="w-[18px] h-[18px]"/>
                                    </button>
                                    <button className="bg-[#f5f5f5] flex items-center justify-center rounded-[50px] w-[32px] h-[32px]">
                                        <Icon.UilAirplay className="w-[18px] h-[18px]"/>
                                    </button>
                                </div>
                            </th>
                        </tr>
                    )
                })}
            </table>

        </div>
    );
}

export default ProductTable;