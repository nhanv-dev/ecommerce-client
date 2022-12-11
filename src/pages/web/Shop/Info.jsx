import {formatBetweenDate} from "../../../utils/format";

function Info({shop}) {
    console.log(shop)
    return (
        <div className="container">
            <div className="bg-white rounded-[5px] mb-6 px-4 pt-2 pb-4">
               <span className="font-medium text-md italic ">
                   "{shop.slogan || "Mang đến không gian sống tiện nghi hơn"}"
               </span>
            </div>
            <div className="bg-white rounded-[5px] mb-6">
                <h5 className="px-4 pt-3 pb-4 border-b-[1px] border-[#e8e8e8] font-medium text-base">Hoạt động</h5>
                <div className="px-4 py-3">
                    <div className="mb-2">
                        <p className="font-medium">Thời gian hoạt động</p>
                        <p className="text-base text-[#828282]">{formatBetweenDate(shop.createdAt)}</p>
                    </div>
                    <div className="mb-2">
                        <p className="font-medium">Thời gian phản hồi</p>
                        <p className="text-base text-[#828282]">{shop.responseTime}</p>
                    </div>
                    <div className="mb-0">
                        <p className="font-medium">Tỉ lệ phản hồi</p>
                        <p className="text-base text-[#828282]">{shop.responseRate}%</p>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-[5px]">
                <h5 className="px-4 pt-3 pb-4 border-b-[1px] border-[#e8e8e8] font-medium text-base">Thông tin Shop</h5>
                <div className="px-4 py-3">
                    <div className="mb-2">
                        <p className="font-medium mb-1">Địa chỉ</p>
                        <p className="text-base text-[#828282]">{shop.address}</p>
                    </div>
                    <div className="mb-2">
                        <p className="font-medium mb-1">Email</p>
                        <p className="text-base text-[#828282]">{shop.email}</p>
                    </div>
                    <div className="mb-0">
                        <p className="font-medium mb-1">Số điện thoại</p>
                        <p className="text-base text-[#828282]">{shop.phone}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;