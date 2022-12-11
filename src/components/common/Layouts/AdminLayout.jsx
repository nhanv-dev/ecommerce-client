import React from 'react';
import Header from "../../admin/Header";
import Sidebar from "../../admin/Sidebar";

const AdminLayout = ({children}) => {
    return (
        <div className="w-full max-w-full relative">
            <Header></Header>
            <Sidebar></Sidebar>
            <div className="ml-[66px] mt-[76px] py-5 bg-[#F3F6F9] min-h-[100vh]">
                {children}
            </div>
        </div>
    )
}
export default AdminLayout;