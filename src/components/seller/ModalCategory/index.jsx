import {useEffect, useState} from 'react';
import {publicRequest} from "../../../utils/requestMethods";
import * as Icon from "@iconscout/react-unicons";

function ModalCategory({category, setCategory, showCategory, showSubCategory, setShowCategory, setShowSubCategory}) {
    const [categories, setCategories] = useState();

    useEffect(() => {
        if (showSubCategory || showCategory) document.body.classList.add('overflow-hidden');
        else document.body.classList.remove('overflow-hidden');
    }, [showSubCategory, showCategory])

    useEffect(() => {
        if (!showSubCategory) return;
        publicRequest.get(`/categories/children?parentId=${category.parent._id}`).then(res => {
            setCategories(res.data.categories)
        })
    }, [showSubCategory, setShowSubCategory])

    useEffect(() => {
        if (!showCategory) return;
        publicRequest.get("/categories/parents").then(res => {
            setCategories(res.data.categories)
        })
    }, [showCategory, setShowCategory])

    const handleClose = () => {
        setShowCategory(false)
        setShowSubCategory(false)
    }

    const handleSetCategory = (index) => {
        if (showCategory) setCategory(prev => ({parent: categories[index], child: {}}))
        if (showSubCategory) setCategory(prev => ({...prev, child: categories[index]}))
        handleClose()
    }
    return (
        <div onClick={handleClose}
             className={`fixed top-0 left-0 right-0 bottom-0 z-[50] after:absolute after:bg-[#000] after:opacity-40 after:top-0 after:left-0 after:right-0 after:bottom-0 transition-all ${showCategory || showSubCategory ? 'visible opacity-100' : 'invisible opacity-0'}`}>
            <div
                className="shadow-md rounded-[5px] z-[50] bg-white shadow-md fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] min-w-[400px]">
                <div className="p-3">
                    <p className="font-semibold text-base mb-5">
                        Chọn loại sản phẩm
                    </p>
                    <div className="max-h-[300px] overflow-y-auto scroll-component">
                        {categories?.map((cate, index) => (
                            <button key={index} onClick={() => handleSetCategory(index)}
                                    className="block transition-all rounded-[4px] font-medium text-md hover:text-primary hover:bg-[#fde5e4] px-3 py-2 w-full text-left">
                                {cate.name}
                            </button>
                        ))}
                    </div>
                </div>
                <button onClick={handleClose}
                        className="absolute z-[60] right-[-10px] top-[-10px] w-[26px] h-[26px] flex items-center justify-center bg-primary-hover text-white rounded-full">
                    <Icon.UilTimes className="w-[18px] h-[18px]"/>
                </button>
            </div>
        </div>

    );
}

export default ModalCategory;
