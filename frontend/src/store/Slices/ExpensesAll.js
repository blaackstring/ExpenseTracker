import { createSlice } from "@reduxjs/toolkit";
import Expense from "../../pages/Expense";
import { login } from "../../controller/Auth";
const   initialState={
    data:null
}
const Allexpense=createSlice({
    name:'Expense',
    initialState,
    reducers:{
        ExpenseData: (state, action) => {
            if (Array.isArray(action.payload)) {
                // If it's an array of objects
                state.data =action.payload;
            } else if (typeof action.payload === 'object' && action.payload !== null) {
                // If it's a single object
                state.data = [...(state.data || []), action.payload];
            }
        },
        ClearAllExpense:()=>initialState
        
    }
})

export const {ExpenseData,ClearAllExpense}=Allexpense.actions
export default Allexpense.reducer