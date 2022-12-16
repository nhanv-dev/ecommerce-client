import {useEffect, useState} from "react";
import {formatCurrency, formatDate, formatLongDate, formatSmallDate} from "../../../utils/format";
import {publicRequest} from "../../../utils/requestMethods";
import * as Icon from "@iconscout/react-unicons";
import {Link} from "react-router-dom";

function ProductTable({products}) {

    return (
        <table className="w-full">
            <thead>
            <tr className="flex justify-start gap-5 items-center text-md font-bold text-black-1 capitalize pb-3">
                <th className="w-[15px] text-left">#</th>
                <th className="flex-1 text-left">Sản phẩm</th>
                <th className="w-[120px] text-right">Giá</th>
                <th className="w-[120px] text-center">Số lượng</th>
                <th className="w-[160px] text-right">Ngày cập nhật</th>
                <th className="w-[100px] text-right">Thao tác</th>
            </tr>
            </thead>
            <tbody>
            {products.map((product, index) => {
                return (
                    <tr key={index}
                        className="flex justify-start gap-5 items-center font-medium text-md text-black-1 capitalize border-t py-4 border-dashed border-[#efefef]">
                        <td className="w-[15px] text-left">{index + 1}</td>
                        <td className="flex-1 text-left">
                            <div className="flex items-start gap-3">
                                <Link to={`/kenh-ban-hang/san-pham/${product.slug}`}
                                    style={{backgroundImage: `url(${product.images ? product.images[0].url : 'https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png'})`}}
                                    className="bg-cover bg-center w-[80px] h-[80px] overflow-hidden flex items-center justify-center rounded-[5px] border border-[#efefef]">
                                </Link>
                                <div className="flex-1">
                                    <Link to={`/kenh-ban-hang/san-pham/${product.slug}`}
                                          className="text-md font-medium line-clamp-2 mb-2">
                                        {product.name}
                                    </Link>
                                    <div className="flex flex-wrap items-center justify-start gap-1.5">
                                        <p className="text-[11px] font-medium bg-[#4682B4] w-max px-2 py-0.5 rounded-full text-white">
                                            {product.status || 'Được quan tâm'}
                                        </p>
                                        <p className="text-[11px] font-medium bg-[#008000] w-max px-2 py-0.5 rounded-full text-white">
                                            {product.status || 'Đang bán'}
                                        </p>
                                        <p className="text-[11px] font-medium bg-[#B22222] w-max px-2 py-0.5 rounded-full text-white">
                                            {product.status || 'Hết hàng'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className="w-[120px] text-right">
                            <p className="font-semibold text-primary-hover text-base">
                                {formatCurrency(product.sellPrice)}
                            </p>
                        </td>
                        <td className="w-[120px] text-center font-semibold">{product.quantity}</td>
                        <th className="w-[160px] text-right">
                            <p className="text-tiny font-medium">
                                {formatLongDate(product.updatedAt)}
                            </p>
                        </th>
                        <th className="w-[100px] text-right">
                            <div className="w-full flex items-center justify-end gap-2">
                                <Link to={`/kenh-ban-hang/san-pham/${product.slug}`}
                                      className="bg-[#f5f5f5] flex items-center justify-center rounded-[50px] w-[32px] h-[32px]">
                                    <Icon.UilEdit className="w-[18px] h-[18px]"/>
                                </Link>
                                <Link to={`/san-pham/${product.slug}`}
                                      className="bg-[#f5f5f5] flex items-center justify-center rounded-[50px] w-[32px] h-[32px]">
                                    <Icon.UilAirplay className="w-[18px] h-[18px]"/>
                                </Link>
                            </div>
                        </th>
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
}

export default ProductTable;