 import Login_Logout from './Slices/AuthSlice.js'
 import ExpenseAll from './Slices/ExpensesAll.js'
import {configureStore} from '@reduxjs/toolkit'
const store=configureStore({
    reducer:{
       UserDetails:Login_Logout,
       Expenses:ExpenseAll
    }
})

export default store