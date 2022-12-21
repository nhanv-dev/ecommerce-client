import React from 'react';
import {SellerLayout} from "../../../components/common/Layouts";
import Helmet from "../../../components/web/Helmet";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

function Statistical() {
    return (
        <SellerLayout>
            <Helmet title="Thống kê chung - Shopio">
                <div className="container max-w-[1400px] pb-[100px]">
                    <div className="flex gap-6 mb-6">
                        <div className="max-w-[1000px] w-[1000px]">
                            <BarChart/>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="basis-4/12">
                            <PieChart/>
                        </div>
                        <div className="basis-4/12">
                            <PieChart/>
                        </div>
                        <div className="basis-4/12">
                            <PieChart/>
                        </div>
                    </div>
                </div>
            </Helmet>
        </SellerLayout>
    );
}

export default Statistical;