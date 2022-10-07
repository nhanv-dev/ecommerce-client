import "./style.scss";
import {useParams, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {BuyerLayout} from "../../../components/common/Layouts";
import Helmet from "../../../components/web/Helmet";

function Search() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const products = [
            {
                _id: 'pigeonvnofficial',
                name: 'pigeonvnofficial',
                avatar: 'https://cf.shopee.vn/file/681dd7348ef4192f67f05a3bfaa6be1a_tn',
                slug: 'pigeonvnofficial',

            }
        ];
        setProducts(products);
    }, [params])


    return (
        <BuyerLayout>
            <Helmet title="Tìm kiếm sản phẩm">
                <div className="container py-8">

                </div>
            </Helmet>
        </BuyerLayout>
    );
}

export default Search;