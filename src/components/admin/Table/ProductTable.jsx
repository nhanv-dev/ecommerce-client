import {useEffect, useState} from "react";
import {formatCurrency} from "../../../utils/format";

const sample = [
    {
        name: 'Laptop HP 15s-fq2660TU 6K793PA (15.6" HD/Intel Core i3-1115G4/4GB/512GB SSD/Windows 11 Home/1.7kg)',
        description: '<p>- CPU: Intel Core i3-1115G4 - M&agrave;n h&igrave;nh: 15.6&quot; (1366 x 768) - RAM: 1 x 4GB DDR4 3200MHz - &#272;&#7891; h&#7885;a: Intel UHD Graphics - L&#432;u tr&#7919;: 512GB SSD M.2 NVMe / - H&#7879; &#273;i&#7873;u h&agrave;nh: Windows 11 Home - Pin: 3 cell 41 Wh Pin li&#7873;n - Kh&#7889;i l&#432;&#7907;ng: 1.7 kg</p>',
        sell_price: 17690000,
        type: '',
        sold: '32k',
        quantity: '785',
        brand: 'HP',
        slug: 'san-pham-1',
        status: 'Còn hàng',
        tags: ['Ready to ship', 'Yêu thích', 'Yêu thích', 'Yêu thích', 'Yêu thích'],
        images: [
            'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
            'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
            'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
            'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        ],
        variants: [
            {
                name: 'Màu sắc',
                options: [
                    {name: 'Đỏ', price: '3000'},
                    {name: 'Xanh', price: '3000'},
                    {name: 'Vàng', price: '3000'},
                ]
            }
        ]
    },
]

function ProductTable() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts([...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample,])
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