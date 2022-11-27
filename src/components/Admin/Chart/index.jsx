import React from 'react';
import {Link} from "src/components/Admin/Chart/";
import "./style.css";
function Index() {
    return (
        <body>
            <div className="container_chart">
                <div className="title">Bảng thống kê doang thu</div>
                <canvas id ="canvas"></canvas>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/chart.js@4.0.1/dist/chart.umd.min.js"></script>
            <script src="script.js"></script>
        </body>

    );
}


export default Index;