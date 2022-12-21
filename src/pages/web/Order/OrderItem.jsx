import React, {useEffect, useState} from 'react';
import * as Icon from "@iconscout/react-unicons";
import ImageNotFound from "../../../assets/img/image-not-found.jpg";

function OrderItem({order}) {
    const [filter, setFilter] = useState([])

    useEffect(() => {
        const array = [];
        order?.items?.forEach(item => {
            if (array.filter(obj => obj?.shop?._id === item?.product?.shop?._id).length > 0) {
                array.forEach(obj => obj?.shop?._id === item?.product?.shop?._id && obj.items.push({...item}))
            } else {
                array.push({shop: {...item?.shop}, items: [{...item}]})
            }
        })
        setFilter(array)
    }, [order])

    useEffect(() => {
        console.log(filter)
    }, [filter])

    return (
        <div className="">
            <div className="flex items-center justify-between gap-6 mb-5">
                <p className="font-medium text-md">{order._id}</p>
                <div className="flex items-center gap-3">
                    <StatusOrder order={order}/>
                    <div className="font-medium text-[#0000001f]">|</div>
                    <button className="flex items-center gap-2 font-medium text-md text-primary-hover">
                        <Icon.UilStar className="w-[16px] h-[16px] relative top-[-1px]"/>
                        Đánh giá
                    </button>
                </div>
            </div>
            <div>
                {order.items.length > 0 &&
                    order.items.map((item, index) => (
                        <div key={index}>
                            <div className="flex items-start">
                                <div className="w-[120px] h-[120px] bg-cover bg-center"
                                     style={{backgroundImage: `url(${item.product.images?.length > 0 ? item.product.images[0].url : ImageNotFound})`}}>
                                </div>
                                <div>
                                    <p className="font-medium ">
                                        {item.product.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

const FilterOrder=({order})=> {
    return (
        <div>

        </div>
    )
}

const StatusOrder = ({order}) => {
    return (
        <div className="flex items-center gap-2 font-medium text-md text-[#26aa99]">
            <Icon.UilSpinnerAlt className="w-[16px] h-[16px]"/>
            {order.status === "Processing" && "Đang xử lý"}
        </div>
    )
}

export default OrderItem;