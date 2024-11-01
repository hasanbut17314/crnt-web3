import React from 'react';
import Chart from 'react-apexcharts';

const SalesPie = () => {
    const options = {
        chart: {
            type: 'pie',
        },
        labels: [
            "Sale Pre & Sale (33%)",
            "Liquidity (20%)",
            "Team/Advisors (12%)",
            "Marketing (20%)",
            "Reserve (10%)",
            "Content Creators (3%)",
            "Airdrop (2%)"
        ],
        colors: ["#66d9ef", "#e6555f", "#e8be0b", "#2196f3", "#ff9800", "#009688", "#8bc34a"],
        legend: {
            position: 'bottom',
            labels: {
                colors: '#fff',
            },
            itemMargin: {
                horizontal: 10
            },
            fontFamily: 'Outfit, sans-serif',
            fontSize: '15px',
            fontWeight: 400
        },
        dataLabels: {
            enabled: false
        }
    };

    const series = [33, 20, 12, 20, 10, 3, 2]; // Corresponding percentages for each label

    return (
        <div>
            <Chart options={options} series={series} type="pie" width="100%" height={420} />
        </div>
    );
};

export default SalesPie;
