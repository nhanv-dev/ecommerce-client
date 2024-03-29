import React, {useEffect, useRef, useState} from 'react';
import {SellerLayout} from "../../../components/common/Layouts";
import Helmet from "../../../components/web/Helmet";
import * as Icon from "@iconscout/react-unicons";
import {useSelector} from "react-redux";
import {protectedRequest, publicRequest} from "../../../utils/requestMethods";
import {useParams} from "react-router-dom";
import Editor from "./Editor";
import {formatCurrency, formatLongDate} from "../../../utils/format";
import ModalCategory from "../../../components/seller/ModalCategory";

function Product() {
    const {slug} = useParams();
    const user = useSelector(state => state.user);
    const [product, setProduct] = useState({});
    const [showCategory, setShowCategory] = useState(false);
    const [showSubCategory, setShowSubCategory] = useState(false);
    const [category, setCategory] = useState({parent: {}, child: {}});

    useEffect(() => {
        publicRequest.get(`/products?slug=${slug}`).then(res => {
            setProduct({...res.data.product})
            setCategory({
                parent: {...res.data.category.parent},
                child: {...res.data.category.child},
            })
        })
    }, [user])

    useEffect(() => {
        setProduct(prev => ({...prev, categoryId: category.child?._id || category.parent?._id}))
    }, [category])

    const handleSave = async () => {
        protectedRequest.put(`/products/${product._id}`, {product}).then(res => {
            setProduct({...res.data.product})
            setCategory({
                parent: {...res.data.category.parent},
                child: {...res.data.category.child},
            })
        })
    }

    return (
        <SellerLayout>
            <Helmet title={`${product.name + ' - Shopio'}`}>
                <div className="container max-w-[1400px] pb-[100px]">
                    <div className="flex gap-6">
                        <div className="w-4/12">
                            <div className="rounded-[6px] bg-white p-5 shadow-md">
                                <Images images={product?.images}/>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="rounded-[6px] bg-white p-5 shadow-md">
                                <div className="flex items-center justify-between">
                                    <h5 className="font-bold text-base mb-3">
                                        Thông tin sản phẩm
                                    </h5>
                                    <p className="font-medium text-tiny text-[#6f787e]">
                                        Cập nhật lần cuối: {formatLongDate(product.updatedAt)}
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <p className="mb-2 text-md font-semibold">Tên sản phẩm:</p>
                                    <div className="shadow-md bg-white w-full mb-4 rounded-[5px] p-3">
                                        <input type="text" value={product?.name || ""}
                                               onChange={(e) => setProduct(prev => ({...prev, name: e.target.value}))}
                                               className="text-black-1 font-medium text-md w-full outline-none"/>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <ModalCategory category={category}
                                                   setCategory={setCategory}
                                                   showCategory={showCategory}
                                                   showSubCategory={showSubCategory}
                                                   setShowCategory={setShowCategory}
                                                   setShowSubCategory={setShowSubCategory}/>
                                    <p className="mb-2 text-md font-semibold">Loại sản phẩm</p>
                                    <div className="flex items-center gap-3">
                                        <button onClick={() => setShowCategory(true)}
                                                className="flex items-center justify-between gap-3 min-w-max max-w-[300px] shadow-md bg-white rounded-[5px] p-3">
                                            <p className="flex-1 text-black-1 font-medium text-md w-full outline-none">
                                                {category?.parent?.name || 'Chọn loại sản phẩm'}
                                            </p>
                                            <Icon.UilEditAlt
                                                className="w-[18px] h-[18px] min-w-[18px] min-h-[18px]"/>
                                        </button>
                                        <Icon.UilAngleRightB
                                            className="w-[18px] h-[18px] min-w-[18px] min-h-[18px]"/>
                                        <button onClick={() => setShowSubCategory(true)}
                                                className="flex items-center justify-between gap-3 min-w-max max-w-[300px] shadow-md bg-white rounded-[5px] p-3">
                                            <p className="flex-1 text-black-1 font-medium text-md w-full outline-none">
                                                {category?.child?.name || 'Chọn loại sản phẩm'}
                                            </p>
                                            <Icon.UilEditAlt
                                                className="w-[18px] h-[18px] min-w-[18px] min-h-[18px]"/>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5">
                                    <div className="basis-4/12">
                                        <p className="mb-2 text-md font-semibold">Giá:</p>
                                        <div className="shadow-md bg-white w-full mb-4 rounded-[5px] p-3">
                                            <input type="text" value={formatCurrency(product?.sellPrice) || ""}
                                                   onChange={(e) => setProduct(prev => ({
                                                       ...prev, sellPrice: e.target.value
                                                   }))}
                                                   className="text-black-1 font-medium text-md w-full outline-none"/>
                                        </div>
                                    </div>
                                    <div className="basis-4/12">
                                        <p className="mb-2 text-md font-semibold">Giảm giá:</p>
                                        <div
                                            className="flex items-center justify-between shadow-md bg-white w-full mb-4 rounded-[5px] p-3">
                                            <input type="text" value={product?.discountPercent || ""}
                                                   onChange={(e) => setProduct(prev => ({
                                                       ...prev, discountPercent: e.target.value
                                                   }))}
                                                   className="text-black-1 font-medium text-md w-full outline-none"/>
                                            <p>%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <p className="mb-2 text-md font-semibold">Mô tả sản phẩm:</p>
                                    <Editor product={product} setProduct={setProduct}/>
                                </div>
                                <div className="w-full flex items-center justify-end gap-3">
                                    <button
                                        className="outline-none flex items-center justify-center gap-1 py-2 px-3 rounded-[5px] bg-[#e7e7e7] text-black font-semibold text-tiny">
                                        <Icon.UilBan className="w-[20px] h-[20px]"/>
                                        <span className="leading-3">Ngưng bán</span>
                                    </button>
                                    <button onClick={handleSave}
                                            className="outline-none flex items-center justify-center gap-1 py-2 px-3 rounded-[5px] bg-[#4CAF50] text-white font-semibold text-tiny">
                                        <Icon.UilSave className="w-[20px] h-[20px]"/>
                                        <span className="leading-3">Lưu thay đổi</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Helmet>
        </SellerLayout>
    );
}

const Images = ({images}) => {
    const ref = useRef(null);
    const [active, setActive] = useState(0);

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };
    const deleteImage = () => {
        images = images.filter((image, index) => index !== active);
        console.log(images.length)
        setActive((prev) => prev - 1 < 0 ? 0 : prev - 1)
    }

    return (
        <div className="w-full">
            <h5 className="font-bold text-base mb-3">
                Hình ảnh sản phẩm ({images?.length}+)
            </h5>
            <div className="mb-5">
                <div
                    className="group relative w-full h-[400px] overflow-hidden border border-border rounded-[8px] flex items-center justify-center">
                    <img src={images && images[active] ? images[active].url : ''} alt="Product"
                         className="w-full rounded-[8px] relative "/>
                    <div className="absolute right-[10px] top-[10px] z-10">
                        <button onClick={deleteImage}
                                className="mb-2 w-[36px] h-[36px] flex items-center justify-center rounded-full bg-[#D8EAFF]">
                            <Icon.UilImageTimes className="text-[#1CAC93] w-[18px] h-[18px]"/>
                        </button>
                        <button
                            className="w-[36px] h-[36px] flex items-center justify-center rounded-full bg-[#D8EAFF]">
                            <Icon.UilExpandRight className="text-[#1CAC93] w-[18px] h-[18px]"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="relative flex justify-center">
                <button onClick={() => scroll(-100)}
                        className="absolute left-[-16px] top-[50%] translate-y-[-50%] z-10 w-[32px] h-[32px] flex items-center justify-center rounded-full bg-[#D8EAFF]">
                    <Icon.UilAngleLeftB className="text-[#1CAC93] w-[18px] h-[18px]"/>
                </button>
                <div ref={ref}
                     className="scroll-smooth w-full flex gap-[10px] items-center justify-start w-full overflow-hidden">
                    {images?.map((image, index) => (
                        <div key={index} className="relative">
                            <button
                                onClick={() => setActive(index)}
                                className={`transition-all outline-none min-w-[80px] min-h-[80px] bg-cover bg-center rounded-[5px] border-2  
                                 ${index === active ? 'border-2 border-primary' : 'border-border'}`}>
                                <img src={image.url} alt="Product" className="w-full rounded-[5px]"/>
                            </button>
                        </div>
                    ))}
                </div>
                <button onClick={() => scroll(100)}
                        className="absolute right-[-16px] top-[50%] translate-y-[-50%] z-10 w-[32px] h-[32px] flex items-center justify-center rounded-full bg-[#D8EAFF]">
                    <Icon.UilAngleRightB className="text-[#1CAC93] w-[18px] h-[18px]"/>
                </button>
            </div>
        </div>
    )
}

export default Product;