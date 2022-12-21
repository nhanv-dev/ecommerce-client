import React, {useState} from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import faker from 'faker';
import * as Icon from "@iconscout/react-unicons";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const monthsLabel = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];
const dateLabel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function BarChart({}) {
    const [labels, setLabels] = useState([...dateLabel]);

    const [data, setData] = useState({
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({min: 0, max: 1000})),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            // {
            //     label: 'Dataset 2',
            //     data: labels.map(() => faker.datatype.number({min: 0, max: 1000})),
            //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
            // },
        ],
    })
    const [options, setOptions] = useState({
        responsive: true,
        plugins: {
            legend: {position: 'top',},
            title: {display: true, text: 'Doanh thu',},
        },
    })

    return (
        <div className="bg-white rounded-[8px] w-full">
            <div className="p-5 flex items-center gap-5 justify-between border-b border-[#efefef]">
                <h5 className="font-semibold text-base flex items-center gap-3">
                    <Icon.UilChart className="w-[26px] h-[26px]"/>
                    Thống kê doanh thu của cửa hàng
                </h5>
                <button>
                    asd
                </button>
            </div>
            <div className="p-5">
                <Bar options={options} data={data}/>
            </div>
        </div>
    );
}


export default BarChart;