import React, { useEffect, useState } from 'react'
import InputModal from '../components/InputModal'
import LineChart from '../components/charts/LineChart'
import PieChart from '../components/charts/PieChart';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RecentTransactions from '../components/RecentTransactions';

function Dashboard() {
      const [expenseData, setExpenseData] = useState([
        { category: 'Food', amount: 2003,date:'305' },
        { category: 'Transport', amount: 190,date:'30' },
        { category: 'Entertainment', amount:2330, date:'30' },
        { category: 'Eating', amount: 330,date:'30' },
        { category: 'Bills', amount: 330 ,date:'30' },
        { category: 'Movies', amount: 330,date:'30' },
      ]);
  
  return (
    <div className=' w-full'>
     <div className='w-full h-fit items-center justify-center flex'>
<div className='flex w-full items-center justify-center flex-col'>
<div className='top w-full'>

<LineChart expenseData={expenseData}/>
</div>
<div className='w-full  h-[60vh]'>
  <RecentTransactions/>
</div>
</div>
     </div>
    </div>
  )
}

export default Dashboard
