import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { useSelector } from 'react-redux';

// Register the components needed for the chart
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart = () => {
  const [expenseData, setExpenseData] = useState([
    { category: 'Food', amount: 2003,date:'305' },
    { category: 'Transport', amount: 190,date:'30' },
    { category: 'Entertainment', amount:2330, date:'30' },
    { category: 'Eating', amount: 330,date:'30' },
    { category: 'Bills', amount: 330 ,date:'30' },
    { category: 'Movies', amount: 330,date:'30' },
  ]);
  const data=useSelector((state)=>state.Expenses)
  console.log(data.data);

  
useEffect(()=>{
  
  console.log(data);
    console.log(data.data);
    let foodamount=0;
    let travelamount=0;
    let otheramount=0;
    let  entertainmentamount=0;
    data?.data?.map((val,i)=>{
      switch(val?.category)
      {case 'Food':
              foodamount+=val.amount;
              break
        case 'Travel':
              travelamount+=val.amount
              break;
         case 'Entertainment':
                entertainmentamount+=val.amount
                break;
         case 'Other':
                  otheramount+=val.amount
                  break;
      }
    })
      
    setExpenseData([
      { category: 'Food', amount:foodamount},
      { category: 'Travel', amount:travelamount },
      { category: 'Entertainment',amount:entertainmentamount},
      { category: 'Other', amount:otheramount},
    ])
    
  
},[data.data])

useEffect(()=>{
  console.log(expenseData);
  
},[expenseData])
  console.log(expenseData);
  
  const chartData = {
    labels: expenseData.map(item =>item.category),
    datasets: [
      {
        label: 'Expense Distribution',
        data: expenseData.map(item => item.amount),
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)', // Red
          'rgba(54, 162, 235, 0.7)', // Blue
          'rgba(255, 206, 86, 0.7)', // Yellow
          'rgba(75, 192, 192, 0.7)', // Green
          'rgba(153, 102, 255, 0.7)', // Purple
          'rgba(255, 159, 64, 0.7)', // Orange
          'rgba(255, 99, 71, 0.7)',  // Tomato
          'rgba(0, 255, 255, 0.7)',  // Cyan
        ],
        borderColor: '#fff', // White border for each slice
        borderWidth: 2,
        hoverOffset: 10, // Adds a nice hover effect by increasing the offset when hovering
      },
    ],
  };

  // Chart options with modern and 3D-like styling
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Expense Distribution by Category',
        font: {
          size: 17,
          weight: 'bold',
          
        },
        color: 'black',
        padding: {
          top: 20,
          bottom: 20,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark tooltip background
        titleColor: 'white', // Tooltip title color
        bodyColor: 'white', // Tooltip body text color
        borderColor: 'rgba(0, 204, 255, 1)', // Tooltip border color
        borderWidth: 1,
        cornerRadius: 12, // Rounded corners for tooltips
        padding: 5,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', // Shadow for tooltip
      },
      legend: {
        position: 'top', // Position legend on top
        labels: {
          font: {
            size: 12,
            weight: 'bold',
            color: 'white', // Legend text color
          },
        },
      },
    },
    animation: {
      duration: 1000, // Animation duration
      easing: 'easeOutElastic', // Easing for animation
      animateScale: true, // Animate scale on load to give a popping effect
      animateRotate: true, // Animate rotation on load
    },
    cutout: '40%', // This gives the center a "donut" look
  };

  return (
    <div className="chart-container flex justify-center items-center text-teal-200  p-2" style={{ width: '100%' ,minWidth:"300px", height: '400px' }}>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
