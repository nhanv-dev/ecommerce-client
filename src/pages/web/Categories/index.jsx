import {useState, useEffect, useContext} from 'react';
import {SocketContext} from "../../../service/socket";
import constants from "../../../common/Constants";
import Helmet from "../../../components/web/Helmet";
import {BuyerLayout} from "../../../components/common/Layouts";
import {Link} from "react-router-dom";
import {publicRequest} from "../../../utils/requestMethods";

function Categories() {
    const socket = useContext(SocketContext);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        publicRequest.get("/categories").then((res) => {
            setCategories([...res.data.categories])
        })
    }, [socket])

    return (
        <BuyerLayout>
            <Helmet title="Danh mục">
                <div className="container py-8">
                    {categories.map((category, index) => {
                        if (!category.parentId) {
                            const subCategories = categories.filter(subCategory => subCategory.parentId === category._id)
                            return (
                                <div className="mb-5" key={index}>
                                    <div className="flex mb-5 items-center justify-center">
                                        <Link to={category.slug || '/'}
                                              className="uppercase font-bold text-lg text-primary">
                                            {category.name}
                                        </Link>
                                    </div>
                                    <SubCategories categories={subCategories}/>
                                </div>
                            )
                        }
                    })}
                </div>
            </Helmet>
        </BuyerLayout>
    );
}

const SubCategories = ({categories}) => {
    return (
        <div className="grid grid-cols-6 mx-[-.5rem]">
            {categories.map((category, index) => {
                return (
                    <Link key={index} to={category.slug || "/"}
                          className="hover:text-primary hover:border-primary border-[1px] border-white transition-all min-h-[4rem] bg-white m-2 p-4 flex items-center justify-center text-center rounded-[4px] text-tiny font-medium text-gray">
                        {category.name}
                    </Link>
                )
            })
            }
        </div>
    )
}

export default Categories;