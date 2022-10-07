import React from 'react';
import Header from "../../web/Header";
import Footer from "../../web/Footer";
import Chat from "../../web/Chat";

const SellerLayout = ({children}) => {
    return (
        <div className="w-full max-w-full relative">
            <Header/>
            <div className="bg-[#F2F3F7]">
                {children}
            </div>
            <Chat/>
            <Footer/>
        </div>
    )
}
export default SellerLayout;