import Helmet from "../../components/Helmet";
import Layout from "../../components/Layout";
import {useParams} from "react-router-dom";
import "./style.scss";
import GridProductCard from "../../components/ProductCard";

const products = [
    {
        _id: '',
        name: 'Laptop HP VICTUS 16-e0177AX 4R0U9PA (16.1" Full HD/ 144Hz/AMD Ryzen 5 5600H/8GB/512GB SSD/NVIDIA GeForce GTX 1650/Windows 11/2.4kg)',
        description: '- CPU: AMD Ryzen 5 5600H\n' +
            '- Màn hình: 16.1" IPS (1920 x 1080), 144Hz\n' +
            '- RAM: 2 x 4GB DDR4 3200MHz\n' +
            '- Đồ họa: NVIDIA GeForce GTX 1650 4GB GDDR6 / AMD Radeon Graphics\n' +
            '- Lưu trữ: 512GB SSD M.2 NVMe /\n' +
            '- Hệ điều hành: Windows 11\n' +
            '- Pin: 4 cell 70 Wh Pin liền\n' +
            '- Khối lượng: 2.4 kg',
        price: '17.690.000',
        sellPrice: '17.690.000',
        type: '',
        sold: '32k',
        tags:['Ready to ship', 'Yêu thích'],
        images: [
            'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
        ]
    }
]

function Category() {
    const {slug} = useParams()
    return (
        <Layout type='customer'>
            <Helmet title={`Danh mục ${slug}`}>
                <div className="container">
                    <div className="grid grid-cols-5 gap-5 py-8">
                        {products.map((product, index) => {
                            return (
                                <GridProductCard key={index} product={product}/>
                            )
                        })}
                    </div>
                </div>
            </Helmet>
        </Layout>
    );
}

export default Category;