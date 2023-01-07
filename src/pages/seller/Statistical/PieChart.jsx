import React, {useEffect, useState} from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';
import * as Icon from "@iconscout/react-unicons";
import {protectedRequest} from "../../../utils/requestMethods";
import {useSelector} from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);


function PieChart({}) {
    const [data, setData] = useState();
    const shop = useSelector(state => state.shop);

    useEffect(() => {
        protectedRequest().get(`/statisticals/category?shopId=${shop._id}`).then(res => {
            console.log(res)

            setData({
                labels: [...res.data.payload.map(i=>i.category.name)],
                datasets: [
                    {
                        label: '# of Votes',
                        data: [...res.data.payload.map(i=>i.total)],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                        ],
                        borderWidth: 1,
                    },
                ],
            })
        })
    },[])
    return (
        <div className="bg-white p-5 rounded-[8px] w-full">
            <div>
                <h5 className="font-bold text-base mb-5 flex items-center gap-3">
                    <Icon.UilChart className="w-[26px] h-[26px]"/>
                    Thống kê doanh thu của cửa hàng
                </h5>
            </div>
            {data && <Pie data={data}/>}
        </div>
    );
}

export default PieChart;
