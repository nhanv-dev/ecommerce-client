import {useEffect, useState} from "react";
import {formatCurrency, formatDate, formatLongDate, formatSmallDate} from "../../../utils/format";
import {publicRequest} from "../../../utils/requestMethods";
import * as Icon from "@iconscout/react-unicons";
import {Link} from "react-router-dom";

function ProductTable({products}) {
    console.log(products)
    return (
        <div className="w-full">
            {/*<div className="flex justify-start gap-5 items-center text-md font-bold text-black-1 capitalize pb-3">*/}
            {/*    <div className="w-[15px] text-left">#</div>*/}
            {/*    <th className="flex-1 text-left">Sản phẩm</th>*/}
            {/*    <th className="w-[120px] text-right">Giá</th>*/}
            {/*    <th className="w-[120px] text-center">Số lượng</th>*/}
            {/*    <th className="w-[100px] text-right">Thao tác</th>*/}
            {/*</div>*/}
            <div>
                {products.map((product, index) => {
                    return (
                        <div key={index} className="border-t py-4 border-dashed border-[#efefef]">
                            <div className="ml-[35px] flex items-center gap-5 justify-between mb-3">
                                <div className="flex items-center gap-3 text-tiny font-medium text-black-1">
                                    <p>{product.assess} đánh giá</p>
                                    <p>|</p>
                                    <p className="flex items-center justify-center gap-1">
                                        {product.rating}
                                        <Icon.UilStar className="w-[16px] h-[16px]"/>
                                    </p>
                                </div>
                                <div className="flex items-center gap-5 justify-end">
                                    <p className="text-tiny font-medium text-black-1">
                                        Ngày thêm: {formatLongDate(product.createdAt)}
                                    </p>
                                    <p className="text-tiny font-medium text-black-1">
                                        Cập nhật lần cuối: {formatLongDate(product.updatedAt)}
                                    </p>
                                </div>
                            </div>
                            <tr
                                className="flex justify-start gap-5 items-center font-medium text-md text-black-1 capitalize">

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
                                                {product.totalStock <= 0 &&
                                                    <p className="text-[11px] font-medium bg-[#B22222] w-max px-2 py-0.5 rounded-full text-white">
                                                        {product.status || 'Hết hàng'}
                                                    </p>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="w-[120px] text-right">
                                    <p className="font-semibold text-primary-hover text-base">
                                        {formatCurrency(product.basePrice || 0)}
                                    </p>
                                </td>
                                <td className="w-[120px] text-center font-semibold">{product.totalStock}</td>
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

                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ProductTable;