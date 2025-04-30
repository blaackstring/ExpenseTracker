import React, { useEffect, useState } from 'react';
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

import { parseISO, format } from 'date-fns'; // ✅ Helps format and parse dates
import { useSelector } from 'react-redux';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const [expenseData, setExpenseData] = useState([
  
  ]);



  const data=useSelector((state)=>state.Expenses)
  console.log(data.data);

  
useEffect(()=>{
  console.log(data.data);
  if(data.data!==null||data.data!=undefined)   setExpenseData(data?.data)
  
},[data.data])

useEffect(()=>{
  console.log(...expenseData);
  
},[expenseData])


  
  const monthTotals = {};

  expenseData.forEach(item => {
    const month = format(parseISO(item.date), 'MMMM'); // e.g., "January"
    if (monthTotals[month]) {
      monthTotals[month] += item.amount;
    } else {
      monthTotals[month] = item.amount;
    }
  });

  const chartData = {
    labels: Object.keys(monthTotals),
    datasets: [
      {
        label: 'Monthly Expenses',
        data: Object.values(monthTotals),
        backgroundColor: 'rgba(0, 204, 255, 0.5)',
        borderColor: 'rgba(0, 204, 255, 1)',
        borderWidth: 2,
        borderRadius: 8,
        hoverBackgroundColor: 'rgba(0, 204, 255, 0.7)',
        hoverBorderColor: 'rgba(0, 204, 255, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Expenses by Month',
        font: {
          size: 18,
          weight: 'bold',
        },
        color: '#333',
        padding: {
          top: 5,
          bottom: 10,
        },
        align: 'center',
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'rgba(0, 204, 255, 1)',
        borderWidth: 0.5,
        cornerRadius: 2,
        padding: 10,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
            weight: 'bold',
            color: '#555',
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          font: {
            size: 12,
            weight: 'bold',
            color: '#555',
          },
        },
      },
    },
    animation: {
      duration: 500,
      easing: 'easeOutBounce',
    },
    layout: {
      padding: {
        left: 12,
        right: 10,
        top: 0,
        bottom: 20,
      },
    },
  };

  return (
    <div className="chart-container" style={{ width: '90%', height: '500px' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
