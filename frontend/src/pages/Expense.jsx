import React, { useEffect, useState } from 'react'
import InputModal from '../components/InputModal'
import AllExpenses from '../components/AllExpenses'
import PieChart from '../components/charts/PieChart'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Expense() {
        const [expenseData, setExpenseData] = useState([
          { category: 'Food', amount: 2003,date:'305' },
          { category: 'Transport', amount: 190,date:'30' },
          { category: 'Entertainment', amount:2330, date:'30' },
          { category: 'Eating', amount: 330,date:'30' },
          { category: 'Bills', amount: 330 ,date:'30' },
          { category: 'Movies', amount: 330,date:'30' },
        ]);
        const data=useSelector((state)=>state.Expenses)
   
        
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

      
  return (
    <div className='w-full h-full '>
        <div className='w-full  flex justify-evenly'>
        <InputModal/>
        </div>

        <div className='flex  w-full p-1 justify-around flex-col '>
  <div className='w-full text-white flex justify-center items-center h-full bg-black/10 p-3  mb-2' > <PieChart /></div>
  <div className='min-h-[55vh] mt-2 mb-10 p-3 w-full  border-black/40'><AllExpenses/></div>

        </div>

       
    </div>
  )
}

export default Expense
