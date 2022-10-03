import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import Chat from "../Chat";

const BuyerLayout = ({children}) => {
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
export default BuyerLayout;