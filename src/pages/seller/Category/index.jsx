import React from 'react';
import {SellerLayout} from "../../../components/common/Layouts";
import Helmet from "../../../components/web/Helmet";
import {ProductTable} from "../../../components/seller/Table";

function Category(props) {

    return (
        <SellerLayout>
            <Helmet title="Kênh bán hàng - Shopio">
                <div className="container max-w-[1400px]">
                    <div className="flex flex-wrap gap-6">
                        <div className="basis-3/12">
                            <div className="rounded-[6px] bg-white p-8 shadow-md">
                                s
                            </div>
                        </div>
                        <div className="flex-1">
                            <ProductTable></ProductTable>
                        </div>
                    </div>
                </div>
            </Helmet>
        </SellerLayout>
    );
}

export default Category;