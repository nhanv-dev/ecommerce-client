import React from 'react';
import Header from "../../web/Header";
import Footer from "../../web/Footer";
import Chat from "../../web/Chat";
import ScrollButton from "../../web/ScrollButton";

const BuyerLayout = ({children}) => {
    return (
        <div className="w-full max-w-full relative">
            <Header/>
            <div className="bg-[#F2F3F7]">
                {children}
            </div>
            <ScrollButton/>
            <Chat/>
            <Footer/>
        </div>
    )
}
export default BuyerLayout;