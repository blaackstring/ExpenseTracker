import React, { useEffect, useState } from 'react'
import Modal from './Modal';
import { AddExpenses, DeleteExpenses, UpdateExpenses } from '../controller/UserInfo.js';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { ExpenseData } from '../store/Slices/ExpensesAll.js';


function Deletemodal({v,setallExpenses,allExpenses}) {
      const [showModal, setShowModal] = useState(false);
      const dispatch=useDispatch()
      const FormHandler =async(e) => {
      try {
        e.preventDefault();
        console.log('processing....');
        console.log(v);
        
        await DeleteExpenses(v._id);
       const newarray=allExpenses.filter((val)=>val._id!=v._id)
       console.log(newarray);
       
       setallExpenses(newarray)
       dispatch(ExpenseData(newarray))
        toast.success('Expense Deleted Succeessfully')
        setShowModal(false)
      } catch (error) {
        toast.warn('Expense Deleted Failed')
      }
 }

    return (
        <div className=" flex text-[12px] lg:text-lg items-center justify-end p-2">
          <button
            onClick={() => setShowModal(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-md"
          >
         Delete
          </button>
    
          {showModal && (
            <div>
              <Modal onClose={() => setShowModal(false)}>
                <h2 className="text-2xl font-bold mb-4">Delete Expense</h2>
                <form className="space-y-4 flex justify-center flex-col items-center" onSubmit={FormHandler}>
                  <button
                    type="submit"
                    className="w-50 bg-red-500 hover:bg-purple-600 transition-all duration-200 ease-in-out  text-white py-2  rounded">
                    Delete
                  </button>
                  <button className="w-50 bg-green-600 hover:bg-purple-600 transition-all duration-200 ease-in-out text-white py-2  rounded" onClick={()=>setShowModal(false)}>No</button>
                </form>
               
    
              </Modal>
            </div>
          )}
        </div>
      );
}

export default Deletemodal
