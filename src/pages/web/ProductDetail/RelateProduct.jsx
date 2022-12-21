import React, {useState, useEffect, useContext} from 'react';
import {SocketContext} from "../../../service/socket";
import Helmet from "../../../components/web/Helmet";
import {UserLayout} from "../../../components/common/Layouts";
import "./style.scss";
import {useSelector} from "react-redux";
import ProductCard from "../../../components/web/ProductCard";
import {publicRequest} from "../../../utils/requestMethods";


function RelateProduct({extendProduct}) {
    return (

        <div className="container">
            <div className="flex-1 pb-5">
                <div className="grid grid-cols-6 gap-3">
                    {extendProduct.map((product, index) => {
                        return (
                            <ProductCard key={index} product={product}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default RelateProduct;