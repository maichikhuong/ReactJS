import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


let shape_explain_from_confidon = [-2.31, -1.49, 0.83, 0.83, 0.57, -0.56, -0.42, -0.41, 0.37, 0.49]

const MyChart = () => {

  const [chartData, setChartData] = useState({
    labels: [
      'NB_HOS_DAYS',
      'NB ACCEPTED ALL',
      'EVENT_TYPE',
      'AIUDRMK2',
      'DIAG 2',
      'INSAGE',
      'OCCCODE',
      'NB_ACCEPTED_6M',
      'CAAPREM',
      'Sum of other features'
    ],
    datasets: [
      {
        label: 'Feature Importance',
        data: shape_explain_from_confidon,
        backgroundColor: (context) => {
            const value = context.dataset.data[context.dataIndex];
            const color = value > 0 ? 'rgb(90, 178, 255)' : 'rgb(255, 85, 128)';
            return color;
          },
          borderColor: (context) => {
            const value = context.dataset.data[context.dataIndex];
            const color = value > 0 ? 'rgb(90, 178, 255)' : 'rgb(255, 85, 128)';
            return color;
          },
          borderWidth: 1
      }
    ]
  });

  const chartOptions = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Feature Importance',
      }
    },
  };

  return (
    <div>
      <Bar options={chartOptions} data={chartData} />
    </div>
    
  );
};

export default MyChart;
