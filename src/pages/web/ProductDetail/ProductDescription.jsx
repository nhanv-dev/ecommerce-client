import {useState} from 'react';


function ProductDescription({product}) {
    const [isShow, setIsShow] = useState(false);

    return (
        <>
            {product &&
                <div className="rounded-[5px] min-h-[15rem] bg-white p-6 mb-6">
                    <div className={`overflow-hidden mb-3 h-${isShow ? '[20rem]' : 'auto'}`}>
                        <p className="font-bold text-lg mb-3">Mô tả sản phẩm</p>
                        <div dangerouslySetInnerHTML={{__html: product.description}} className="text-md mb-3"></div>
                        <p className="font-bold text-lg mb-3">Thông tin chi tiết</p>
                        <table className="table-auto w-[100%] rounded-lg">
                            <tbody>
                            {product.info?.map((info, index) => (
                                <tr key={index}
                                    className={`flex items-center h-[45px] px-4 font-medium text-md ${index % 2 === 0 && "bg-[#F2F3F4]"}`}>
                                    <td className="basis-1/3">{info.name}</td>
                                    <td className="basis-2/3">{info.value}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="relative">
                        <div
                            className="absolute border-none bg-gradient-to-b from-[#ECE9E92D] to-[#fff] h-[10rem] w-[100%] top-[-10rem]">
                            {isShow ?
                                <button
                                    className="rounded-[5px] font-bold px-4 py-2 w-[100%] bg-[#e7e8ea] text-[#3f4b53] hover:bg-[#F3F3F3] active:bg-[#e7e8ea]">
                                    Thu gọn
                                </button> :
                                <button
                                    className="rounded-[5px] px-4 py-2 w-[100%] absolute bottom-0 font-bold bg-[#e7e8ea] text-[#3f4b53] hover:bg-[#F3F3F3] active:bg-[#e7e8ea]">
                                    Xem thêm
                                </button>
                            }
                        </div>
                    </div>
                </div>
            }
        </>

    );
}

export default ProductDescription;