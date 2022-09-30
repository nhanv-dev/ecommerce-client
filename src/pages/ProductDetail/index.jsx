import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './style.scss';
import Helmet from "../../components/Helmet";
import {BuyerLayout} from "../../components/Layouts";

function ProductDetail() {
    const {slug} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {

    }, [slug])

    return (
        <BuyerLayout>
            <Helmet title={slug}>
                <div>{slug}</div>
            </Helmet>
        </BuyerLayout>
    );
}

export default ProductDetail;