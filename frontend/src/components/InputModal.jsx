import { useEffect, useState } from 'react';
import Modal from './Modal';
import { AddExpenses } from '../controller/UserInfo.js';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { ExpenseData } from '../store/Slices/ExpensesAll.js';

const InputModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [Data, setData] = useState()
const dispatch=useDispatch()
  const FormHandler =async(e) => {
    e.preventDefault();
    console.log('processing....');
 try {
  const data=await AddExpenses(Data);
  console.log(data.addExpenseData);
  if(data.success)
  {   console.log(data.addExpenseData);
     dispatch(ExpenseData(data.addExpenseData))
    toast.success('Expense Updated Succeessfully');  
  console.log(Data);
  setShowModal(false);
  setData('')
  }
 } catch (error) {
  toast.warning('Error while Adding Expense')
 }
  }

  useEffect(()=>{
console.log(Data);
  },[Data])

  return (
    <div className=" flex w-full items-center justify-end p-2">
      <button
        onClick={() => setShowModal(true)}
        className="bg-purple-600 text-white px-4 py-2 rounded-md"
      >
     Add Expanse
      </button>

      {showModal && (
        <div>
          <Modal onClose={() => setShowModal(false)}>
            <h2 className="text-2xl font-bold mb-4">Add Expense</h2>
            <form className="space-y-4" onSubmit={FormHandler}>
              <div>
                <label className="block mb-1">Category</label>
                <select name="category" id="category"  className="w-full p-2 rounded border"
                  onChange={(e)=>setData((prev)=>({...prev,[e.target.name]:e.target.value}))}>
                    <option value=" ">default</option>
                  <option value="Food">Food</option>
                  <option value="Travel">Travel</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Other">Other</option>
                </select>

              </div>
              <div>
                <label className="block mb-1">Spend-On</label>
                <input
                 onChange={(e)=>setData((prev)=>({...prev,[e.target.name]:e.target.value}))}
                  name='SpendOn'
                  type="String"
                  placeholder="SpendOn"
                  className="border w-full p-2 rounded"
                />
              </div>

              <div>
                <label className="block mb-1">Amount</label>
                <input
                 onChange={(e)=>setData((prev)=>({...prev,[e.target.name]:e.target.value}))}
                  name='amount'
                  type="number"
                  placeholder="0.00"
                  className="border w-full p-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Description</label>
                <input
                  name='description'
                  type="String"
                  maxLength={30}
                  placeholder={`description`}
                  className="border w-full p-2 rounded"
                  onChange={(e)=>setData((prev)=>({...prev,[e.target.name]:e.target.value}))}
                />
              </div>
              <div>
                <label className="block mb-1">Date</label>
                <input
                  name='date'
                  type="date"
                  className="border w-full p-2 rounded"
                  onChange={(e)=>setData((prev)=>({...prev,[e.target.name]:e.target.value}))}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2  rounded">
                Submit
              </button>
            </form>

          </Modal>
        </div>
      )}
    </div>
  );
}
export default InputModal