import React from 'react';
import Header from "../Header";
import Footer from "../Footer";

function Layout(props) {
    return (<>
        {(!props.type || props.type === 'customer')
            && <CustomerLayout children={props.children}/>}
        {props.type === 'admin'
            && <AdminLayout children={props.children}/>}
        {props.type === 'seller'
            && <SellerLayout children={props.children}/>}
    </>);
}

const CustomerLayout = ({children}) => {
    return (
        <div className="w-full max-w-full">
            <Header></Header>
            <div className="bg-[#F2F3F7]">
                {children}
            </div>
            <Footer></Footer>
        </div>
    )
}
const AdminLayout = ({children}) => {
    return (<>{children}</>)
}
const SellerLayout = ({children}) => {
    return (<>{children}</>)
}
export default Layout;