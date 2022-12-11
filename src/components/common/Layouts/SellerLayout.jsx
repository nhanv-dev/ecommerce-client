import React from 'react';
import Header from "../../seller/Header";
import Sidebar from "../../seller/Sidebar";

const SellerLayout = ({children}) => {
    return (
        <div className="w-full max-w-full relative">
            <Header></Header>
            <Sidebar></Sidebar>
            <div className="ml-[66px] mt-[75px] py-10 bg-[#F3F6F9] min-h-[100vh]">
                {children}
            </div>
        </div>
    )
}
export default SellerLayout;