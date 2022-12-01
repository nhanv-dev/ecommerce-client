import React from 'react';
import {formatCurrency} from "../../../utils/format";
import {useEffect, useState} from "react";
import * as Icon from "@iconscout/react-unicons";

function Footer({product, quantity}) {
    const [scrollTop, setScrollTop] = useState(0);
    const [color, setColor] = useState(undefined)

    useEffect(() => {
        const onScroll = (e) => {
            setScrollTop(e.target.documentElement.scrollTop);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop])

    return (
        <>
            {product &&
                <div
                    className={`bg-white fixed bottom-[0] py-2 z-50 left-0 right-0 overflow-hidden ${scrollTop >= 100 ? '' : 'hidden'}`}
                    style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                    <div className="container relative flex items-center justify-between gap-6">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center gap-3">
                                <div style={{backgroundImage: `url(${product.images[0].url})`}}
                                     className="border-[1px] min-w-[65px] min-h-[65px] overflow-hidden rounded-[5px] border-[#e7e8ea] bg-origin-content bg-center bg-cover bg-no-repeat">
                                </div>
                                <div className="">
                                    <p className="text-ellipsis font-medium line-clamp-1 overflow-hidden text-tiny">{product.name}</p>
                                    <span className="text-tiny font-medium">x {quantity}</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-primary font-bold text-lg">{formatCurrency(product.sell_price * quantity)}</p>
                            </div>
                        </div>
                        <div className="flex flex-1 items-center justify-start gap-2">
                            <button
                                className="flex items-center justify-center min-w-max rounded-[5px] w-[40px] h-[40px] p-3  bg-[#e7e8ea] text-[#3f4b53] hover:bg-[#F3F3F3] active:bg-[#e7e8ea] ">
                                <Icon.UilStore className="w-[20px] h-[20px] text-[#3f4b53]"/>
                            </button>
                            <button
                                className="flex items-center justify-center min-w-max rounded-[5px] w-[40px] h-[40px] p-3 bg-[#e7e8ea] text-[#3f4b53] hover:bg-[#F3F3F3] active:bg-[#e7e8ea] ">
                                <Icon.UilCommentAltLines className="w-[20px] h-[20px] text-[#3f4b53]"/>
                            </button>
                            <button
                                className="rounded-[5px] px-4  min-w-max bg-[#e7e8ea] text-[#3f4b53] px-4 h-[40px] min-w-[150px] hover:bg-[#F3F3F3] active:bg-[#e7e8ea] ">
                                <span className="font-bold text-[0.875rem]">Thêm vào giỏ</span>
                            </button>
                            <button
                                className="flex rounded-[5px] items-center justify-center flex-1 px-4 h-[40px] min-w-[400px] bg-primary text-white hover:bg-primary-hover active:bg-primary ">
                                <span className="font-bold text-[0.875rem]">Mua ngay</span>
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Footer;