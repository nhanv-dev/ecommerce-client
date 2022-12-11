import {useEffect, useState} from "react";
import ProductCard from "../../../components/web/ProductCard";
import ProductExample from "../../../common/ProductExample";

function Product(props) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts([...Array(10)].map(item => ({...ProductExample})))
    }, [])
    return (
        <div className="container">
            <div className="grid grid-cols-6 gap-3">
                {products.map((product, index) => {
                    return (
                        <ProductCard key={index} product={product}/>
                    )
                })}
            </div>
        </div>
    );
}

export default Product;