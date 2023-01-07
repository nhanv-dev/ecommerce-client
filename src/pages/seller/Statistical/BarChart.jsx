import React, {useEffect, useState} from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import faker from 'faker';
import * as Icon from "@iconscout/react-unicons";
import Select from "react-select";
import {protectedRequest} from "../../../utils/requestMethods";
import {useSelector} from "react-redux";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const monthsLabel = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];
const dateLabel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

function BarChart({}) {
    const shop = useSelector(state => state.shop);
    const [labels, setLabels] = useState([...dateLabel]);
    const [option, setOption] = useState({
        type: "daily", title: 'Doanh thu tháng 12',
    })
    const [data, setData] = useState({
        labels,
        datasets: [
            {
                label: 'Doanh thu theo tháng',
                data: labels.map(() => faker.datatype.number({min: 10025000, max: 20561000})),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    })
    const [options, setOptions] = useState({
        responsive: true,
        plugins: {
            legend: {position: 'top',},
            title: {display: true, text: option.title,},
        },
    });

    useEffect(() => {
        if (!option || !shop) return;
        setOptions(prev => ({
            responsive: true,
            plugins: {
                legend: {position: 'top',},
                title: {display: true, text: option.title,},
            },
        }))
        setData(()=> ({
            labels,
            datasets: [
                {
                    label: 'Doanh thu theo tháng',
                    data: labels.map(() => faker.datatype.number({min: 10025000, max: 20561000})),
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                }
            ],
        }))
    }, [option, shop])
    const changeOptions = (data) => {
        setOption(prev => {
            return {
                ...prev.type, title: `Doanh thu ${data.label}`
            }
        })
    }
    const covert = () => {
        return monthsLabel.map(label => ({value: label, label: label}))

    }
    return (
        <div className="bg-white rounded-[8px] w-full">
            <div className="p-5 flex items-center gap-5 justify-between border-b border-[#efefef]">
                <h5 className="font-semibold text-base flex items-center gap-3">
                    <Icon.UilChart className="w-[26px] h-[26px]"/>
                    Thống kê doanh thu của cửa hàng
                </h5>
                <Select options={covert()}
                        onChange={(data) => changeOptions(data)}
                        className="outline-none"/>
            </div>
            <div className="p-5">
                <Bar options={options} data={data}/>
            </div>
        </div>
    );
}


export default BarChart;