import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Title, ArcElement, Legend } from 'chart.js';

ChartJS.register(
    Tooltip,
    Title,
    ArcElement,
    Legend
);

function SipChart({totalInvested, wealthGained }) {
    // totalInvested = toFloat(totalInvested)
    const chartData = {
        labels: ["Total Invested", "Grown"],
        datasets: [
            {
                data: [totalInvested, wealthGained],
                backgroundColor: [
                    "#7139eb",
                    "greenyellow",
                    "orangered",
                    "#666699",
                    "#3399FF"
                ],
                hoverBackgroundColor: [
                    "#6224e6",
                    "#8BF905",
                    "orangered",
                    "#666699",
                    "#3399FF"
                ]
            }
        ]
    };

    // Generate a unique ID for the Chart instance
    const chartId = "chart-" + Math.random().toString(36).substr(2, 9);

    return (
        <div className="inline-block m-6">
            <Doughnut data={chartData} key={JSON.stringify(chartData)} id={chartId} />
        </div>
    );
}

export default SipChart;
