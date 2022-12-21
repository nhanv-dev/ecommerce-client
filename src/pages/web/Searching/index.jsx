import "./style.scss";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {UserLayout} from "../../../components/common/Layouts";
import Helmet from "../../../components/web/Helmet";
import {publicRequest} from "../../../utils/requestMethods";
import ShopCard from "../../../components/web/ShopCard";

function Searching() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    const [shops, setShops] = useState([]);

    useEffect(() => {
        setSearch(searchParams.get("s"))
        setType(searchParams.get("t"))
    }, [searchParams])

    useEffect(() => {
        if (type !== "cua-hang") return
        publicRequest.get(`/shops/search?searching=${search}`).then(res => {
            setShops(res.data.shops)
        })
    }, [type, search])

    return (
        <UserLayout>
            <Helmet title="Tìm kiếm - Shopio">
                <div className="container py-8">
                    {type === "cua-hang" && <SearchByShop search={search} shops={shops}/>}
                </div>
            </Helmet>
        </UserLayout>
    );
}

const SearchByShop = ({search, shops}) => {
    return (
        <div className="w-full">
            <h5 className="font-medium text-base mb-5">Shop liên quan đến "{search}"</h5>
            {shops.length === 0 && <div>Không tìm thấy kết quả nào liên quan</div>}
            <div>
                {shops.map((shop, index) => (
                    <div key={index} className="mb-6">
                        <ShopCard shop={shop}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Searching;