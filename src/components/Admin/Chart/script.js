import React from 'react';
import Chart from "./index";
const labels = ['Tháng 1','Tháng 2','Tháng 3','Tháng 4','Tháng 4','Tháng 5','Tháng 6',
    'Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12']

const data = {
    labels: labels,
    datasets: [
        {
            label: 'Lượt truy cập',
            backgroundColor: 'blue',
            borderColor: 'blue',
            data: [10000, 20000, 56000, 34000, 24000, 53000,77000,4800,50000,65453,50000,99000,140000],
            tension: 0.4,
        },
        {
            label: 'Số doanh thu bằng USD',
            backgroundColor: 'green',
            borderColor: 'green',
            data: [1000,4545,1201,45000,123,147,999,1450,154,56,12445,45321,80000],
            tension: 0.4,
        },
        {
            label: 'Số người mua',
            backgroundColor: 'yellow',
            borderColor: 'yellow',
            data: [8500,13560,45120,22000,10003,35600,11000,1600,32000,36540,27890,95000,103458],
            tension: 0.4,
        },
        {
            label: 'Số người không mua',
            backgroundColor: 'red',
            borderColor: 'red',
            data: [1500,6440,10880,12000,13997,17400,66000,3200,18000,28913,22110,4000,36542],
            tension: 0.4,
        },
    ],
}
const config = {
    type: 'line',
    data: data,
}

const canvas = document.getElementById('canvas')
const chart = new Chart(canvas, config)