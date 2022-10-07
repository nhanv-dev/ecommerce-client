import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './style.scss';
import Helmet from "../../../components/web/Helmet";
import {BuyerLayout} from "../../../components/common/Layouts";
import axios from "axios";

function ProductDetail() {
    const {slug} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/v1/product/${slug}`)
            .then((response) => {
                console.log(response)
            })
    }, [slug])

    return (
        <BuyerLayout>
            <Helmet title={slug}>
                <div className="container">
                    <div>{slug}</div>
                </div>
            </Helmet>
        </BuyerLayout>
    );
}

export default ProductDetail;