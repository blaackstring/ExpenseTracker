import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ExpenseData } from '../store/Slices/ExpensesAll';
import { ShowExpenses } from '../controller/UserInfo';
import UpdateModal from './UpdateModal';
import Deletemodal from './Deletemodal';


function AllExpenses() {
    const [allExpenses,setallExpenses]=useState([]);
    const newExpenses=useSelector((state)=>state.Expenses)
    const dispatch=useDispatch();
    useEffect(()=>{
        const fetchData=async()=>{
            const data=await ShowExpenses();
            console.log(data.allExpenses);
            setallExpenses(data?.allExpenses)
            dispatch(ExpenseData(data?.allExpenses))
         
        }
        fetchData();
    },[])

  useEffect(()=>{
    console.log(newExpenses);
    
    setallExpenses(newExpenses.data)
  },[newExpenses])
  return ( 
    <div className='w-full   '>
        <div className='w-full text-start p-2 text-2xl font-bold sticky top-0'>All Expenses</div>
   {  allExpenses?.length>0? <div className='w-full lg:grid-cols-2 md:grid-cols-2  lg:grid overflow-y-auto h-full max-h-[40vh] '>
        {allExpenses?.map((v,i)=>( 
           <div key={i} className='px-2 py-1 max-h-fit bg-black/10 m-1 rounded'>
            <div className='w-full flex justify-between'> 
              <Deletemodal v={v} setallExpenses={setallExpenses} allExpenses={allExpenses}/>
              <UpdateModal v={v}/>
      </div>
             <div  className=' flex   lg:text-lg w-full text-[12px]  justify-center items-center '>
                 <div className='w-full flex flex-col m-1 justify-center items-center'><span className='font-bold'>Category:</span>
                 <span>{v?.category}</span>
                 </div>
                <div  className='w-full flex flex-col m-1 justify-center items-center'><span  className='font-bold'>Amount:</span>
                <span>{v?.amount}</span>
                </div>
                <div  className='w-full flex flex-col m-1 justify-center items-center'>
                  <span  className='font-bold'>Description</span>
              <span className='
              '>
              {v?.description}
              </span>
                </div>
                <div  className='w-full flex flex-col m-1 justify-center items-center'><span  className='font-bold'>Date</span>
                <span>{v?.date.slice(0, 10).split('-').reverse().join('-')
                }</span>
                </div>
            </div>
           </div>
        ))}

      </div>:<div className='w-full flex items-center justify-center text-2xl font-bold'>No Expenses yet...</div>}
    </div>
  )
}

export default AllExpenses
