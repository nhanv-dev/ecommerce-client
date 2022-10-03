import Helmet from "../../../components/web/Helmet";
import {BuyerLayout} from "../../../components/web/Layouts";
import {useParams} from "react-router-dom";
import "./style.scss";
import ProductCard from "../../../components/web/ProductCard";
import {useEffect, useState} from "react";
import axios from "axios";


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

function Category() {
    const {slug} = useParams();
    const [category, setCategory] = useState(null);
    const [products, setProducts] = useState([...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample])
    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/categories/slug/${slug}`).then(response => {
            setCategory(response.data.category)
        })
    }, [slug])

    useEffect(() => {
        if (!category) return;
        axios.get(`http://localhost:8080/api/v1/products?category=${category._id}&limit=32`).then(response => {
            // console.log(response.data.products)
        })
    }, [category])

    return (
        <BuyerLayout>
            <Helmet title={category ? `${category.name}` : 'Danh mục'}>
                <div className="container h-full">
                    <div className="flex gap-4 py-10 relative">
                        <div className="w-[18%]">
                            <div
                                className="scroll-component sticky top-[58px] left-0 z-20 overflow-y-scroll overflow-x-hidden max-h-[90vh]">
                                <div className="flex flex-col gap-3">
                                    {products.map((product, index) => {
                                        return (
                                            <div className="bg-white rounded-[8px] p-3.5 ">
                                                <h5>Nơi bán</h5>
                                                <div>
                                                    <p>TP.Hồ Chí Minh</p>
                                                    <p>Hà Nội</p>
                                                    <p>Đà nắng</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="grid grid-cols-5 gap-3">
                                {products.map((product, index) => {
                                    return (
                                        <ProductCard key={index} product={product}/>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </Helmet>
        </BuyerLayout>
    );
}

export default Category;